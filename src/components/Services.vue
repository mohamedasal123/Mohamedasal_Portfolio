<template>
    <section class="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#020617]" id="services">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="mb-20" data-aos="fade-up">
                <h2 class="text-SM font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">
                    What I Do
                </h2>
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h3 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-2xl">
                        Elevating brands through <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">digital solutions</span>.
                    </h3>
                    <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-md font-light">
                        I build fast, modern, and responsive products with clean code and unparalleled user experience.
                    </p>
                </div>
            </div>
            
            <!-- Bento Box Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                <div v-for="(service, index) in services" :key="service.id" data-aos="fade-up" :data-aos-delay="index * 100"
                    :class="[
                        'group relative p-8 sm:p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]',
                        index === 0 || index === 3 ? 'lg:col-span-2' : 'lg:col-span-1',
                        'bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800'
                    ]">

                    <!-- Hover Gradient Background -->
                    <div class="absolute inset-0 bg-linear-to-br from-blue-100/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <!-- Ambient Glow -->
                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none"></div>

                    <div class="relative z-10 flex flex-col h-full">
                        <div class="w-16 h-16 mb-10 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-all duration-500">
                            <component :is="service.icon" class="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500"></component>
                        </div>

                        <div class="mt-auto">
                            <h4 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {{ service.name }}
                            </h4>
                            <p class="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
                                {{ service.desc }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ComputerDesktopIcon, ChartBarIcon } from '@heroicons/vue/20/solid';
import { CodeBracketIcon, PaintBrushIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: CodeBracketIcon,
        name: 'Web Development',
        desc: 'Building responsive, scalable, and dynamic web applications using modern front-end and back-end architecture tailored to your goals.'
    },
    {
        id: 2,
        icon: PaintBrushIcon,
        name: "Graphic Design",
        desc: "Crafting distinct visual identities, professional logos, and striking social media campaigns."
    },
    {
        id: 3,
        icon: ComputerDesktopIcon,
        name: "Web Design",
        desc: "Architecting user interfaces that blend flawless aesthetics with intuitive, high-conversion user experiences."
    },
    {
        id: 4,
        icon: ChartBarIcon, 
        name: "SEO & Web Optimization",
        desc: "Supercharging product performance, load speeds, and search rankings to guarantee maximum visibility and seamless user flows."
    },
]); 
</script>