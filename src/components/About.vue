<template>
    <section v-reveal class="relative overflow-hidden py-24 sm:py-32" id="about">

        <!-- glass veil -->
        <div class="absolute inset-0 bg-[#080b12]/55 backdrop-blur-[2px] pointer-events-none z-0"></div>

        <!-- separator lines -->
        <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0"></div>
        <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0"></div>

        <!-- accent orbs -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 blur-[140px] rounded-full pointer-events-none z-0"></div>
        <div class="absolute bottom-0 -left-24 w-[420px] h-[420px] bg-cyan-600/6 blur-[140px] rounded-full pointer-events-none z-0"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <!-- Left: Single Image -->
                <div class="relative w-full max-w-sm mx-auto lg:mx-0" data-aos="fade-right">

                    <!-- outer glow ring -->
                    <div class="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10 blur-xl pointer-events-none"></div>

                    <!-- image card -->
                    <div v-tilt="{ strength: 6 }" class="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">

                        <img
                            src="/mo.jpeg"
                            alt="Mohamed Asal"
                            loading="eager"
                            decoding="async"
                            class="w-full aspect-[3/4] object-contain object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        <!-- bottom overlay -->
                        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b12]/95 via-[#080b12]/40 to-transparent flex items-end p-7">
                            <div>
                                <p class="text-white font-bold text-lg leading-tight">Mohamed Asal</p>
                                <p class="text-blue-400 text-sm font-medium mt-1">Full Stack Developer</p>
                            </div>
                        </div>

                        <!-- availability badge -->
                        <div class="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080b12]/70 backdrop-blur-sm border border-white/10">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span class="text-xs font-semibold text-slate-300">Available</span>
                        </div>
                    </div>

                    <!-- floating stat cards -->
                    <div class="absolute -right-6 top-12 bg-[#080b12]/80 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl" data-aos="fade-left" data-aos-delay="300">
                        <p class="text-2xl font-extrabold text-white leading-none">2+</p>
                        <p class="text-xs text-slate-400 mt-1 uppercase tracking-widest">Years Exp</p>
                    </div>

                    <div class="absolute -left-6 bottom-20 bg-[#080b12]/80 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl" data-aos="fade-right" data-aos-delay="400">
                        <p class="text-2xl font-extrabold text-white leading-none">15+</p>
                        <p class="text-xs text-slate-400 mt-1 uppercase tracking-widest">Projects</p>
                    </div>

                </div>

                <!-- Right: Content -->
                <div class="relative" data-aos="fade-up" data-aos-delay="200">

                    <!-- section label -->
                    <div class="flex items-center gap-3 mb-8">
                        <span class="h-px w-8 bg-blue-500/60"></span>
                        <span class="text-xs font-bold tracking-[0.2em] uppercase text-blue-400">About Me</span>
                    </div>

                    <!-- heading -->
                    <h2 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                        Crafting digital <br class="hidden sm:block">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">experiences</span>
                    </h2>

                    <!-- paragraphs -->
                    <div class="text-slate-400 space-y-5 text-lg font-light leading-relaxed mb-12">
                        <p>
                            I am driven by the intersection of design and robust architecture. I don't just write code; I craft digital experiences that combine pixel-perfect aesthetics with highly scalable backend infrastructure.
                        </p>
                        <p>
                            My journey revolves around mastering
                            <strong class="font-semibold text-slate-200">PHP & Laravel</strong>
                            for heavy data operations, paired deeply with modern dynamic front-ends like
                            <strong class="font-semibold text-slate-200">Vue.js</strong>.
                            I architect everything from raw MySQL clusters up to fully interactive SPA interfaces.
                        </p>
                        <p>
                            Beyond typical development, I possess a strong eye for visual branding and UX, ensuring the products I forge not only run flawlessly on servers but feel incredibly engaging to real users.
                        </p>
                    </div>

                    <!-- stats -->
                    <div
                        ref="statsRef"
                        v-stagger="{ step: 70, variant: 'scale' }"
                        class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/[0.07]"
                    >
                        <div v-for="stat in stats" :key="stat.label" data-stagger-item class="flex flex-col">
                            <span class="text-3xl sm:text-4xl font-extrabold text-white">{{ stat.display }}</span>
                            <span class="text-sm font-medium text-slate-500 mt-2 uppercase tracking-wide" v-html="stat.label"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';

const statsRef = ref(null);
const stats = reactive([
    { target: 15,   suffix: '+', display: '0+',  label: 'Projects<br>Deployed'   },
    { target: null, suffix: '',  display: 'PHP',  label: 'Backend<br>Core'        },
    { target: null, suffix: '',  display: 'Vue',  label: 'Frontend<br>Magic'      },
    { target: 100,  suffix: '%', display: '0%',   label: 'Client<br>Satisfaction' },
]);

let observer = null;
let rafId    = null;

const animateStats = () => {
    const start    = performance.now();
    const duration = 1100;

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);

        stats.forEach((stat) => {
            if (typeof stat.target !== 'number') return;
            stat.display = `${Math.round(stat.target * eased)}${stat.suffix}`;
        });

        if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
};

onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;
            animateStats();
            observer.disconnect();
        },
        { threshold: 0.35 },
    );
    if (statsRef.value) observer.observe(statsRef.value);
});

onUnmounted(() => {
    observer?.disconnect();
    if (rafId) cancelAnimationFrame(rafId);
});
</script>