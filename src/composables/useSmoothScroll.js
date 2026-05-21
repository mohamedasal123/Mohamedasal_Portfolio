const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const smoothScrollTo = (target, offset = 96) => {
  if (typeof window === 'undefined') return;

  const element = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
};

export const scrollToTop = () => {
  if (typeof window === 'undefined') return;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
};
