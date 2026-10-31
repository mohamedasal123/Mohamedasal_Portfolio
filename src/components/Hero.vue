<template>
  <section class="relative flex items-center w-full min-h-screen py-20 lg:py-0 overflow-hidden hero-section dark:bg-slate-900/40" id="hero">
    <!-- Background decorative layers — z-index 0 (behind content) -->
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-orbit hero-orbit--one" aria-hidden="true"></div>
    <div class="hero-orbit hero-orbit--two" aria-hidden="true"></div>

    <!-- ✦ Cinematic 3D floating shapes -->
    <div class="hero-shape hero-shape--ring-lg"   aria-hidden="true"></div>
    <div class="hero-shape hero-shape--ring-sm"   aria-hidden="true"></div>
    <div class="hero-shape hero-shape--diamond"   aria-hidden="true"></div>
    <div class="hero-shape hero-shape--dot-grid"  aria-hidden="true"></div>

    <div class="w-full px-4 sm:px-6 md:px-12 lg:px-8 max-w-7xl mx-auto hero-content-wrapper pt-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <!-- ── Text column ── -->
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

            <a href="/mohamedasalcv.pdf" download="mohamedasalcv.pdf"
              class="relative group w-full sm:w-auto px-6 py-3.5 rounded-xl flex justify-center items-center overflow-hidden glass-card hover:-translate-y-1 transition-all duration-300 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80">
              <span class="text-slate-800 dark:text-white font-bold flex items-center text-base z-10">
                Download CV
                <ArrowDownTrayIcon class="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 text-slate-600 dark:text-slate-300" />
              </span>
            </a>
          </div>
        </div>

        <!-- ── Portrait column ── -->
        <div v-reveal="{ delay: 160, variant: 'scale' }" class="hero-portrait flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0 relative" data-aos="zoom-in" data-aos-delay="400">

          <!-- Spinning halo conic gradient -->
          <div class="absolute w-[100%] h-[100%] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-400 via-cyan-300 to-blue-500 dark:from-blue-600 dark:via-cyan-500 dark:to-blue-600 rounded-full blur-3xl animate-[spin_10s_linear_infinite] opacity-30 dark:opacity-40 shadow-[0_0_100px_rgba(56,189,248,0.3)] pointer-events-none"></div>

          <!-- Dynamic mouse-following glow BEHIND card -->
          <div
            class="hero-portrait-glow pointer-events-none"
            :style="{
              background: `radial-gradient(480px circle at ${glowX}px ${glowY}px, rgba(34,211,238,0.28), rgba(37,99,235,0.14) 38%, transparent 68%)`,
            }"
            aria-hidden="true"
          ></div>

          <!--
            3D portrait stage. Each layer owns exactly one transform so nothing overrides anything:
              stage  → perspective + one-shot entrance
              float  → slow idle drift (CSS keyframes)
              tilt   → pointer rotation (CSS vars written by JS) + hover scale (individual `scale` prop)
          -->
          <div
            ref="portraitStage"
            class="portrait-stage relative z-10 w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px]"
            @pointerenter="onStageEnter"
            @pointermove="onStageMove"
            @pointerleave="onStageLeave"
          >
            <div class="portrait-float">
              <div
                ref="portraitTilt"
                class="portrait-tilt"
                :style="{ '--portrait-mask': `url(${portraitSrc})` }"
              >
                <!-- Ground shadow on a rear plane: parallaxes against the card when tilting -->
                <div class="portrait-depth-shadow" aria-hidden="true"></div>

                <!-- Glass frame (z = 0) -->
                <div
                  ref="portraitCard"
                  class="premium-card portrait-card-3d relative z-10 w-full p-2 sm:p-4 rounded-[2rem] bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl"
                  @pointermove="trackGlow"
                  @pointerleave="resetGlow"
                >
                  <!-- Backdrop panel the cutout stands in front of; receives the subject's cast shadow -->
                  <div class="portrait-backdrop relative w-full overflow-hidden rounded-2xl bg-linear-to-tr from-blue-100/50 to-cyan-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
                    <div class="portrait-cast" aria-hidden="true">
                      <div class="portrait-cast__shape"></div>
                    </div>
                  </div>
                </div>

                <!-- Cutout subject on its own plane in front of the panel (uses the PNG's alpha) -->
                <div class="portrait-subject">
                  <img
                    :src="portraitSrc"
                    alt="Mohamed Developer"
                    width="687"
                    height="1024"
                    fetchpriority="high"
                    decoding="async"
                    draggable="false"
                    class="portrait-img block w-full h-full object-contain select-none"
                  >
                  <!-- Directional key light + falloff, clipped to the silhouette via mask -->
                  <span class="portrait-light" aria-hidden="true"></span>
                  <span class="portrait-shade" aria-hidden="true"></span>
                  <!-- Rim light: silhouette minus a light-shifted silhouette = lit edge only -->
                  <span class="portrait-rim" aria-hidden="true"><span class="portrait-rim__band"></span></span>
                </div>

                <!-- Foreground depth chips (hidden on small screens) -->
                <div class="portrait-chip portrait-chip--laravel" aria-hidden="true">
                  <span class="portrait-chip__inner">
                    <span class="portrait-chip__dot" style="--dot: #f0533f"></span>
                    Laravel
                  </span>
                </div>
                <div class="portrait-chip portrait-chip--vue" aria-hidden="true">
                  <span class="portrait-chip__inner">
                    <span class="portrait-chip__dot" style="--dot: #42b883"></span>
                    Vue.js
                  </span>
                </div>
              </div>
            </div>
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

const nameWords = 'Mohamed Ibrahim'.split(' ').map(w => w.split(''));

const getCharDelay = (wordIndex, charIndex) => {
  const charsBefore = nameWords.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0);
  return (charsBefore + charIndex) * 34;
};

// Dynamic glow position relative to viewport (for the glow behind card)
const glowX = ref(220);
const glowY = ref(220);
const portraitCard = ref(null);

const trackGlow = (e) => {
  if (!portraitCard.value) return;
  const rect = portraitCard.value.getBoundingClientRect();
  glowX.value = e.clientX - rect.left;
  glowY.value = e.clientY - rect.top;
};

const resetGlow = () => {
  glowX.value = 220;
  glowY.value = 220;
};

/* ─────────────────────────────────────────────────────────────
   3D PORTRAIT — pointer tilt + directional lighting
   Writes CSS custom properties on .portrait-tilt; CSS does the rendering.
   rAF only runs while the portrait is moving toward its target, then stops.
───────────────────────────────────────────────────────────── */
const portraitSrc = '/Portfolio-optimized.png';
const portraitStage = ref(null);
const portraitTilt = ref(null);

const LIGHT_BASE_DEG = 120;   // key light from the upper-left
const LIGHT_SWING_DEG = 16;   // how far the light direction follows the pointer
const RIM_OFFSET_PX = 4;      // width of the rim-light band
const CAST_OFFSET_PX = 12;    // subject → panel shadow distance
const DAMPING = 0.085;        // per 60fps frame; lower = softer

const tilt = { tx: 0, ty: 0, cx: 0, cy: 0, max: 0, enabled: false, rect: null, raf: null, last: 0 };

const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const canTilt = () =>
  window.matchMedia?.('(hover: hover) and (pointer: fine)').matches &&
  !prefersReducedMotion() &&
  window.innerWidth >= 768;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const applyTilt = () => {
  const el = portraitTilt.value;
  if (!el) return;
  const { cx, cy, max } = tilt;

  const angle = LIGHT_BASE_DEG + cx * LIGHT_SWING_DEG - cy * 6;
  const rad = (angle * Math.PI) / 180;
  // Direction the light travels, in screen space (CSS gradient-angle convention).
  const lx = Math.sin(rad);
  const ly = -Math.cos(rad);

  el.style.setProperty('--rx', `${(-cy * max).toFixed(3)}deg`);
  el.style.setProperty('--ry', `${(cx * max).toFixed(3)}deg`);
  el.style.setProperty('--light-angle', `${angle.toFixed(2)}deg`);
  el.style.setProperty('--rim-x', `${(lx * RIM_OFFSET_PX).toFixed(2)}px`);
  el.style.setProperty('--rim-y', `${(ly * RIM_OFFSET_PX).toFixed(2)}px`);
  el.style.setProperty('--cast-x', `${(lx * CAST_OFFSET_PX + cx * 4).toFixed(2)}px`);
  el.style.setProperty('--cast-y', `${(ly * CAST_OFFSET_PX + cy * 4).toFixed(2)}px`);
  // Consumed by the existing .portrait-card-3d box-shadow
  el.style.setProperty('--shadow-x', `${(cx * 12).toFixed(2)}px`);
  el.style.setProperty('--shadow-y', `${(cy * 12).toFixed(2)}px`);
};

const stepTilt = (now) => {
  const dt = tilt.last ? Math.min(now - tilt.last, 64) : 16.67;
  tilt.last = now;
  const k = 1 - Math.pow(1 - DAMPING, dt / 16.67);

  tilt.cx += (tilt.tx - tilt.cx) * k;
  tilt.cy += (tilt.ty - tilt.cy) * k;

  const settled = Math.abs(tilt.tx - tilt.cx) < 0.0006 && Math.abs(tilt.ty - tilt.cy) < 0.0006;
  if (settled) {
    tilt.cx = tilt.tx;
    tilt.cy = tilt.ty;
  }
  applyTilt();

  if (settled) {
    tilt.raf = null;
    tilt.last = 0;
  } else {
    tilt.raf = requestAnimationFrame(stepTilt);
  }
};

const kickTilt = () => {
  if (!tilt.raf) tilt.raf = requestAnimationFrame(stepTilt);
};

const invalidateRect = () => { tilt.rect = null; };

const onStageEnter = () => {
  tilt.enabled = canTilt();
  if (!tilt.enabled) return;
  tilt.max = window.innerWidth >= 1024 ? 6 : 4;   // desktop : tablet
  tilt.rect = null;
  window.addEventListener('scroll', invalidateRect, { passive: true });
};

const onStageMove = (e) => {
  if (!tilt.enabled || (e.pointerType && e.pointerType === 'touch')) return;
  const stage = portraitStage.value;
  if (!stage) return;
  tilt.rect ||= stage.getBoundingClientRect();
  const { left, top, width, height } = tilt.rect;
  tilt.tx = clamp(((e.clientX - left) / width - 0.5) * 2, -1, 1);
  tilt.ty = clamp(((e.clientY - top) / height - 0.5) * 2, -1, 1);
  glowX.value = e.clientX - left;
  glowY.value = e.clientY - top;
  kickTilt();
};

const onStageLeave = () => {
  window.removeEventListener('scroll', invalidateRect);
  tilt.rect = null;
  tilt.tx = 0;
  tilt.ty = 0;
  glowX.value = 220;
  glowY.value = 220;
  if (tilt.enabled) kickTilt();
};

let intervalId = null;

onMounted(() => {
  tilt.enabled = canTilt();
  tilt.max = window.innerWidth >= 1024 ? 6 : 4;
  applyTilt(); // static lighting for every device (touch / reduced motion included)
  window.addEventListener('resize', invalidateRect, { passive: true });

  intervalId = setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
  }, 2500);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
  if (tilt.raf) cancelAnimationFrame(tilt.raf);
  window.removeEventListener('scroll', invalidateRect);
  window.removeEventListener('resize', invalidateRect);
});
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   HERO SECTION — stacking context & layout
───────────────────────────────────────────────────────────── */
.hero-section {
  isolation: isolate;
}

.hero-content-wrapper {
  position: relative;
  z-index: 10;
}

.hero-text-block {
  contain: layout style;
}

/* ─────────────────────────────────────────────────────────────
   HERO TYPOGRAPHY
───────────────────────────────────────────────────────────── */
.hero-kicker {
  letter-spacing: 0.22em;
}

.hero-title {
  font-size: clamp(2.75rem, 6vw + 1rem, 5.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin-bottom: 0.15em;
}

.hero-im-text {
  color: #1e293b;
  display: inline-block;
}

.dark .hero-im-text {
  color: #f1f5f9;
}

.hero-name-gradient {
  display: block;
  white-space: normal;
}

.hero-name-word {
  display: inline-block;
  white-space: nowrap;
}

/* Each character — gradient + stagger reveal with subtle 3D tip */
.hero-char {
  display: inline-block;
  background: linear-gradient(115deg, #2563eb 0%, #06b6d4 55%, #38bdf8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.30));
  opacity: 0;
  transform: translate3d(0, 0.45em, 0) rotateX(40deg);
  animation: char-reveal 720ms cubic-bezier(0.16, 1, 0.3, 1) var(--char-delay, 0ms) both;
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
   PORTRAIT — 3D stage
   .hero-portrait carries v-reveal's transform, so the idle float lives on
   .portrait-float instead (an animation here would override the reveal).
───────────────────────────────────────────────────────────── */
.portrait-stage {
  perspective: 1100px;
  perspective-origin: 50% 45%;
  /* Timed to resolve as the page loader fades out (~950ms) */
  animation: portrait-enter 1100ms cubic-bezier(0.16, 1, 0.3, 1) 820ms backwards;
}

.portrait-float {
  --float-y: -6px;
  transform-style: preserve-3d;
  animation: portrait-drift 7s ease-in-out infinite alternate;
  will-change: transform;
}

.portrait-tilt {
  position: relative;
  transform-style: preserve-3d;
  /* --rx / --ry are damped in JS; no CSS transition on transform to avoid double easing */
  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: scale 700ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .portrait-stage:hover .portrait-tilt {
    scale: 1.02;
  }
}

/* Glass frame — box-shadow follows --shadow-x / --shadow-y (set by the tilt controller) */
.portrait-card-3d {
  box-shadow:
    calc(var(--shadow-x, 0px) * 1.4) calc(var(--shadow-y, 0px) * 1.4) 40px rgba(0, 0, 0, 0.18),
    0 20px 60px rgba(37, 99, 235, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.12) inset;
  transition: box-shadow 280ms cubic-bezier(0.16, 1, 0.3, 1);
}

.portrait-backdrop {
  aspect-ratio: 687 / 1024;   /* intrinsic ratio of Portfolio.png — no distortion */
}

/* Rear ground shadow — sits behind the card in Z so it parallaxes on tilt */
.portrait-depth-shadow {
  position: absolute;
  inset: 12% 10% -3% 10%;
  border-radius: 2rem;
  background: radial-gradient(ellipse at 50% 60%, rgba(15, 23, 42, 0.32), transparent 70%);
  filter: blur(26px);
  transform: translate3d(14px, 30px, -60px);
  pointer-events: none;
}

.dark .portrait-depth-shadow {
  background: radial-gradient(ellipse at 50% 60%, rgba(0, 0, 0, 0.62), transparent 70%);
}

/* Cutout subject plane. translateZ + compensating scale (1 - 28/1100) keeps it
   pixel-aligned with the panel at rest; it only separates when tilted. */
.portrait-subject {
  position: absolute;
  inset: calc(0.5rem + 1px);        /* card padding (p-2) + 1px border */
  z-index: 20;
  transform: translateZ(28px) scale(0.97455);
  isolation: isolate;
  clip-path: inset(0 round 1rem);   /* matches the panel's rounded-2xl */
  pointer-events: none;
}

@media (min-width: 640px) {
  .portrait-subject {
    inset: calc(1rem + 1px);        /* sm:p-4 + 1px border */
  }
}

/* Silhouette-masked layers: lighting only touches the person, never the panel or page */
.portrait-light,
.portrait-shade,
.portrait-cast__shape {
  position: absolute;
  inset: 0;
  pointer-events: none;
  -webkit-mask-image: var(--portrait-mask);
  mask-image: var(--portrait-mask);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

/* Warm key light on the lit side — soft-light keeps skin tones natural */
.portrait-light {
  background: linear-gradient(
    var(--light-angle, 120deg),
    rgba(255, 238, 220, 0.6) 0%,
    rgba(255, 238, 220, 0.22) 28%,
    transparent 50%
  );
  mix-blend-mode: soft-light;
}

/* Gradual falloff on the far side — multiply keeps facial detail visible */
.portrait-shade {
  background: linear-gradient(
    var(--light-angle, 120deg),
    transparent 44%,
    rgba(15, 23, 42, 0.1) 64%,
    rgba(15, 23, 42, 0.3) 100%
  );
  mix-blend-mode: multiply;
}

.dark .portrait-shade {
  background: linear-gradient(
    var(--light-angle, 120deg),
    transparent 42%,
    rgba(2, 6, 23, 0.14) 62%,
    rgba(2, 6, 23, 0.38) 100%
  );
}

/* Rim light. Blur + vertical fade live on the wrapper so they apply after the band's mask;
   the fade also hides the image's cropped bottom edges (shirt meets the frame there). */
.portrait-rim {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0.55;
  filter: blur(0.8px);
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 46%, transparent 68%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 46%, transparent 68%);
}

.portrait-rim__band {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    var(--light-angle, 120deg),
    rgba(255, 243, 228, 0.9) 0%,
    rgba(255, 243, 228, 0.6) 36%,
    rgba(255, 243, 228, 0) 60%
  );
  /* silhouette minus the silhouette shifted along the light direction = lit edge */
  -webkit-mask-image: var(--portrait-mask), var(--portrait-mask);
  mask-image: var(--portrait-mask), var(--portrait-mask);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 0 0, var(--rim-x, 3.46px) var(--rim-y, 2px);
  mask-position: 0 0, var(--rim-x, 3.46px) var(--rim-y, 2px);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
}

/* Subject's shadow cast onto the panel behind it (blur applied after the mask) */
.portrait-cast {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transform: translate3d(var(--cast-x, 10px), var(--cast-y, 6px), 0);
  filter: blur(10px);
}

.portrait-cast__shape {
  background: rgba(15, 23, 42, 0.2);
}

.dark .portrait-cast__shape {
  background: rgba(0, 0, 0, 0.45);
}

/* Foreground depth chips — nearest plane, so they move most on tilt */
.portrait-chip {
  position: absolute;
  z-index: 30;
  pointer-events: none;
  transform: translateZ(64px);
  /* entrance uses the individual `translate` property so it composes with translateZ */
  animation: chip-enter 900ms cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.portrait-chip--laravel {
  top: 12%;
  left: -9%;
  animation-delay: 1500ms;
}

.portrait-chip--vue {
  bottom: 14%;
  right: -8%;
  animation-delay: 1650ms;
}

.portrait-chip__inner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
  color: var(--text-color);
  background: var(--surface-strong);
  border: 1px solid var(--border-soft);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.14);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  animation: chip-drift 6s ease-in-out infinite alternate;
}

.portrait-chip--vue .portrait-chip__inner {
  animation-duration: 7.5s;
  animation-delay: -2s;
}

.dark .portrait-chip__inner {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.portrait-chip__dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--dot);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dot) 20%, transparent);
}

/* Mouse-following glow layer behind the portrait */
.hero-portrait-glow {
  position: absolute;
  inset: -40px;
  z-index: 5;
  border-radius: 50%;
  pointer-events: none;
  transition: background 80ms linear;
  filter: blur(12px);
}

/* ─────────────────────────────────────────────────────────────
   FLOATING 3D SHAPES
───────────────────────────────────────────────────────────── */
.hero-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

/* Large ring — top-right */
.hero-shape--ring-lg {
  width: 22rem;
  height: 22rem;
  top: 4%;
  right: -6%;
  border-radius: 999px;
  border: 1.5px solid rgba(34, 211, 238, 0.18);
  box-shadow:
    inset 0 0 40px rgba(34, 211, 238, 0.06),
    0 0 60px rgba(34, 211, 238, 0.06);
  transform: perspective(600px) rotate3d(1, 0.5, 0, 24deg);
  animation: ring-float-lg 18s ease-in-out infinite alternate;
}

/* Small ring — bottom-left */
.hero-shape--ring-sm {
  width: 10rem;
  height: 10rem;
  bottom: 12%;
  left: 2%;
  border-radius: 999px;
  border: 1px solid rgba(37, 99, 235, 0.22);
  box-shadow:
    inset 0 0 20px rgba(37, 99, 235, 0.06),
    0 0 30px rgba(37, 99, 235, 0.06);
  transform: perspective(400px) rotate3d(0.6, 1, 0.2, -18deg);
  animation: ring-float-sm 13s ease-in-out infinite alternate-reverse;
}

/* Diamond / rhombus accent */
.hero-shape--diamond {
  width: 4.5rem;
  height: 4.5rem;
  top: 28%;
  left: 6%;
  border: 1.5px solid rgba(16, 185, 129, 0.30);
  background: rgba(16, 185, 129, 0.04);
  transform: perspective(300px) rotate3d(1, 1, 0.4, 42deg) rotate(45deg);
  animation: diamond-spin 22s linear infinite;
  box-shadow: 0 0 24px rgba(16, 185, 129, 0.12);
}

/* Dot grid — subtle noise texture top-left */
.hero-shape--dot-grid {
  width: 14rem;
  height: 14rem;
  top: 10%;
  left: -2%;
  background-image: radial-gradient(circle, rgba(37, 99, 235, 0.28) 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.35;
  animation: dot-drift 20s ease-in-out infinite alternate;
  mask-image: radial-gradient(ellipse 80% 80% at center, black 30%, transparent 80%);
}

.dark .hero-shape--ring-lg {
  border-color: rgba(34, 211, 238, 0.26);
  box-shadow: inset 0 0 60px rgba(34, 211, 238, 0.10), 0 0 80px rgba(34, 211, 238, 0.10);
}
.dark .hero-shape--ring-sm {
  border-color: rgba(96, 165, 250, 0.30);
}
.dark .hero-shape--diamond {
  border-color: rgba(52, 211, 153, 0.36);
  background: rgba(52, 211, 153, 0.06);
}
.dark .hero-shape--dot-grid {
  opacity: 0.5;
  background-image: radial-gradient(circle, rgba(96, 165, 250, 0.38) 1px, transparent 1px);
}

/* ─────────────────────────────────────────────────────────────
   BACKGROUND DECORATIONS
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
    transform: translate3d(0, 0.45em, 0) rotateX(40deg);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
}

@keyframes portrait-enter {
  from {
    opacity: 0;
    transform: perspective(1100px) translate3d(0, 28px, -40px) rotateY(-10deg);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

@keyframes portrait-drift {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(0, var(--float-y), 0); }
}

@keyframes chip-enter {
  from { opacity: 0; translate: 0 12px; }
  to   { opacity: 1; translate: 0 0; }
}

@keyframes chip-drift {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(0, -5px, 0); }
}

@keyframes ring-float-lg {
  0%   { transform: perspective(600px) rotate3d(1, 0.5, 0, 24deg) translateY(0px); }
  100% { transform: perspective(600px) rotate3d(1, 0.5, 0, 32deg) translateY(-22px) rotate(8deg); }
}

@keyframes ring-float-sm {
  0%   { transform: perspective(400px) rotate3d(0.6, 1, 0.2, -18deg) translateY(0px); }
  100% { transform: perspective(400px) rotate3d(0.6, 1, 0.2, -28deg) translateY(18px) rotate(-12deg); }
}

@keyframes diamond-spin {
  0%   { transform: perspective(300px) rotate3d(1, 1, 0.4, 42deg) rotate(0deg); }
  100% { transform: perspective(300px) rotate3d(1, 1, 0.4, 42deg) rotate(360deg); }
}

@keyframes dot-drift {
  0%   { transform: translate3d(0, 0, 0); opacity: 0.35; }
  100% { transform: translate3d(12px, -18px, 0); opacity: 0.55; }
}

/* ─────────────────────────────────────────────────────────────
   RESPONSIVE OVERRIDES
───────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(2.5rem, 10vw, 3.25rem);
    letter-spacing: -0.01em;
  }
  .hero-shape--ring-lg  { width: 14rem; height: 14rem; right: -10%; }
  .hero-shape--dot-grid { display: none; }
  .portrait-chip        { display: none; }
  .portrait-float       { --float-y: -4px; }
}

/* ─────────────────────────────────────────────────────────────
   REDUCED MOTION
───────────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .hero-char {
    opacity: 1;
    transform: none;
    animation: none;
    -webkit-text-fill-color: transparent;
  }

  .hero-portrait,
  .hero-orbit,
  .hero-shape {
    animation: none;
  }

  .portrait-card-3d,
  .portrait-stage,
  .portrait-float,
  .portrait-chip,
  .portrait-chip__inner {
    animation: none;
  }

  .portrait-tilt {
    transition: none;
  }
}
</style>
