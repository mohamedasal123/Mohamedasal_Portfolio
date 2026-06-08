<template>
    <section v-reveal class="py-24 sm:py-32 overflow-hidden relative" id="projects">

        <!-- glass veil -->
<div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-[2px] pointer-events-none z-0"></div>
        <!-- separator lines -->
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent pointer-events-none z-0"></div>
        <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent pointer-events-none z-0"></div>

        <!-- accent orb -->
        <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/6 blur-[140px] rounded-full pointer-events-none z-0"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="mb-16 md:mb-24" data-aos="fade-up">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="h-px w-8 bg-blue-500/60"></span>
                            <p class="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">Portfolio</p>
                        </div>
                        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                            Featured <br class="hidden sm:block">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Projects</span>
                        </h2>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 text-lg font-light max-w-sm leading-relaxed">
                        A curated selection of work spanning web development and graphic design.
                    </p>
                </div>

                <!-- Filter Tabs -->
                <div class="flex flex-wrap gap-3 mt-12" data-aos="fade-up" data-aos-delay="100">
                    <button
                        v-for="tab in tabs"
                        :key="tab.value"
                        @click="handleTabChange(tab.value)"
                        :class="[
                            'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border',
                            activeTab === tab.value
                                ? 'bg-slate-950 dark:bg-white/10 border-slate-950 dark:border-white/20 text-white shadow-lg backdrop-blur-sm'
                                : 'bg-slate-100 dark:bg-white/[0.04] border-slate-250/20 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/[0.07] hover:text-slate-950 dark:hover:text-slate-200'
                        ]"
                    >
                        {{ tab.label }}
                        <span :class="['ml-2 text-xs font-bold', activeTab === tab.value ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600']">
                            {{ tab.count }}
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Swiper -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="150">

            <Swiper
                :modules="swiperModules"
                :slides-per-view="1"
                :space-between="24"
                :loop="true"
                :speed="600"
                :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
                :navigation="{ nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }"
                :pagination="{ clickable: true, el: '.swiper-custom-pagination' }"
                :breakpoints="{
                    640:  { slidesPerView: 1 },
                    768:  { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }"
                :key="activeTab"
                watch-slides-progress
                class="projects-swiper"
            >
                <SwiperSlide v-for="(project, index) in filteredProjects" :key="project.id">
                    <div v-tilt="{ strength: 6 }" class="project-card group" :style="{ '--card-delay': `${index * 70}ms` }">

                        <!-- Image -->
                        <div class="project-card__image">
                            <img
                                :src="project.img_src"
                                :alt="project.alt"
                                loading="lazy"
                                decoding="async"
                                class="project-card__img"
                            >

                            <!-- Hover Overlay -->
                            <div class="project-card__overlay">
                                <div class="flex flex-col items-center gap-3">
                                    <a
                                        v-if="project.link_code && project.link_code !== '#'"
                                        :href="project.link_code"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="project-card__btn"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a
                                        v-if="project.link_live && project.link_live !== '#'"
                                        :href="project.link_live"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="project-card__btn project-card__btn--live"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <span v-if="project.link_code === '#'" class="project-card__btn project-card__btn--ghost">
                                        Design Project
                                    </span>
                                </div>
                            </div>

                            <!-- Badge -->
                            <span :class="['project-card__badge', project.category === 'dev' ? 'project-card__badge--dev' : 'project-card__badge--design']">
                                {{ project.category === 'dev' ? 'Dev' : 'Design' }}
                            </span>
                        </div>

                        <!-- Body -->
                        <div class="project-card__body">
                            <div class="flex items-start gap-4 mb-3">
                                <span class="text-[11px] font-black text-slate-400 dark:text-white/20 mt-1.5 tabular-nums shrink-0">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </span>
                                <h3 class="text-xl font-extrabold text-slate-900 dark:text-white/90 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {{ project.title }}
                                </h3>
                            </div>

                            <p class="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed line-clamp-2 pl-9 mb-6">
                                {{ project.decs }}
                            </p>

                            <div class="mt-auto pl-9 flex flex-wrap gap-2">
                                <span
                                    v-for="tag in project.tags"
                                    :key="tag"
                                    class="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <!-- Nav Buttons -->
            <button class="swiper-btn-prev" aria-label="Previous project">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button class="swiper-btn-next" aria-label="Next project">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            <div class="swiper-custom-pagination mt-10 flex items-center justify-center gap-2"></div>
        </div>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperModules = [Navigation, Pagination, Autoplay];
const activeTab = ref('all');

const projects = ref([
    // ── Dev projects (from CV) ──────────────────────────────────
    {
        id: 1,
        img_src: 'livenfactory.jpeg',
        title: 'Liven Factory',
        decs: 'Bilingual (AR/EN) full-stack furniture platform for a real client — 4+ dynamic modules including analytics dashboard and lead generation.',
        alt: 'Liven Factory furniture platform',
        link_code: 'https://github.com/mohamedasal123/livenfactory',
        link_live: 'https://liven.lovestoblog.com/',
        tags: ['Laravel 12', 'Vue 3', 'Pinia', 'Tailwind', 'MySQL', 'Sanctum'],
        category: 'dev',
    },
    {
        id: 2,
        img_src: 'smartjob.jpeg',
        title: 'Smart Job Portal',
        decs: 'AI-powered recruitment platform with role-based access for 3 user types (Admin, Employer, Candidate) and Python/FastAPI smart CV matching.',
        alt: 'Smart Job Portal AI recruitment platform',
        link_code: 'https://github.com/mohamedasal123/Smart_job_portal_v2',
        link_live: null,
        tags: ['Laravel', 'React', 'Python', 'FastAPI', 'MySQL', 'REST API'],
        category: 'dev',
    },
    {
        id: 3,
        img_src: 'p1.jpeg',
        title: 'PHP E-Commerce',
        decs: 'Full e-commerce app in native PHP — product listing, cart system, checkout, session-based cart, and CRUD for products & categories.',
        alt: 'PHP native e-commerce application',
        link_code: 'https://github.com/mohamedasal123/e-commerce_php_native',
        link_live: null,
        tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        category: 'dev',
    },
    {
        id: 4,
        img_src: 'laravel.png',
        title: 'Laravel CRUD System',
        decs: 'Full CRUD system using Laravel with clean MVC architecture, Blade templates, Eloquent ORM, and scalable project structure.',
        alt: 'Laravel CRUD system',
        link_code: 'https://github.com/mohamedasal123/CURDS_LARAVEL',
        link_live: null,
        tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'MVC'],
        category: 'dev',
    },

    // ── Design projects (unchanged) ─────────────────────────────
    {
    id: 5,
    img_src: 'mahmoud.png',
    title: 'Mathematics Teacher Promotional Poster',
    decs: 'A professional promotional poster designed for a mathematics teacher, featuring modern typography, a clean educational layout, and visual elements that highlight mathematical concepts and academic excellence.',
    alt: 'Professional mathematics teacher poster design',
    link_code: '#',
    link_live: null,
    tags: ['Educational Design', 'Poster Design', 'Mathematics'],
    category: 'design',
    },
    {
    id: 6,
    img_src: 'dr mostafa.jpg',
    title: 'Orthopedic Clinic Promotional Banner',
    decs: 'A modern promotional banner for an orthopedic clinic, designed with a clean medical aesthetic, highlighting bone and joint care services with a professional healthcare-focused layout.',
    alt: 'Orthopedic clinic promotional banner design',
    link_code: '#',
    link_live: null,
    tags: ['Clinic Branding', 'Orthopedic', 'Medical Banner'],
    category: 'design',
},
   {
    id: 7,
    img_src: 'logoliven.jpeg',
    title: 'Modern Furniture Manufacturing Logo',
    decs: 'A sleek and modern logo identity for a furniture manufacturing brand, designed to reflect strength, craftsmanship, and premium woodwork quality through minimal and geometric design elements.',
    alt: 'Modern furniture manufacturing logo design',
    link_code: '#',
    link_live: null,
    tags: ['Brand Identity', 'Logo Design', 'Furniture Industry'],
    category: 'design',
},
]);

const tabs = computed(() => [
    { label: 'All Work',    value: 'all',    count: projects.value.length },
    { label: 'Development', value: 'dev',    count: projects.value.filter(p => p.category === 'dev').length },
    { label: 'Design',      value: 'design', count: projects.value.filter(p => p.category === 'design').length },
]);

const filteredProjects = computed(() =>
    activeTab.value === 'all'
        ? projects.value
        : projects.value.filter(p => p.category === activeTab.value)
);

const handleTabChange = (val) => { activeTab.value = val; };
</script>

<style scoped>
:deep(.projects-swiper) { padding-bottom: 4px; }
:deep(.projects-swiper .swiper-wrapper) { align-items: stretch; }
:deep(.projects-swiper .swiper-slide) { height: auto; display: flex; }

/* Card */
.project-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: 2rem;
    overflow: hidden;
    transition: background 0.3s ease, border-color 0.3s ease;
    animation: card-enter 620ms cubic-bezier(0.16,1,0.3,1) var(--card-delay,0ms) both;
    backdrop-filter: blur(4px);
}

.project-card:hover {
    background: var(--surface-strong);
    border-color: var(--primary);
}

/* Image */
.project-card__image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    flex-shrink: 0;
    width: 100%;
}

.project-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease, filter 0.3s ease;
    will-change: transform;
}

.project-card:hover .project-card__img {
    transform: scale(1.05);
    filter: brightness(1.05);
}

/* Overlay */
.project-card__overlay {
    position: absolute;
    inset: 0;
    background: rgba(8,11,18,0.80);
    backdrop-filter: blur(3px);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-card:hover .project-card__overlay { opacity: 1; }

.project-card__btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #ffffff;
    color: #0f172a;
    font-weight: 700;
    font-size: 0.8rem;
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    text-decoration: none;
    transform: translateY(8px);
    transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.project-card:hover .project-card__btn { transform: translateY(0); }
.project-card__btn:hover { background: #2563eb; color: #fff; }

.project-card__btn--live {
    background: rgba(255,255,255,0.12);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.2);
}
.project-card__btn--live:hover { background: #10b981; color: #fff; border-color: #10b981; }

.project-card__btn--ghost {
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.15);
    cursor: default;
}
.project-card__btn--ghost:hover { background: rgba(255,255,255,0.1); color: #fff; }

/* Badge */
.project-card__badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 0.6rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.35rem 0.7rem;
    border-radius: 9999px;
    backdrop-filter: blur(8px);
    color: #fff;
}

.project-card__badge--dev    { background: rgba(37,99,235,0.85);  }
.project-card__badge--design { background: rgba(124,58,237,0.85); }

/* Body */
.project-card__body {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    padding: 1.75rem 2rem;
}

/* Nav buttons */
.swiper-btn-prev,
.swiper-btn-next {
    position: absolute;
    top: 33%;
    transform: translateY(-50%);
    z-index: 10;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 9999px;
    border: 1px solid var(--border-soft);
    background: var(--surface);
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.swiper-btn-prev:hover,
.swiper-btn-next:hover {
    background: #2563eb;
    color: #fff;
    border-color: #2563eb;
}

.swiper-btn-prev { left: -1rem; }
.swiper-btn-next { right: -1rem; }

.swiper-btn-prev.swiper-button-disabled,
.swiper-btn-next.swiper-button-disabled { opacity: 0.3; cursor: not-allowed; pointer-events: none; }

:deep(.swiper-custom-pagination .swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: rgba(148, 163, 184, 0.4);
    opacity: 1;
    transition: background 0.3s ease, width 0.3s ease;
    display: inline-block;
    cursor: pointer;
}

:deep(.swiper-custom-pagination .swiper-pagination-bullet-active) {
    background: #2563eb;
    width: 24px;
}

@keyframes card-enter {
    from { opacity: 0; transform: translate3d(0,24px,0) scale(0.98); }
    to   { opacity: 1; transform: translate3d(0,0,0) scale(1); }
}
</style>