<template>
    <section class="py-24 sm:py-32 overflow-hidden relative bg-white dark:bg-[#020617]" id="projects">

        <!-- Background accent -->
        <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/4 dark:bg-blue-600/4 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
            <div class="mb-16 md:mb-24" data-aos="fade-up">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <p class="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">Portfolio</p>
                        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                            Featured <br class="hidden sm:block">
                            <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Projects</span>
                        </h2>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-lg font-light max-w-sm leading-relaxed">
                        A curated selection of work spanning web development and graphic design.
                    </p>
                </div>

                <!-- Category Filter Tabs -->
                <div class="flex flex-wrap gap-3 mt-12" data-aos="fade-up" data-aos-delay="100">
                    <button
                        v-for="tab in tabs"
                        :key="tab.value"
                        @click="handleTabChange(tab.value)"
                        :class="[
                            'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                            activeTab === tab.value
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        ]"
                    >
                        {{ tab.label }}
                        <span :class="['ml-2 text-xs font-bold', activeTab === tab.value ? 'text-blue-400 dark:text-blue-500' : 'text-slate-400']">
                            {{ tab.count }}
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Swiper Slider -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="150">

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
                <SwiperSlide
                    v-for="(project, index) in filteredProjects"
                    :key="project.id"
                >
                    <!-- Card — fixed height via flex column + stretch -->
                    <div class="project-card group">

                        <!-- Image — fixed aspect ratio, no shrink -->
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
                                <a
                                    v-if="project.link_code !== '#'"
                                    :href="project.link_code"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-card__btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                    View on GitHub
                                </a>
                                <span v-else class="project-card__btn project-card__btn--ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.125 1.125 0 011.697 1.697l-2.758 4.138a25.335 25.335 0 002.63 7.19 4.5 4.5 0 00-5.053 4.293 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 00-4.764-4.648 1.125 1.125 0 01-1.697-1.697z" />
                                    </svg>
                                    Design Project
                                </span>
                            </div>

                            <!-- Category Badge -->
                            <span :class="['project-card__badge', project.link_code !== '#' ? 'project-card__badge--dev' : 'project-card__badge--design']">
                                {{ project.link_code !== '#' ? 'Dev' : 'Design' }}
                            </span>
                        </div>

                        <!-- Card Body — grows to fill remaining height -->
                        <div class="project-card__body">
                            <div class="flex items-start gap-4 mb-3">
                                <span class="text-[11px] font-black text-slate-300 dark:text-slate-700 mt-1.5 tabular-nums shrink-0">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </span>
                                <h3 class="text-xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {{ project.title }}
                                </h3>
                            </div>

                            <p class="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed line-clamp-2 pl-9 mb-6">
                                {{ project.decs }}
                            </p>

                            <!-- Tags — always at bottom -->
                            <div class="mt-auto pl-9 flex flex-wrap gap-2">
                                <span
                                    v-for="tag in project.tags"
                                    :key="tag"
                                    class="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            <!-- Navigation Buttons -->
            <button
                class="swiper-btn-prev"
                aria-label="Previous project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                class="swiper-btn-next"
                aria-label="Next project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            <!-- Pagination Dots -->
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
    {
        id: 1,
        img_src: 'p1.jpeg',
        title: 'PHP E-Commerce',
        decs: 'A full PHP-based e-commerce system with product management, secure cart features, and admin dashboard.',
        alt: 'PHP e-commerce website project',
        link_code: 'https://github.com/mohamedasal123/my_project_php',
        tags: ['PHP', 'MySQL', 'Admin Panel'],
        category: 'dev',
    },
    {
        id: 2,
        img_src: 'p2.jpeg',
        title: 'Laravel CRUD System',
        decs: 'A robust CRUD application built using Laravel 10 with clean MVC structure and validation.',
        alt: 'Laravel CRUD application project',
        link_code: 'https://github.com/mohamedasal123/CURDS_LARAVEL',
        tags: ['Laravel', 'PHP', 'MVC'],
        category: 'dev',
    },
    {
        id: 3,
        img_src: 'p3.jpeg',
        title: 'JavaScript CRUD (Edit Version)',
        decs: 'A dynamic CRUD system created using pure JavaScript, featuring real-time DOM manipulation and inline editing.',
        alt: 'JavaScript CRUD project with edit feature',
        link_code: 'https://github.com/mohamedasal123/curds_edit_js',
        tags: ['JavaScript', 'DOM', 'Vanilla JS'],
        category: 'dev',
    },
    {
        id: 4,
        img_src: 'p4.jpeg',
        title: 'CRUD Application (JavaScript)',
        decs: 'Basic CRUD operations demonstration using Vanilla JavaScript and local storage for data persistence.',
        alt: 'Basic JavaScript CRUD application project',
        link_code: 'https://github.com/mohamedasal123/curds_js',
        tags: ['JavaScript', 'LocalStorage'],
        category: 'dev',
    },
    {
        id: 5,
        img_src: 'p5.jpeg',
        title: 'Watches E-Commerce Frontend',
        decs: 'A sleek, responsive frontend for an online watches store built with modern HTML5, CSS3, and JavaScript.',
        alt: 'Online watches store project',
        link_code: 'https://github.com/mohamedasal123/watchs_project',
        tags: ['HTML', 'CSS3', 'JavaScript'],
        category: 'dev',
    },
    {
        id: 6,
        img_src: 'p6.jpeg',
        title: 'Vue.js E-Commerce App',
        decs: 'A modern Single Page Application (SPA) built with Vue.js 3, Vue Router, and component-based architecture.',
        alt: 'Vue.js e-commerce website project',
        link_code: 'https://github.com/mohamedasal123/vue_project',
        tags: ['Vue.js 3', 'SPA', 'Vue Router'],
        category: 'dev',
    },
    {
        id: 7,
        img_src: 'mm1.png',
        title: 'Futuristic Educational Poster',
        decs: 'A futuristic promotional poster created for a mathematics instructor, using neon accents, clean composition, and bold Arabic typography.',
        alt: 'Futuristic mathematics teacher poster design',
        link_code: '#',
        tags: ['Poster Design', 'Typography', 'Branding'],
        category: 'design',
    },
    {
        id: 8,
        img_src: 'mm2.jpg',
        title: 'Medical Advertisement Design',
        decs: 'A clean and professional medical banner design featuring structured information layout, modern gradients, and business-style visual elements.',
        alt: 'Professional medical advertisement banner',
        link_code: '#',
        tags: ['Banner', 'Medical', 'Layout'],
        category: 'design',
    },
    {
        id: 9,
        img_src: 'we.jpg',
        title: 'Product Mohamed Developer',
        decs: 'A clean and modern product-themed graphic design created with bold typography, balanced composition, and professional visual elements.',
        alt: 'Product packaging graphic design project',
        link_code: '#',
        tags: ['Product Design', 'Visual Identity'],
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

const handleTabChange = (tabValue) => {
    activeTab.value = tabValue;
};
</script>

<style scoped>
/* ─── Swiper override: make slides stretch to equal height ─── */
:deep(.projects-swiper) {
    padding-bottom: 4px; /* avoid clipped shadows */
}

:deep(.projects-swiper .swiper-wrapper) {
    align-items: stretch;
}

:deep(.projects-swiper .swiper-slide) {
    height: auto;
    display: flex;
}

/* ─── Card shell ─── */
.project-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #f1f5f9;
    border-radius: 2rem;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

.dark .project-card {
    background: #020617;
    border-color: #1e293b;
}

.project-card:hover {
    background: rgba(239, 246, 255, 0.3);
}

.dark .project-card:hover {
    background: rgba(15, 23, 42, 0.8);
}

/* ─── Image block — fixed 16/10 ratio, never shrinks ─── */
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

/* ─── Hover overlay ─── */
.project-card__overlay {
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.70);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-card:hover .project-card__overlay {
    opacity: 1;
}

.project-card__btn {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background: #ffffff;
    color: #0f172a;
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    text-decoration: none;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
    transform: translateY(8px);
    transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.project-card:hover .project-card__btn {
    transform: translateY(0);
}

.project-card__btn:hover {
    background: #2563eb;
    color: #ffffff;
}

.project-card__btn--ghost {
    background: rgba(255,255,255,0.2);
    color: #ffffff;
    backdrop-filter: blur(4px);
    cursor: default;
}

.project-card__btn--ghost:hover {
    background: rgba(255,255,255,0.2);
    color: #ffffff;
}

/* ─── Category badge ─── */
.project-card__badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 0.625rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.375rem 0.75rem;
    border-radius: 9999px;
    backdrop-filter: blur(8px);
    color: #ffffff;
}

.project-card__badge--dev    { background: rgba(37, 99, 235, 0.9); }
.project-card__badge--design { background: rgba(124, 58, 237, 0.9); }

/* ─── Card body — fills remaining height, tags stay at bottom ─── */
.project-card__body {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    padding: 1.75rem 2rem;
}

/* ─── Navigation buttons ─── */
.swiper-btn-prev,
.swiper-btn-next {
    position: absolute;
    top: 33%;
    transform: translateY(-50%);
    z-index: 10;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 9999px;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #475569;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.dark .swiper-btn-prev,
.dark .swiper-btn-next {
    background: #0f172a;
    border-color: #334155;
    color: #94a3b8;
}

.swiper-btn-prev:hover,
.swiper-btn-next:hover {
    background: #2563eb;
    color: #ffffff;
    border-color: #2563eb;
}

.swiper-btn-prev { left: -1rem; }
.swiper-btn-next { right: -1rem; }

.swiper-btn-prev.swiper-button-disabled,
.swiper-btn-next.swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

/* ─── Pagination dots ─── */
:deep(.swiper-custom-pagination .swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: #cbd5e1;
    opacity: 1;
    transition: background 0.3s ease, width 0.3s ease;
    display: inline-block;
    cursor: pointer;
}

:deep(.swiper-custom-pagination .swiper-pagination-bullet-active) {
    background: #2563eb;
    width: 24px;
}
</style>