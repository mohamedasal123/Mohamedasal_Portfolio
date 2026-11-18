<template>
  <Transition name="preloader-exit" @after-leave="onExitComplete">
    <div v-if="visible" class="preloader" role="status" aria-live="polite" aria-label="Loading portfolio">

      <!-- Background: Sliced Photo Drop -->
      <div class="preloader-bg">
        <div
          v-for="(strip, i) in strips"
          :key="i"
          class="preloader-strip"
          :style="{
            '--strip-index': i,
            '--strip-delay': `${i * 85 + Math.random() * 60}ms`,
            backgroundImage: `url(${portraitSrc})`,
            backgroundPosition: `${(i / (strips - 1)) * 100}% center`,
          }"
        ></div>
        <!-- Dark luxury vignette overlay -->
        <div class="preloader-vignette"></div>
      </div>

      <!-- Welcome Message -->
      <div class="preloader-content">
        <div class="preloader-welcome">
          <span class="preloader-welcome-text">WELCOME TO MY PORTFOLIO</span>
        </div>

        <!-- Split Name: Outlined + Solid -->
        <h1 class="preloader-name">
          <span class="preloader-name-outlined">MOHAMED</span>
          <span class="preloader-name-solid">ASAL</span>
        </h1>
      </div>

      <!-- Skip Button -->
      <button
        type="button"
        class="preloader-skip"
        @click="skip"
        aria-label="Skip introduction"
      >
        <span class="preloader-skip-text">Skip</span>
        <svg class="preloader-skip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
        </svg>
      </button>

    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['complete'])

const visible = ref(true)
const strips = 7
const portraitSrc = '/Portfolio-optimized.png'

let exitTimer = null

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const skip = () => {
  visible.value = false
}

const onExitComplete = () => {
  emit('complete')
}

onMounted(() => {
  // Lock body scroll
  document.body.style.overflow = 'hidden'

  // Auto-exit after 7.5 seconds (under 10s requirement)
  const duration = prefersReducedMotion() ? 500 : 7500
  exitTimer = setTimeout(() => {
    visible.value = false
  }, duration)
})

onUnmounted(() => {
  if (exitTimer) clearTimeout(exitTimer)
  // Unlock body scroll
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ═══════════════ Preloader Root ═══════════════ */
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  isolation: isolate;
  background: #020617;
  overflow: hidden;
}

/* ═══════════════ Background: Sliced Photo Drop (0s – 2.2s) ═══════════════ */
.preloader-bg {
  position: absolute;
  inset: 0;
  display: flex;
  background: #020617;
}

.preloader-strip {
  flex: 1;
  background-size: calc(700% + 100px) 100%;
  background-repeat: no-repeat;
  transform: translateY(-100%);
  opacity: 0;
  will-change: transform, opacity;
  animation: strip-drop 1.4s cubic-bezier(0.16, 1, 0.3, 1) var(--strip-delay, 0ms) both;
}

@keyframes strip-drop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Dark luxury vignette for contrast */
.preloader-vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 65% 45% at 50% 40%, transparent 20%, rgba(2, 6, 23, 0.75) 65%, rgba(2, 6, 23, 0.92) 100%),
    linear-gradient(180deg, rgba(2, 6, 23, 0.5), rgba(2, 6, 23, 0.85));
  pointer-events: none;
  animation: vignette-fade-in 1.2s ease 800ms both;
}

@keyframes vignette-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ═══════════════ Content Layer ═══════════════ */
.preloader-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
}

/* ═══════════════ Welcome Message (1.8s – 3.2s) ═══════════════ */
.preloader-welcome {
  overflow: hidden;
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  animation: welcome-appear 1s cubic-bezier(0.16, 1, 0.3, 1) 1.8s both;
}

@keyframes welcome-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preloader-welcome-text {
  display: block;
  font-size: clamp(0.7rem, 1.8vw, 0.95rem);
  font-weight: 700;
  letter-spacing: clamp(0.18em, 0.3vw, 0.28em);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  animation: welcome-slide-up 1.1s cubic-bezier(0.16, 1, 0.3, 1) 1.8s both;
}

@keyframes welcome-slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ═══════════════ Split Name: Outlined + Solid (2.8s – 5.8s) ═══════════════ */
.preloader-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  font-family: 'Inter', 'Outfit', sans-serif;
  font-size: clamp(2.5rem, 10vw, 7rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
}

@media (min-width: 768px) {
  .preloader-name {
    flex-direction: row;
    gap: clamp(1rem, 3vw, 2rem);
  }
}

/* Outlined "MOHAMED" with animated sheen */
.preloader-name-outlined {
  position: relative;
  color: transparent;
  -webkit-text-stroke: clamp(1.5px, 0.3vw, 2.5px) rgba(34, 211, 238, 0.85);
  text-stroke: clamp(1.5px, 0.3vw, 2.5px) rgba(34, 211, 238, 0.85);
  filter: drop-shadow(0 0 18px rgba(34, 211, 238, 0.4));
  clip-path: inset(0 100% 0 0);
  animation: name-outlined-reveal 1.6s cubic-bezier(0.16, 1, 0.3, 1) 2.8s both;
  will-change: clip-path;
}

.preloader-name-outlined::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    transparent 40%,
    rgba(34, 211, 238, 0.3) 48%,
    rgba(96, 165, 250, 0.4) 52%,
    transparent 60%,
    transparent 100%
  );
  animation: sheen-sweep 2.5s ease-in-out 3.5s infinite;
  pointer-events: none;
}

@keyframes name-outlined-reveal {
  to { clip-path: inset(0 0 0 0); }
}

@keyframes sheen-sweep {
  0%, 100% {
    transform: translateX(-200%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(200%);
    opacity: 0;
  }
}

/* Solid "ASAL" */
.preloader-name-solid {
  background: linear-gradient(135deg, #60a5fa 0%, #22d3ee 50%, #34d399 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 24px rgba(34, 211, 238, 0.5));
  clip-path: inset(0 100% 0 0);
  animation: name-solid-reveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 3.4s both;
  will-change: clip-path;
}

@keyframes name-solid-reveal {
  to { clip-path: inset(0 0 0 0); }
}

/* ═══════════════ Skip Button ═══════════════ */
.preloader-skip {
  position: fixed;
  bottom: clamp(1.5rem, 4vw, 2.5rem);
  right: clamp(1.5rem, 4vw, 2.5rem);
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  font-size: clamp(0.8rem, 1.8vw, 0.95rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  animation: skip-fade-in 0.6s ease 1.5s both;
  transition: all 280ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

@keyframes skip-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preloader-skip:hover {
  transform: translateY(-2px);
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(34, 211, 238, 0.6);
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
}

.preloader-skip-text {
  display: block;
}

.preloader-skip-icon {
  width: 18px;
  height: 18px;
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}

.preloader-skip:hover .preloader-skip-icon {
  transform: translateX(4px);
}

/* ═══════════════ Exit Transition (6.2s – 7.5s) ═══════════════ */
.preloader-exit-leave-active {
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.preloader-exit-leave-to {
  opacity: 0;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

/* ═══════════════ Mobile Performance Optimizations ═══════════════ */
@media (max-width: 767px) {
  .preloader-strip {
    background-size: calc(800% + 80px) 120%;
  }

  .preloader-skip {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}

/* ═══════════════ Reduced Motion ═══════════════ */
@media (prefers-reduced-motion: reduce) {
  .preloader-strip,
  .preloader-vignette,
  .preloader-welcome,
  .preloader-welcome-text,
  .preloader-name-outlined,
  .preloader-name-solid,
  .preloader-skip,
  .preloader-name-outlined::after {
    animation: none !important;
  }

  .preloader-strip {
    transform: none;
    opacity: 1;
  }

  .preloader-vignette,
  .preloader-welcome,
  .preloader-welcome-text,
  .preloader-name-outlined,
  .preloader-name-solid,
  .preloader-skip {
    opacity: 1;
    transform: none;
    clip-path: none;
  }

  .preloader-exit-leave-active {
    transition: opacity 300ms ease;
  }

  .preloader-exit-leave-to {
    opacity: 0;
    clip-path: none;
  }
}
</style>
