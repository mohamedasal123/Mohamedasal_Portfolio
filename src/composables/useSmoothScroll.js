const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const smoothScrollTo = (target, offset = -80) => {
  if (typeof window === 'undefined') return;

  const targetId = typeof target === 'string'
    ? target
    : target?.id
      ? `#${target.id}`
      : null;

  if (window.__lenis) {
    const scrollTarget = targetId || target;
    const lenisOffset = typeof offset === 'number' && offset > 0 ? -offset : (offset ?? -80);
    window.__lenis.scrollTo(scrollTarget, { offset: lenisOffset, duration: 1.4 });
  } else {
    if (targetId) {
      document.querySelector(targetId)?.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    } else if (target?.scrollIntoView) {
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    }
  }
};

export const scrollToTop = () => {
  if (typeof window === 'undefined') return;

  if (window.__lenis) {
    window.__lenis.scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }
};

