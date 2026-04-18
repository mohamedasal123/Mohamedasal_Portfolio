<template>
  <section class="relative flex items-center w-full min-h-screen py-20 lg:py-0 overflow-hidden" id="hero">
    <div class="w-full px-4 sm:px-6 md:px-12 lg:px-8 max-w-7xl mx-auto relative z-10 pt-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <div class="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <div class="text-slate-800 dark:text-white relative">
            <!-- Decorative tech accent -->
            <div class="hidden lg:block absolute -left-10 top-0 w-1 h-28 bg-linear-to-b from-blue-500 to-transparent opacity-50"></div>

            <h1 class="font-bold text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-2 tracking-widest uppercase" data-aos="fade-up">
              Welcome to my universe
            </h1>

            <h2 class="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight relative"
                data-aos="fade-up" data-aos-delay="100">
              I'm <br class="hidden sm:block" />
              <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
                Mohamed Ibrahim
              </span>
            </h2>
            
            <div class="h-10 sm:h-12 mt-4 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
              <span class="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mr-3">I specialize in</span>
              <transition name="sliding-text" mode="out-in">
                <span :key="currentRoleIndex" 
                      class="text-lg sm:text-xl md:text-2xl font-bold px-4 py-1.5 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {{ roles[currentRoleIndex] }}
                </span>
              </transition>
            </div>
            
            <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg pt-5 mx-auto lg:mx-0 max-w-xl leading-relaxed font-light" data-aos="fade-up" data-aos-delay="300">
              I engineer scalable backends, design intuitive frontends, and integrate intelligent solutions. From robust <strong class="font-semibold text-slate-800 dark:text-slate-200">PHP/Laravel</strong> systems to edge <strong class="font-semibold text-slate-800 dark:text-slate-200">IoT</strong> networks and innovative <strong class="font-semibold text-slate-800 dark:text-slate-200">AI</strong> integrations, I turn complex problems into elegant functional code.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8" 
               data-aos="fade-up" 
               data-aos-delay="400">
            
            <a href="#projects"
              class="relative group w-full sm:w-auto px-6 py-3.5 rounded-xl flex justify-center items-center overflow-hidden bg-blue-600 dark:bg-blue-500 text-white font-bold text-base hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              <span class="relative z-10 flex items-center">
                Explore Work
                <ArrowRightIcon class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div class="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine transition-all"></div>
            </a>

            <a href="/Mohamedasal_Portfolio/MOHAMED_IBRAHIM_CV.pdf" download="Mohamed_Ibarhim_CV.pdf"
              class="relative group w-full sm:w-auto px-6 py-3.5 rounded-xl flex justify-center items-center overflow-hidden glass-card hover:-translate-y-1 transition-all duration-300 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80">
              <span class="text-slate-800 dark:text-white font-bold flex items-center text-base z-10">
                Download CV
                <ArrowDownTrayIcon class="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 text-slate-600 dark:text-slate-300" />
              </span>
            </a>
          </div>
        </div>

        <div class="flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0 relative" data-aos="zoom-in" data-aos-delay="400">
          <!-- Animated Background Blobs behind Image focusing on a futuristic halo -->
          <div class="absolute w-[100%] h-[100%] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-400 via-cyan-300 to-blue-500 dark:from-blue-600 dark:via-cyan-500 dark:to-blue-600 rounded-full blur-3xl animate-[spin_10s_linear_infinite] opacity-30 dark:opacity-40 shadow-[0_0_100px_rgba(56,189,248,0.3)] pointer-events-none"></div>
          
          <!-- Glass frame to protect image without cropping -->
          <div class="relative z-10 w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] p-2 sm:p-4 rounded-[2rem] bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img 
                src="/Portfolio.png" 
                alt="Mohamed Developer" 
                class="w-full h-auto block rounded-2xl drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03] bg-linear-to-tr from-blue-100/50 to-cyan-50/50 dark:from-slate-800/50 dark:to-slate-700/50"
              >
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';

const roles = ['Full Stack Applications', 'Laravel Framework', 'Vue.js', 'PHP Developer', 'Graphic Designer', 'AI Integrations'];
const currentRoleIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
  }, 2500);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.sliding-text-enter-active,
.sliding-text-leave-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.sliding-text-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.sliding-text-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>