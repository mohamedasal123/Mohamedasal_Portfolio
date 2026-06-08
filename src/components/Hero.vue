<template>
  <section class="relative flex items-center w-full min-h-screen py-20 lg:py-0 overflow-hidden hero-section" id="hero">
    <!-- Background decorative layers — z-index 0 (behind content) -->
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-orbit hero-orbit--one" aria-hidden="true"></div>
    <div class="hero-orbit hero-orbit--two" aria-hidden="true"></div>

    <div class="w-full px-4 sm:px-6 md:px-12 lg:px-8 max-w-7xl mx-auto hero-content-wrapper pt-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <div class="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <div v-reveal="{ variant: 'slide-right', distance: 20 }" class="hero-text-block text-slate-800 dark:text-white relative">
            <!-- Decorative tech accent -->
            <div class="hidden lg:block absolute -left-10 top-0 w-1 h-28 bg-linear-to-b from-blue-500 to-transparent opacity-50"></div>

            <h1 class="hero-kicker font-bold text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 mb-3 tracking-widest uppercase" data-aos="fade-up">
              Welcome to my universe
            </h1>

            <h2 class="hero-title font-extrabold leading-[1.08] tracking-tight relative"
                aria-label="I'm Mohamed Ibrahim">
              <span class="hero-im-text">I'm</span><br />
              <span class="hero-name-gradient" aria-hidden="true">
                <!-- Render each WORD in its own nowrap span so chars within
                     a word never split, but the two words can wrap between them -->
                <span
                  v-for="(word, wIndex) in nameWords"
                  :key="wIndex"
                  class="hero-name-word"
                ><span
                    v-for="(char, cIndex) in word"
                    :key="cIndex"
                    class="hero-char"
                    :style="{ '--char-delay': `${getCharDelay(wIndex, cIndex)}ms` }"
                  >{{ char }}</span>{{ wIndex < nameWords.length - 1 ? '\u00A0' : '' }}</span>
              </span>
              <!-- Screen-reader accessible text -->
              <span class="sr-only">Mohamed Ibrahim</span>
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

          <div v-reveal="{ delay: 420, variant: 'fade-up' }" class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8" 
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

          <div v-reveal="{ delay: 160, variant: 'scale' }" class="hero-portrait flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0 relative" data-aos="zoom-in" data-aos-delay="400">
          <!-- Animated Background Blobs behind Image focusing on a futuristic halo -->
          <div class="absolute w-[100%] h-[100%] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-400 via-cyan-300 to-blue-500 dark:from-blue-600 dark:via-cyan-500 dark:to-blue-600 rounded-full blur-3xl animate-[spin_10s_linear_infinite] opacity-30 dark:opacity-40 shadow-[0_0_100px_rgba(56,189,248,0.3)] pointer-events-none"></div>
          
          <!-- Glass frame to protect image without cropping -->
          <div v-tilt="{ strength: 6 }" class="premium-card relative z-10 w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] p-2 sm:p-4 rounded-[2rem] bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img 
                src="/Portfolio.png" 
                alt="Mohamed Developer" 
                fetchpriority="high"
                decoding="async"
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

// Split the name into words; each word's chars animate independently
const nameWords = 'Mohamed Ibrahim'.split(' ').map(w => w.split(''));

// Calculate animation delay per character across all words
const getCharDelay = (wordIndex, charIndex) => {
  const charsBefore = nameWords.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0);
  return (charsBefore + charIndex) * 34;
};

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
/* ─────────────────────────────────────────────────────────────
   HERO SECTION — stacking context & layout
───────────────────────────────────────────────────────────── */
.hero-section {
  /* Establish a local stacking context so internal z-indexes are self-contained */
  isolation: isolate;
}

/* Content wrapper is always on top of all background decorations */
.hero-content-wrapper {
  position: relative;
  z-index: 10;
}

/* The text block that v-reveal targets — ensure it never stays invisible
   due to a missed IntersectionObserver trigger at the top of the page. */
.hero-text-block {
  /* Override: if motion-reveal opacity:0 hasn't resolved yet, children
     still paint at full opacity after their own animation completes. */
  contain: layout style;
}

/* ─────────────────────────────────────────────────────────────
   HERO TYPOGRAPHY
───────────────────────────────────────────────────────────── */
.hero-kicker {
  letter-spacing: 0.22em;
}

/* Main title — largest element on the page */
.hero-title {
  font-size: clamp(2.75rem, 6vw + 1rem, 5.5rem); /* 44px → 88px */
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin-bottom: 0.15em;
}

.hero-im-text {
  color: #1e293b; /* slate-800 */
  display: inline-block;
}

.dark .hero-im-text {
  color: #f1f5f9; /* slate-100 */
}

/* Gradient name container — purely a wrapper, no text-fill here */
.hero-name-gradient {
  display: block;
  /* Allow wrapping BETWEEN words (between Mohamed and Ibrahim),
     but each word span below is nowrap so chars within a word never split. */
  white-space: normal;
  /* We do NOT set -webkit-text-fill-color here because it would be
     inherited by hero-char children and make them invisible.
     The gradient is applied per-character in .hero-char instead. */
}

/* Each word is kept on a single line; breaks only happen between words */
.hero-name-word {
  display: inline-block;
  white-space: nowrap;
}

/* Each character carries its own gradient clip so animation opacity works */
.hero-char {
  display: inline-block;
  /* Gradient painted on each char individually */
  background: linear-gradient(115deg, #2563eb 0%, #06b6d4 55%, #38bdf8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  /* Glow filter on characters */
  filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.30));
  /* Reveal animation — starts invisible, slides up into place */
  opacity: 0;
  transform: translate3d(0, 0.45em, 0);
  animation: char-reveal 680ms cubic-bezier(0.16, 1, 0.3, 1) var(--char-delay, 0ms) both;
}

.dark .hero-char {
  background: linear-gradient(115deg, #60a5fa 0%, #22d3ee 55%, #7dd3fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 0 24px rgba(96, 165, 250, 0.45));
}


/* ─────────────────────────────────────────────────────────────
   BACKGROUND DECORATIONS — explicitly behind content
───────────────────────────────────────────────────────────── */
.hero-glow {
  position: absolute;
  left: 50%;
  top: 42%;
  width: min(46rem, 88vw);
  height: min(46rem, 88vw);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.15), rgba(37, 99, 235, 0.08) 36%, transparent 68%);
  filter: blur(40px);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(14, 165, 233, 0.15);
  border-radius: 999px;
  pointer-events: none;
  animation: orbit 30s linear infinite;
  z-index: 0;
}

.hero-orbit--one {
  width: 12rem;
  height: 12rem;
  right: 10%;
  top: 18%;
}

.hero-orbit--two {
  width: 7rem;
  height: 7rem;
  left: 8%;
  bottom: 18%;
  animation-duration: 24s;
  animation-direction: reverse;
}

/* ─────────────────────────────────────────────────────────────
   PORTRAIT
───────────────────────────────────────────────────────────── */
.hero-portrait {
  animation: subtle-float 5s ease-in-out infinite alternate;
}

/* ─────────────────────────────────────────────────────────────
   ROLE SWITCHER TRANSITION
───────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────
   KEYFRAMES
───────────────────────────────────────────────────────────── */
@keyframes char-reveal {
  from {
    opacity: 0;
    transform: translate3d(0, 0.45em, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* ─────────────────────────────────────────────────────────────
   RESPONSIVE OVERRIDES
───────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(2.5rem, 10vw, 3.25rem); /* 40px → 52px on small screens */
    letter-spacing: -0.01em;
  }
}

/* ─────────────────────────────────────────────────────────────
   REDUCED MOTION
───────────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .hero-char {
    opacity: 1;
    transform: none;
    animation: none;
    /* Ensure gradient is visible immediately when motion is reduced */
    -webkit-text-fill-color: transparent;
  }

  .hero-portrait,
  .hero-orbit {
    animation: none;
  }
}
</style>
