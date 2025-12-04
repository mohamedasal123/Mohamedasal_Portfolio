<template>
    <section class="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative " id="projects">

        <div class="max-w-3xl mx-auto text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
                My <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
            </h1>
            <p class="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                "A collection of projects I’ve built with clean code, modern design, and scalable technologies."
            </p>
        </div>
        <!-- cards-project -->

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-8 max-w-7xl mx-auto">

            <div v-for="(project, index) in projects" :key="project.id" :data-aos="'fade-up'"
                :data-aos-delay="index * 100"
                class="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-sm flex flex-col">

                <div class="relative h-56 overflow-hidden">
                    <img class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        :src="project.img_src" :alt="project.alt">
                    <div class="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-60"></div>
                </div>

                <div class="p-6 flex flex-col text-left">
                    <h2 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {{ project.title }}
                    </h2>
                    <p class="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                        {{ project.decs }}
                    </p>

                    <div v-if="project.link_code !== '#'" class="mt-auto">
                        <a :href="project.link_code" target="_blank"
                            class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                            View Code
                        </a>
                    </div>
                    <div v-else class="mt-auto">
                        <span
                            class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-700/50 rounded-lg cursor-default">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-pink-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.125 1.125 0 011.697 1.697l-2.758 4.138a25.335 25.335 0 002.63 7.19 4.5 4.5 0 00-5.053 4.293 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 00-4.764-4.648 1.125 1.125 0 01-1.697-1.697z" />
                            </svg>
                            Graphic Project
                        </span>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        img_src: "/p1.jpeg",
        title: "PHP E-Commerce",
        decs: "A full PHP-based e-commerce system with product management, secure cart features, and admin dashboard.",
        alt: "PHP e-commerce website project",
        link_code: "https://github.com/mohamedasal123/my_project_php"
    },
    {
        id: 2,
        img_src: "/p2.jpeg",
        title: "Laravel CRUD System",
        decs: "A robust CRUD application built using Laravel 10 with clean MVC structure and validation.",
        alt: "Laravel CRUD application project",
        link_code: "https://github.com/mohamedasal123/CURDS_LARAVEL"
    },
    {
        id: 3,
        img_src: "/p3.jpeg",
        title: "JavaScript CRUD (Edit Version)",
        decs: "A dynamic CRUD system created using pure JavaScript, featuring real-time DOM manipulation and inline editing.",
        alt: "JavaScript CRUD project with edit feature",
        link_code: "https://github.com/mohamedasal123/curds_edit_js"
    },
    {
        id: 4,
        img_src: "/p4.jpeg",
        title: "CRUD Application (JavaScript)",
        decs: "Basic CRUD operations demonstration using Vanilla JavaScript and local storage for data persistence.",
        alt: "Basic JavaScript CRUD application project",
        link_code: "https://github.com/mohamedasal123/curds_js"
    },
    {
        id: 5,
        img_src: "/p5.jpeg",
        title: "Watches E-Commerce Frontend",
        decs: "A sleek, responsive frontend for an online watches store built with modern HTML5, CSS3, and JavaScript.",
        alt: "Online watches store project",
        link_code: "https://github.com/mohamedasal123/watchs_project"
    },
    {
        id: 6,
        img_src: "/p6.jpeg",
        title: "Vue.js E-Commerce App",
        decs: "A modern Single Page Application (SPA) built with Vue.js 3, Vue Router, and component-based architecture.",
        alt: "Vue.js e-commerce website project",
        link_code: "https://github.com/mohamedasal123/vue_project"
    },
    // GRAPHIC PROJECTS
    {
        id: 7,
        img_src: "mm1.png" , 
        title: "Futuristic Educational Poster",
        decs: "A futuristic promotional poster created for a mathematics instructor, using neon accents, clean composition, and bold Arabic typography.",
        alt: "Futuristic mathematics teacher poster design",
        link_code: "#"
    },

    {
        id: 8,
        img_src: "mm2.jpg",
        title: "Medical Advertisement Design",
        decs: "A clean and professional medical banner design featuring structured information layout, modern gradients, and business-style visual elements.",
        alt: "Professional medical advertisement banner",
        link_code: "#"
    },
    {
        id: 9,
        img_src: "we.jpg",
        title: "Product Mohamed Developer",
        decs: "A clean and modern product-themed graphic design created with bold typography, balanced composition, and professional visual elements.",
        alt: "Product packaging graphic design project",
        link_code: "#"
    }
]);
</script>