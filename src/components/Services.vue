<template>
    <section v-reveal class="py-24 sm:py-32 relative overflow-hidden" id="services">

        <!-- section-level glass veil — lets the canvas show through -->
        <div class="absolute inset-0 bg-[#080b12]/60 backdrop-blur-[2px] pointer-events-none z-0"></div>

        <!-- subtle top-edge separator line -->
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="mb-20" data-aos="fade-up">
                <h2 class="text-SM font-bold text-blue-400 tracking-widest uppercase mb-3">
                    What I Do
                </h2>
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h3 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-2xl">
                        Elevating brands through
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">digital solutions</span>.
                    </h3>
                    <p class="text-slate-400 text-lg md:text-xl max-w-md font-light">
                        I build fast, modern, and responsive products with clean code and unparalleled user experience.
                    </p>
                </div>
            </div>

            <!-- Bento Box Grid -->
            <div v-stagger="{ step: 95, variant: 'fade-up' }" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                <div
                    v-for="(service, index) in services"
                    :key="service.id"
                    v-tilt="{ strength: 7 }"
                    data-stagger-item
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                    :class="[
                        'service-card group relative p-8 sm:p-10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2',
                        index === 0 || index === 3 ? 'lg:col-span-2' : 'lg:col-span-1',
                    ]"
                >
                    <!-- glass card background -->
                    <div class="absolute inset-0 rounded-[2rem] bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm group-hover:bg-white/[0.07] group-hover:border-blue-500/25 transition-all duration-500 pointer-events-none"></div>

                    <!-- hover glow -->
                    <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/[0.06] group-hover:to-cyan-500/[0.04] transition-all duration-700 pointer-events-none"></div>

                    <!-- ambient orb -->
                    <div class="absolute -right-16 -top-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div class="relative z-10 flex flex-col h-full">
                        <!-- icon box -->
                        <div class="w-14 h-14 mb-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-500">
                            <component
                                :is="service.icon"
                                class="w-7 h-7 text-slate-400 group-hover:text-blue-400 transition-colors duration-500"
                            ></component>
                        </div>

                        <div class="mt-auto">
                            <h4 class="text-2xl font-extrabold text-white/90 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                {{ service.name }}
                            </h4>
                            <p class="text-slate-500 text-lg font-light leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
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