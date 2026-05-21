import { onMounted, onUnmounted, ref } from 'vue';

export const useActiveSection = (sectionIds = []) => {
  const activeSection = ref(sectionIds[0] || '');
  let observer = null;
  let sections = [];
  let ticking = false;

  const updateFromScroll = () => {
    const marker = window.scrollY + Math.min(window.innerHeight * 0.42, 360);
    const passedSections = sections.filter((section) => section.offsetTop <= marker);
    const current = passedSections[passedSections.length - 1];

    if (current?.id) {
      activeSection.value = `#${current.id}`;
    }
  };

  const handleScroll = () => {
    if (ticking) return;

    ticking = true;
    requestAnimationFrame(() => {
      updateFromScroll();
      ticking = false;
    });
  };

  onMounted(() => {
    sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (!sections.length) return;
    updateFromScroll();

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          activeSection.value = `#${visible.target.id}`;
        }
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: [0.18, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    observer?.disconnect();
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  });

  return { activeSection };
};
