const reduceMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const revealDirective = {
  mounted(el, binding) {
    if (reduceMotion()) {
      el.classList.add('is-visible');
      return;
    }

    const delay = Number(binding.value?.delay || 0);
    el.classList.add('motion-reveal');
    el.style.setProperty('--reveal-delay', `${delay}ms`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('is-visible');
        observer.disconnect();
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    );

    observer.observe(el);
    el.__revealObserver = observer;
  },
  unmounted(el) {
    el.__revealObserver?.disconnect();
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
    };

    const move = (event) => {
      rect ||= el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty('--tilt-x', `${(-y * strength).toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${(x * strength).toFixed(2)}deg`);
        el.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`);
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
