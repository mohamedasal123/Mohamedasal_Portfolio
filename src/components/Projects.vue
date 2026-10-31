<template>
  <section v-reveal id="projects" class="relative overflow-hidden py-24 sm:py-32" aria-labelledby="projects-heading">

    <!-- Glass veil — keeps the TechBackground canvas visible -->
    <div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-[2px] pointer-events-none z-0"></div>

    <!-- Separator lines -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>
    <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>

    <!-- Ambient orbs -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/8 blur-[130px] pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- ═══════════════ Header ═══════════════ -->
      <header class="mb-10 sm:mb-12 text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-3 mb-3">
          <span class="h-px w-8 bg-blue-500/60"></span>
          <span class="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">Portfolio</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 id="projects-heading" class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-2xl">
            <span class="line-mask block overflow-hidden">
              <span class="line-inner block">
                Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-300">projects</span>.
              </span>
            </span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-md font-light">
            Production platforms, backend systems, and brand design — shipped for real clients and real users.
          </p>
        </div>
      </header>

      <!-- ═══════════════ Filter pills ═══════════════ -->
      <div class="flex flex-wrap justify-center md:justify-start gap-2.5 mb-6 sm:mb-8" role="tablist" aria-label="Filter projects by category">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :id="`projects-filter-${tab.value}`"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.value"
          @click="setTab(tab.value)"
          class="filter-pill inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold border backdrop-blur-md cursor-pointer"
          :class="activeTab === tab.value ? 'filter-pill--active' : 'filter-pill--idle'"
        >
          {{ tab.label }}
          <span class="text-[11px] font-bold tabular-nums px-1.5 rounded-full" :class="activeTab === tab.value ? 'bg-white/20' : 'bg-slate-500/10'">{{ tab.count }}</span>
        </button>
      </div>
    </div>

    <!-- ═══════════════ Coverflow ═══════════════ -->
    <div class="relative z-10 max-w-[90rem] mx-auto px-2 sm:px-6">
      <Transition name="swap" mode="out-in">
        <Swiper
          :key="activeTab"
          :modules="swiperModules"
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="true"
          slides-per-view="auto"
          :loop="true"
          :speed="700"
          :coverflow-effect="{ rotate: 22, stretch: 0, depth: 200, modifier: 1.1, slideShadows: false }"
          :autoplay="{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }"
          class="projects-swiper"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <SwiperSlide v-for="(project, i) in slides" :key="`${project.id}-${i}`" class="project-slide opacity-60 hover:opacity-85 transition-all duration-300 [&.swiper-slide-active]:opacity-100">
            <article class="project-card group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800 shadow-2xl transition-all duration-300 [.swiper-slide-active_&]:dark:border-cyan-500/40 [.swiper-slide-active_&]:dark:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]">
              <div class="project-card__rim absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true"></div>

              <!-- Top Browser Mockup Frame -->
              <div class="relative m-3 mb-0 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/80 bg-slate-950">
                <div class="flex items-center gap-2 px-3.5 py-2.5 bg-slate-100/90 dark:bg-slate-950/70 border-b border-slate-200/70 dark:border-slate-800">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                  <span class="ml-2 flex-1 truncate rounded-md bg-white/80 dark:bg-slate-900/90 px-2.5 py-0.5 text-[10px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800/80">
                    {{ project.domain }}
                  </span>
                </div>
                <div class="relative aspect-[16/10] overflow-hidden">
                  <img
                    :src="project.image"
                    :alt="project.alt"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div class="project-card__glare absolute inset-0 pointer-events-none" aria-hidden="true"></div>
                  <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md border border-white/15" :class="categoryMeta[project.category].badge">
                    {{ categoryMeta[project.category].short }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex flex-col flex-1 p-5 sm:p-6">
                <!-- Project Title -->
                <h3 class="text-slate-900 dark:text-white font-bold text-xl md:text-2xl tracking-tight leading-tight mb-2">
                  {{ project.title }}
                </h3>
                <!-- Project Description -->
                <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2 mb-4">
                  {{ project.summary }}
                </p>

                <!-- Tech Stack Pills -->
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="tech-pill bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/70 text-xs font-mono font-medium px-2.5 py-1 rounded-lg"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Action Buttons (GitHub & Live Demo) -->
                <div class="mt-auto flex gap-2.5">
                  <a
                    v-if="project.live"
                    :href="project.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-cyan-500/25 px-4 py-2 rounded-xl transition-all text-sm"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    v-if="project.repo"
                    :href="project.repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium px-4 py-2 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    v-if="!project.live && !project.repo"
                    :href="project.image"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium px-4 py-2 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    View Full Design <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </Transition>

      <!-- Glass nav buttons -->
      <button id="projects-prev" type="button" class="nav-btn left-1 sm:left-4" aria-label="Previous project" @click="swiperRef?.slidePrev()">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button id="projects-next" type="button" class="nav-btn right-1 sm:right-4" aria-label="Next project" @click="swiperRef?.slideNext()">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      <!-- Pagination pills (one per real project, ignoring loop duplicates) -->
      <div class="mt-4 flex items-center justify-center gap-2.5" role="tablist" aria-label="Project slides">
        <button
          v-for="(p, i) in filtered"
          :key="p.id"
          type="button"
          role="tab"
          :aria-selected="activeIndex === i"
          :aria-label="`Go to ${p.title}`"
          class="pager-pill cursor-pointer"
          :class="{ 'pager-pill--active': activeIndex === i }"
          @click="swiperRef?.slideToLoop(i)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, shallowRef } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Navigation/Pagination are registered as requested; the UI uses custom controls bound to the instance.
const swiperModules = [EffectCoverflow, Navigation, Pagination, Autoplay];

const categoryMeta = {
  fullstack: { label: 'Full-Stack & E-Commerce', short: 'Full-Stack', badge: 'bg-cyan-600/80' },
  backend: { label: 'AI & Backend', short: 'AI · Backend', badge: 'bg-emerald-600/80' },
  design: { label: 'UI Design', short: 'Design', badge: 'bg-purple-600/80' },
};

const projects = [
  {
    id: 'liven',
    category: 'fullstack',
    title: 'Liven Factory',
    summary: 'Bilingual (AR/EN) furniture platform for a real client — 4+ dynamic modules including an analytics dashboard and lead-generation flows.',
    image: '/livenfactory.jpeg',
    alt: 'Liven Factory furniture platform screenshot',
    domain: 'liven.lovestoblog.com',
    live: 'https://liven.lovestoblog.com/',
    repo: 'https://github.com/mohamedasal123/livenfactory',
    tags: ['Laravel 12', 'Vue 3', 'Pinia', 'Tailwind CSS', 'MySQL', 'Sanctum'],
  },
  {
    id: 'smartjob',
    category: 'backend',
    title: 'Smart Job Portal',
    summary: 'AI-powered recruitment platform with role-based access for Admin, Employer, and Candidate, plus Python/FastAPI smart CV matching.',
    image: '/smartjob.jpeg',
    alt: 'Smart Job Portal AI recruitment platform screenshot',
    domain: 'github.com/mohamedasal123/Smart_job_portal_v2',
    live: null,
    repo: 'https://github.com/mohamedasal123/Smart_job_portal_v2',
    tags: ['Laravel', 'React', 'Python', 'FastAPI', 'MySQL', 'REST APIs'],
  },
   {
    id: 'portfolio',
    category: 'fullstack',
    title: 'Mohamed Asal — 3D Portfolio',
    summary: 'Modern interactive 3D personal portfolio engineered with Vue 3, Vite 7, and Tailwind CSS v4, featuring an HTML5 particle canvas, Swiper 3D coverflow, and physics-based tilt micro-interactions.',
    image: '/portfoliomockup.png',
    alt: 'Mohamed Asal 3D interactive portfolio website screenshot',
    domain: 'mohamedasal-portfolio.vercel.app',
    live: 'https://mohamedasal-portfolio.vercel.app',
    repo: 'https://github.com/mohamedasal123/Mohamedasal_Portfolio',
    tags: ['Vue 3', 'Vite 7', 'Tailwind CSS v4', 'Swiper 12', '3D Motion', 'HTML5 Canvas'],
  },
  {
    id: 'php-ecommerce',
    category: 'fullstack',
    title: 'PHP E-Commerce Store',
    summary: 'Native PHP storefront with product listing, session-based cart, checkout, and full CRUD for products and categories.',
    image: '/p1.jpeg',
    alt: 'Native PHP e-commerce application screenshot',
    domain: 'github.com/mohamedasal123/e-commerce_php_native',
    live: null,
    repo: 'https://github.com/mohamedasal123/e-commerce_php_native',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'laravel-crud',
    category: 'backend',
    title: 'Laravel CRUD System',
    summary: 'Clean MVC CRUD system with Blade templates, Eloquent ORM, validation, and a scalable project structure.',
    image: '/laravel.png',
    alt: 'Laravel CRUD system screenshot',
    domain: 'github.com/mohamedasal123/CURDS_LARAVEL',
    live: null,
    repo: 'https://github.com/mohamedasal123/CURDS_LARAVEL',
    tags: ['Laravel', 'PHP', 'Blade', 'Eloquent', 'MySQL'],
  },
  {
    id: 'alqudra-engineering',
    category: 'design',
    title: 'Al-Qudra Engineering Portfolio',
    summary: 'Corporate digital identity & web platform for a leading Saudi contracting firm, showcasing structural engineering, MEP workflows, and Saudi Building Code compliance.',
    image: '/alqudra.png',
    alt: 'Al-Qudra Engineering Saudi contracting platform portfolio mockup',
    domain: 'https://drive.google.com/file/d/1fszu7h1ArUjiXD0Z02EVeUjMXEe4OoPx/view?usp=sharing',
    live: 'https://drive.google.com/file/d/1fszu7h1ArUjiXD0Z02EVeUjMXEe4OoPx/view?usp=sharing',
    repo: null,
    tags: ['Design', 'Corporate Identity', 'Saudi Building Code', 'B2B Platform'],
  },
  {
    id: 'math-poster',
    category: 'design',
    title: 'Mathematics Teacher Poster',
    summary: 'Promotional poster with modern typography, a clean educational layout, and visuals that highlight academic excellence.',
    image: '/mahmoud.png',
    alt: 'Mathematics teacher promotional poster design',
    domain: 'design / poster',
    live: null,
    repo: null,
    tags: ['Poster Design', 'Typography', 'Education'],
  },
  {
    id: 'ortho-banner',
    category: 'design',
    title: 'Orthopedic Clinic Banner',
    summary: 'Clean medical-aesthetic banner highlighting bone and joint care services with a professional healthcare layout.',
    image: '/dr%20mostafa1.jpg',
    alt: 'Orthopedic clinic promotional banner design',
    domain: 'design / healthcare',
    live: null,
    repo: null,
    tags: ['Clinic Branding', 'Banner', 'Healthcare'],
  },
  {
    id: 'liven-logo',
    category: 'design',
    title: 'Liven Furniture Logo',
    summary: 'Minimal geometric identity for a furniture manufacturer, reflecting craftsmanship and premium woodwork quality.',
    image: '/logoliven.jpeg',
    alt: 'Liven furniture manufacturing logo design',
    domain: 'design / brand identity',
    live: null,
    repo: null,
    tags: ['Brand Identity', 'Logo Design', 'Furniture'],
  },
];

const activeTab = ref('all');

const tabs = computed(() => [
  { value: 'all', label: 'All Projects', count: projects.length },
  ...Object.entries(categoryMeta).map(([value, meta]) => ({
    value,
    label: meta.label,
    count: projects.filter((p) => p.category === value).length,
  })),
]);

const filtered = computed(() =>
  activeTab.value === 'all' ? projects : projects.filter((p) => p.category === activeTab.value),
);

// Coverflow + loop needs enough slides on each side of the centre; repeat small sets.
const MIN_SLIDES = 8;
const slides = computed(() => {
  const base = filtered.value;
  if (!base.length) return [];
  const out = [...base];
  while (out.length < MIN_SLIDES) out.push(...base);
  return out;
});

const swiperRef = shallowRef(null);
const activeIndex = ref(0);

const onSwiper = (instance) => {
  swiperRef.value = instance;
  activeIndex.value = 0;
};

const onSlideChange = (instance) => {
  activeIndex.value = instance.realIndex % filtered.value.length;
};

const setTab = (value) => {
  if (activeTab.value === value) return;
  activeTab.value = value; // :key on <Swiper> re-initialises it cleanly for the new set
};
</script>

<style scoped>
/* ───────────── Swiper layout ───────────── */
:deep(.projects-swiper) {
  padding: 2.5rem 0 3rem;
  overflow: visible;
}
:deep(.projects-swiper .swiper-wrapper) {
  align-items: stretch;
}
:deep(.projects-swiper .swiper-slide) {
  width: 86vw;
  max-width: 340px;
  height: auto;
  opacity: 0.6;
  filter: saturate(0.85);
  transition: opacity 300ms ease, filter 300ms ease;
}
@media (min-width: 640px) {
  :deep(.projects-swiper .swiper-slide) { max-width: 440px; }
}
@media (min-width: 1024px) {
  :deep(.projects-swiper .swiper-slide) { max-width: 500px; }
}
:deep(.projects-swiper .swiper-slide:hover) {
  opacity: 0.85;
  filter: saturate(1);
}
:deep(.projects-swiper .swiper-slide-active) {
  opacity: 1 !important;
  filter: none;
}

/* ───────────── Card ───────────── */
.project-card {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Active center card glow in dark mode */
:global(.dark) :deep(.swiper-slide-active .project-card) {
  border-color: rgba(6, 182, 212, 0.4) !important;
  box-shadow: 0 0 40px -10px rgba(6, 182, 212, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
}

/* Neon rim — revolving glowing laser beam on the active center card */
.project-card__rim {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  pointer-events: none;
  overflow: hidden;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 500ms ease;
  z-index: 10;
}
.project-card__rim::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250%;
  height: 250%;
  transform: translate(-50%, -50%);
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 280deg,
    rgba(59, 130, 246, 0.6) 320deg,
    rgba(6, 182, 212, 1) 345deg,
    rgba(16, 185, 129, 1) 360deg
  );
  animation: border-beam-spin 4s linear infinite;
  will-change: transform;
}
:deep(.swiper-slide-active) .project-card__rim {
  opacity: 1;
}

.project-card__glare {
  background: linear-gradient(125deg, rgba(255, 255, 255, 0.18) 0%, transparent 35%, transparent 70%, rgba(255, 255, 255, 0.06) 100%);
}

/* Tech pills */
.tech-pill {
  transition: border-color 200ms ease, color 200ms ease, box-shadow 200ms ease;
}
.tech-pill:hover {
  border-color: rgba(34, 211, 238, 0.6);
  color: #0891b2;
  box-shadow: 0 0 12px -3px rgba(34, 211, 238, 0.4);
}
:global(.dark) .tech-pill:hover {
  border-color: rgba(6, 182, 212, 0.6);
  color: #67e8f9;
}

/* Buttons */
.btn-primary {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms ease, filter 250ms ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
}
.btn-secondary {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), border-color 250ms ease, background-color 250ms ease;
}
.btn-secondary:hover {
  transform: translateY(-2px);
}

/* Filter pills */
.filter-pill {
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.filter-pill--idle {
  background: rgba(255, 255, 255, 0.6);
  border-color: rgba(148, 163, 184, 0.3);
  color: #475569;
}
:global(.dark) .filter-pill--idle {
  background: rgba(15, 23, 42, 0.5);
  border-color: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}
.filter-pill--idle:hover {
  border-color: rgba(34, 211, 238, 0.5);
  color: #0891b2;
}
:global(.dark) .filter-pill--idle:hover { color: #e2e8f0; }
.filter-pill--active {
  background: linear-gradient(135deg, #0891b2, #2563eb);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 8px 24px -8px rgba(34, 211, 238, 0.7);
}

/* Nav buttons */
.nav-btn {
  position: absolute;
  top: calc(50% - 1.5rem);
  transform: translateY(-50%);
  z-index: 20;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.35);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.3);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), border-color 250ms ease, box-shadow 250ms ease;
}
:global(.dark) .nav-btn {
  color: #f1f5f9;
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.12);
}
.nav-btn:hover {
  transform: translateY(-50%) scale(1.08);
  border-color: rgba(34, 211, 238, 0.7);
  box-shadow: 0 0 24px -4px rgba(34, 211, 238, 0.6);
}

/* Pagination pills */
.pager-pill {
  width: 9px;
  height: 9px;
  border-radius: 9999px;
  background: rgba(148, 163, 184, 0.45);
  transition: width 350ms cubic-bezier(0.16, 1, 0.3, 1), background 350ms ease, box-shadow 350ms ease;
}
.pager-pill--active {
  width: 32px;
  background: linear-gradient(90deg, #22d3ee, #10b981);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.7);
}

/* Filter swap transition */
.swap-enter-active,
.swap-leave-active {
  transition: opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .swap-enter-active,
  .swap-leave-active,
  .btn-primary,
  .btn-secondary,
  .nav-btn { transition: none; }
}
</style>