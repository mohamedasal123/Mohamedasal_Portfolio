<template>
    <section class="py-24 sm:py-32 overflow-hidden relative bg-white dark:bg-[#020617]" id="projects">

        <!-- Background accents -->
        <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/4 dark:bg-blue-600/4 blur-[120px] rounded-full pointer-events-none"></div>

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
                    <button v-for="tab in tabs" :key="tab.value"
                        @click="activeTab = tab.value"
                        :class="[
                            'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                            activeTab === tab.value
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        ]">
                        {{ tab.label }}
                        <span :class="[
                            'ml-2 text-xs font-bold',
                            activeTab === tab.value ? 'text-blue-400 dark:text-blue-500' : 'text-slate-400'
                        ]">{{ tab.count }}</span>
                    </button>
                </div>
            </div>

            <!-- Project Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800/60 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-none">
                
                <template v-for="(project, index) in filteredProjects" :key="project.id">
                    <div :data-aos="'fade-up'" :data-aos-delay="(index % 3) * 80"
                        class="group relative flex flex-col bg-white dark:bg-[#020617] overflow-hidden transition-colors duration-300 hover:bg-blue-50/30 dark:hover:bg-slate-900/80">
                        
                        <!-- Image Container -->
                        <div class="relative overflow-hidden aspect-[16/10]">
                            <img class="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105 brightness-100 group-hover:brightness-105"
                                :src="project.img_src" :alt="project.alt" loading="lazy">
                            
                            <!-- Hover overlay with link -->
                            <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                                <a v-if="project.link_code !== '#'" :href="project.link_code" target="_blank"
                                    class="flex items-center gap-2.5 bg-white text-slate-900 font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all-[opacity,transform] duration-400 delay-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                    View on GitHub
                                </a>
                                <span v-else class="flex items-center gap-2.5 bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-full backdrop-blur-sm -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all-[opacity,transform] duration-400 delay-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.125 1.125 0 011.697 1.697l-2.758 4.138a25.335 25.335 0 002.63 7.19 4.5 4.5 0 00-5.053 4.293 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 00-4.764-4.648 1.125 1.125 0 01-1.697-1.697z" />
                                    </svg>
                                    Design Project
                                </span>
                            </div>

                            <!-- Category Badge -->
                            <div class="absolute top-4 left-4">
                                <span :class="[
                                    'text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md',
                                    project.link_code !== '#'
                                        ? 'bg-blue-600/90 text-white'
                                        : 'bg-purple-600/90 text-white'
                                ]">
                                    {{ project.link_code !== '#' ? 'Dev' : 'Design' }}
                                </span>
                            </div>
                        </div>

                        <!-- Card Body -->
                        <div class="flex flex-col flex-grow p-7 sm:p-8">
                            
                            <!-- Number + Title Row -->
                            <div class="flex items-start gap-4 mb-4">
                                <span class="text-[11px] font-black text-slate-300 dark:text-slate-700 mt-1.5 tabular-nums">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </span>
                                <h3 class="text-xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {{ project.title }}
                                </h3>
                            </div>

                            <p class="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed line-clamp-2 mb-6 pl-9">
                                {{ project.decs }}
                            </p>

                            <!-- Tags -->
                            <div class="mt-auto pl-9 flex flex-wrap gap-2">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>

                    </div>
                </template>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref('all');

const tabs = [
    { label: 'All Work', value: 'all', count: 9 },
    { label: 'Development', value: 'dev', count: 6 },
    { label: 'Design', value: 'design', count: 3 },
];

const projects = ref([
    {
        id: 1,
        img_src: "p1.jpeg",
        title: "PHP E-Commerce",
        decs: "A full PHP-based e-commerce system with product management, secure cart features, and admin dashboard.",
        alt: "PHP e-commerce website project",
        link_code: "https://github.com/mohamedasal123/my_project_php",
        tags: ["PHP", "MySQL", "Admin Panel"],
        category: 'dev'
    },
    {
        id: 2,
        img_src: "p2.jpeg",
        title: "Laravel CRUD System",
        decs: "A robust CRUD application built using Laravel 10 with clean MVC structure and validation.",
        alt: "Laravel CRUD application project",
        link_code: "https://github.com/mohamedasal123/CURDS_LARAVEL",
        tags: ["Laravel", "PHP", "MVC"],
        category: 'dev'
    },
    {
        id: 3,
        img_src: "p3.jpeg",
        title: "JavaScript CRUD (Edit Version)",
        decs: "A dynamic CRUD system created using pure JavaScript, featuring real-time DOM manipulation and inline editing.",
        alt: "JavaScript CRUD project with edit feature",
        link_code: "https://github.com/mohamedasal123/curds_edit_js",
        tags: ["JavaScript", "DOM", "Vanilla JS"],
        category: 'dev'
    },
    {
        id: 4,
        img_src: "p4.jpeg",
        title: "CRUD Application (JavaScript)",
        decs: "Basic CRUD operations demonstration using Vanilla JavaScript and local storage for data persistence.",
        alt: "Basic JavaScript CRUD application project",
        link_code: "https://github.com/mohamedasal123/curds_js",
        tags: ["JavaScript", "LocalStorage"],
        category: 'dev'
    },
    {
        id: 5,
        img_src: "p5.jpeg",
        title: "Watches E-Commerce Frontend",
        decs: "A sleek, responsive frontend for an online watches store built with modern HTML5, CSS3, and JavaScript.",
        alt: "Online watches store project",
        link_code: "https://github.com/mohamedasal123/watchs_project",
        tags: ["HTML", "CSS3", "JavaScript"],
        category: 'dev'
    },
    {
        id: 6,
        img_src: "p6.jpeg",
        title: "Vue.js E-Commerce App",
        decs: "A modern Single Page Application (SPA) built with Vue.js 3, Vue Router, and component-based architecture.",
        alt: "Vue.js e-commerce website project",
        link_code: "https://github.com/mohamedasal123/vue_project",
        tags: ["Vue.js 3", "SPA", "Vue Router"],
        category: 'dev'
    },
    {
        id: 7,
        img_src: "mm1.png",
        title: "Futuristic Educational Poster",
        decs: "A futuristic promotional poster created for a mathematics instructor, using neon accents, clean composition, and bold Arabic typography.",
        alt: "Futuristic mathematics teacher poster design",
        link_code: "#",
        tags: ["Poster Design", "Typography", "Branding"],
        category: 'design'
    },
    {
        id: 8,
        img_src: "mm2.jpg",
        title: "Medical Advertisement Design",
        decs: "A clean and professional medical banner design featuring structured information layout, modern gradients, and business-style visual elements.",
        alt: "Professional medical advertisement banner",
        link_code: "#",
        tags: ["Banner", "Medical", "Layout"],
        category: 'design'
    },
    {
        id: 9,
        img_src: "we.jpg",
        title: "Product Mohamed Developer",
        decs: "A clean and modern product-themed graphic design created with bold typography, balanced composition, and professional visual elements.",
        alt: "Product packaging graphic design project",
        link_code: "#",
        tags: ["Product Design", "Visual Identity"],
        category: 'design'
    }
]);

const filteredProjects = computed(() => {
    if (activeTab.value === 'all') return projects.value;
    return projects.value.filter(p => p.category === activeTab.value);
});
</script>