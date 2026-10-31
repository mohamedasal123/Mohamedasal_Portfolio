const reduceMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const revealDirective = {
  mounted(el, binding) {
    const delay = Number(binding.value?.delay || 0);
    const variant = binding.value?.variant || el.dataset.reveal || 'spatial-pop';
    const distance = Number(binding.value?.distance || 35);

    el.classList.add('motion-reveal');
    el.dataset.reveal = variant;
    el.style.setProperty('--reveal-delay', `${delay}ms`);
    el.style.setProperty('--reveal-distance', `${distance}px`);

    // Detect grid containers: apply a 90ms staggered delay for child items
    const isGrid = el.matches('.grid, [class*="grid"]');
    const gridItems = isGrid
      ? Array.from(el.children)
      : Array.from(el.querySelectorAll(':scope > .grid > *, :scope > [class*="grid"] > *'));

    if (gridItems.length > 0) {
      gridItems.forEach((child, index) => {
        child.classList.add('motion-reveal');
        const childDelay = delay + index * 90;
        child.style.setProperty('--reveal-delay', `${childDelay}ms`);
      });
    }

    if (reduceMotion()) {
      el.classList.add('is-visible');
      gridItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const setVisible = () => {
      el.classList.add('is-visible');
      if (gridItems.length > 0) {
        gridItems.forEach((item) => item.classList.add('is-visible'));
      }
    };

    // Immediate viewport check: if the element is already substantially
    // visible when mounted (e.g. Hero section on page load), mark it visible
    // right away without waiting for IntersectionObserver async callback.
    const immediateRect = el.getBoundingClientRect();
    const inViewport =
      immediateRect.top < window.innerHeight * 0.95 &&
      immediateRect.bottom > window.innerHeight * 0.05;

    if (inViewport) {
      // Use double rAF so the initial 3D transform is painted before transitioning
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible();
        });
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible();
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.1,
      },
    );

    observer.observe(el);
    el.__revealObserver = observer;
  },
  unmounted(el) {
    el.__revealObserver?.disconnect();
  },
};

export const staggerDirective = {
  mounted(el, binding) {
    const selector = binding.value?.selector || '[data-stagger-item], :scope > *';
    const baseDelay = Number(binding.value?.delay || 0);
    const step = Number(binding.value?.step || 90);
    const variant = binding.value?.variant || 'spatial-pop';
    const items = [...el.querySelectorAll(selector)];

    items.forEach((item, index) => {
      item.classList.add('motion-reveal');
      item.dataset.reveal = item.dataset.reveal || variant;
      item.style.setProperty('--reveal-delay', `${baseDelay + index * step}ms`);
    });

    if (reduceMotion()) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        items.forEach((item) => item.classList.add('is-visible'));
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      },
    );

    observer.observe(el);
    el.__staggerObserver = observer;
  },
  unmounted(el) {
    el.__staggerObserver?.disconnect();
  },
};

export const progressDirective = {
  mounted(el, binding) {
    const value = Number(binding.value?.value || el.dataset.value || 0);
    el.style.setProperty('--progress-target', `${value}%`);
    el.style.setProperty('--progress-width', reduceMotion() ? `${value}%` : '0%');

    if (reduceMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.setProperty('--progress-width', `${value}%`);
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.3,
      },
    );

    observer.observe(el);
    el.__progressObserver = observer;
  },
  unmounted(el) {
    el.__progressObserver?.disconnect();
  },
};

export const tiltDirective = {
  mounted(el, binding) {
    if (reduceMotion()) return;

    const strength = Number(binding.value?.strength || 8);
    const glare = binding.value?.glare !== false;
    let rect = null;
    let rafId = null;

    el.classList.add('motion-tilt');
    if (glare) el.classList.add('motion-tilt-glare');

    const reset = () => {
      rect = null;
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
      el.style.setProperty('--glare-x', '50%');
      el.style.setProperty('--glare-y', '50%');
      el.style.setProperty('--shadow-x', '0px');
      el.style.setProperty('--shadow-y', '0px');
      el.style.setProperty('--tilt-active', '0');
    };

    const move = (event) => {
      rect ||= el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const tx = (-y * strength).toFixed(2);
        const ty = (x * strength).toFixed(2);
        el.style.setProperty('--tilt-x', `${tx}deg`);
        el.style.setProperty('--tilt-y', `${ty}deg`);
        el.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`);
        // Dynamic shadow: shifts opposite to tilt for a depth illusion
        el.style.setProperty('--shadow-x', `${(x * strength * 2.2).toFixed(2)}px`);
        el.style.setProperty('--shadow-y', `${(y * strength * 2.2).toFixed(2)}px`);
        // Scale slightly on hover activity
        el.style.setProperty('--tilt-active', '1');
      });
    };

    const leave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      reset();
    };

    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    el.__tiltCleanup = () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  },
  unmounted(el) {
    el.__tiltCleanup?.();
  },
};
