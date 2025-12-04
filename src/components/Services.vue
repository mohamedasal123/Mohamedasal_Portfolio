<template>
    <section class="py-8 relative overflow-hidden" id="services">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-4xl md:text-5xl sm:text-4xl font-bold text-white mb-4">
                <div class="text-center mb-8" data-aos="fade-up">
                    <h1 class="text-6xl md:text-5xl font-bold text-white mb-4"> My <span
                            class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 ">Services</span>
                    </h1>
                </div>
                <div class="text-center">
                    <p class="mt-4 text-sm sm:text-sm" data-aos="fade-up">
                        "I build fast, modern, and responsive websites with clean code and great user experience."
                    </p>
                </div>
            </div>
            <!-- cards -->
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 m-14">

                <div v-for="(service, index) in services" :key="service.id" data-aos="fade-up"
                    :data-aos-delay="(index * 100) + 300"
                    class="group relative p-8 rounded-2xl bg-[#111827] border border-[#1f2937] hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">

                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>

                    <div class="relative z-10">

                        <div
                            class="w-14 h-14 mb-6 rounded-lg bg-blue-900/20 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-300">

                            <component :is="service.icon" class="w-8 h-8 text-blue-400"></component>
                        </div>

                        <h3
                            class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                            {{ service.name }}
                        </h3>

                        <p class="text-gray-400 leading-relaxed">
                            {{ service.desc }}
                        </p>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>
<script setup>
import { ComputerDesktopIcon } from '@heroicons/vue/16/solid';
import { ChartBarIcon } from '@heroicons/vue/20/solid';
import { CodeBracketIcon, PaintBrushIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
const services = ref([
    {
        id: 1,
        icon: CodeBracketIcon,
        name: ' Web Development ',
        desc: 'Building responsive and dynamic websites using modern front-end and back-end technologies.'
    },
    {
        id: 2,
        icon: PaintBrushIcon,
        name: "Graphic Design",
        desc: "Creating professional visual designs including logos, social media posts, and brand identities."
    },
    {
        id: 3,
        icon: ComputerDesktopIcon,
        name: "Web Design",
        desc: "Designing visually appealing and user-friendly websites with a focus on layout, color schemes, and responsive design."

    },
    {
        id: 4,
        icon: ChartBarIcon, 
        name: "SEO & Web Optimization",
        desc: "Improving website performance, loading speed, and search engine visibility to increase traffic and user engagement."
    },




]); 
</script>
<style lang="">

</style>