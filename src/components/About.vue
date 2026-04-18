<template>
    <section class="relative overflow-hidden py-24 sm:py-32 bg-slate-50/50 dark:bg-[#020617]/50" id="about">
        <!-- Background accents -->
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/5 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-cyan-400/5 dark:bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <!-- Left Column: Staggered Image Masonry -->
                <div class="relative w-full max-w-lg mx-auto lg:mx-0" data-aos="fade-right">
                    
                    <div class="grid grid-cols-2 gap-4 sm:gap-6">
                        <!-- Column 1 (Pushed down for masonry effect) -->
                        <div class="flex flex-col gap-4 sm:gap-6 pt-12 sm:pt-16">
                            <div class="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 group relative">
                                <img :src="images[0].src" :alt="images[0].alt" class="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <span class="text-white text-xs font-bold uppercase tracking-widest">{{ images[0].tag }}</span>
                                </div>
                            </div>
                            <div class="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 group relative">
                                <img :src="images[1].src" :alt="images[1].alt" class="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <span class="text-white text-xs font-bold uppercase tracking-widest">{{ images[1].tag }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Column 2 (Starts at top) -->
                        <div class="flex flex-col gap-4 sm:gap-6">
                            <div class="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 group relative">
                                <img :src="images[2].src" :alt="images[2].alt" class="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <span class="text-white text-xs font-bold uppercase tracking-widest">{{ images[2].tag }}</span>
                                </div>
                            </div>
                            <div class="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 group relative">
                                <img :src="images[3].src" :alt="images[3].alt" class="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <span class="text-white text-xs font-bold uppercase tracking-widest">{{ images[3].tag }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Center Floating Badge -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-aos="zoom-in" data-aos-delay="400">
                        <div class="w-36 h-36 sm:w-40 sm:h-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-2xl border-4 border-slate-50 dark:border-slate-800 flex flex-col items-center justify-center p-4">
                            <span class="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                                2+
                            </span>
                            <span class="text-[10px] sm:text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 text-center">
                                Years<br>Exp
                            </span>
                        </div>
                    </div>

                </div>

                <!-- Right Column: Content & Typography -->
                <div class="relative" data-aos="fade-up" data-aos-delay="200">
                    
                    <!-- Tag / Name -->
                    <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide mb-8 border border-blue-100 dark:border-blue-800/50">
                        <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Eng. Mohamed Asal
                    </div>
                    
                    <!-- Heading -->
                    <h2 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                        Crafting digital <br class="hidden sm:block">
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">experiences</span>
                    </h2>
                    
                    <!-- Paragraphs -->
                    <div class="text-slate-600 dark:text-slate-400 space-y-6 text-lg sm:text-xl font-light leading-relaxed mb-12">
                        <p>
                            I am driven by the intersection of design and robust architecture. I don't just write code; I craft digital experiences that combine pixel-perfect aesthetics with highly scalable backend infrastructure.
                        </p>
                        <p>
                            My journey revolves around mastering <strong class="font-semibold text-slate-900 dark:text-slate-200">PHP & Laravel</strong> for heavy data operations, paired deeply with modern dynamic front-ends like <strong class="font-semibold text-slate-900 dark:text-slate-200">Vue.js</strong>. I architect everything from raw MySQL clusters up to fully interactive SPA interfaces.
                        </p>
                        <p>
                            Beyond typical development, I possess a strong eye for visual branding and UX, ensuring the products I forge not only run flawlessly on servers but feel incredibly engaging to real users.
                        </p>
                    </div>
                    
                    <!-- Clean Statistics Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/80">
                        <div class="flex flex-col">
                            <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">15+</span>
                            <span class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide">Projects<br>Deployed</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">PHP</span>
                            <span class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide">Backend<br>Core</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Vue</span>
                            <span class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide">Frontend<br>Magic</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">100%</span>
                            <span class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide">Client<br>Satisfaction</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
    {
        id: 1,
        src: 'me4.jpg',
        alt: 'Frontend Project',
        tag: 'Frontend Engineering',
    },
    {
        id: 2,
        src: 'mee.jpg',
        alt: 'Backend Project',
        tag: 'Backend Architecture',
    },
    {
        id: 3,
        src: 'mee2.jpg',
        alt: 'Design Project',
        tag: 'Visual Design',
    },
    {
        id: 4,
        src: 'mee22.jpg',  
        alt: 'Tools Setup',
        tag: 'Development Ecosystem',
    }
]);
</script>
