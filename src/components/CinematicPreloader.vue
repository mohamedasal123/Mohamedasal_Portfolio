<template>
  <Transition name="preloader-exit" @after-leave="onExitComplete">
    <div v-if="visible" class="preloader" role="status" aria-live="polite" aria-label="Loading portfolio">

      <!-- Background: Sliced Photo Drop -->
      <div class="preloader-bg">
        <div
          v-for="(strip, i) in stripCount"
          :key="i"
          class="preloader-strip"
          :style="{
            '--strip-index': i,
            '--strip-delay': `${i * 70 + Math.random() * 40}ms`,
            backgroundImage: `url(${portraitSrc})`,
            backgroundPosition: isMobile ? 'center 20%' : `${(i / (stripCount - 1)) * 100}% center`,
            backgroundSize: isMobile ? '500% 100%' : 'calc(700% + 100px) 100%',
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
import { ref, onMounted, onUnmounted, computed } from 'vue'

const emit = defineEmits(['complete'])

const visible = ref(true)
const isMobile = ref(false)
const portraitSrc = '/Portfolio-optimized.png'

// Dynamic strip count based on viewport
const stripCount = computed(() => isMobile.value ? 5 : 7)

let exitTimer = null

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const updateMobileState = () => {
  isMobile.value = window.innerWidth < 768
}

const skip = () => {
  visible.value = false
}

const onExitComplete = () => {
  emit('complete')
}

onMounted(() => {
  updateMobileState()
  window.addEventListener('resize', updateMobileState, { passive: true })

  // Lock body scroll
  document.body.style.overflow = 'hidden'

  // Shorter duration: 6.5s total (instead of 7.5s)
  const duration = prefersReducedMotion() ? 500 : 6500
  exitTimer = setTimeout(() => {
    visible.value = false
  }, duration)
})

onUnmounted(() => {
  if (exitTimer) clearTimeout(exitTimer)
  window.removeEventListener('resize', updateMobileState)
  // Unlock body scroll
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ═══════════════ Preloader Root ═══════════════ */
.preloader {
  position: fixed;
  inset: 0;
  height: 100dvh;
  z-index: 9999;
  isolation: isolate;
  background: #020617;
  overflow: hidden;
}

/* ═══════════════ Background: Sliced Photo Drop (0s – 1.8s — faster) ═══════════════ */
.preloader-bg {
  position: absolute;
  inset: 0;
  display: flex;
  background: #020617;
}

.preloader-strip {
  flex: 1;
  background-repeat: no-repeat;
  transform: translateY(-100%);
  opacity: 0;
  will-change: transform, opacity;
  animation: strip-drop 1.1s cubic-bezier(0.16, 1, 0.3, 1) var(--strip-delay, 0ms) both;
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
  animation: vignette-fade-in 1s ease 600ms both;
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
  padding: clamp(1rem, 4vw, 2rem);
  padding-bottom: max(clamp(1rem, 4vw, 2rem), env(safe-area-inset-bottom));
}

/* ═══════════════ Welcome Message (1.4s – 2.8s — faster) ═══════════════ */
.preloader-welcome {
  overflow: hidden;
  margin-bottom: clamp(1rem, 3vw, 2rem);
  animation: welcome-appear 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both;
}

@keyframes welcome-appear {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preloader-welcome-text {
  display: block;
  font-size: clamp(0.65rem, 1.6vw, 0.9rem);
  font-weight: 700;
  letter-spacing: clamp(0.18em, 0.3vw, 0.26em);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  animation: welcome-slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both;
  word-spacing: 0.1em;
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

/* ═══════════════ Split Name: Outlined + Solid (2.2s – 5.2s — faster) ═══════════════ */
.preloader-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.4rem, 1.8vw, 0.8rem);
  font-family: 'Inter', 'Outfit', sans-serif;
  font-size: clamp(2rem, 9.5vw, 6.5rem);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
  word-spacing: 9999px;
}

@media (min-width: 768px) {
  .preloader-name {
    flex-direction: row;
    gap: clamp(1rem, 3vw, 2rem);
    word-spacing: normal;
  }
}

/* Outlined "MOHAMED" with animated sheen */
.preloader-name-outlined {
  position: relative;
  color: transparent;
  -webkit-text-stroke: clamp(1px, 0.25vw, 2px) rgba(34, 211, 238, 0.85);
  text-stroke: clamp(1px, 0.25vw, 2px) rgba(34, 211, 238, 0.85);
  filter: drop-shadow(0 0 16px rgba(34, 211, 238, 0.35));
  clip-path: inset(0 100% 0 0);
  animation: name-outlined-reveal 1.3s cubic-bezier(0.16, 1, 0.3, 1) 2.2s both;
  will-change: clip-path;
  white-space: nowrap;
}

.preloader-name-outlined::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    transparent 40%,
    rgba(34, 211, 238, 0.25) 48%,
    rgba(96, 165, 250, 0.35) 52%,
    transparent 60%,
    transparent 100%
  );
  animation: sheen-sweep 2.2s ease-in-out 3s infinite;
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
  filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.42));
  clip-path: inset(0 100% 0 0);
  animation: name-solid-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.9s both;
  will-change: clip-path;
  white-space: nowrap;
}

@keyframes name-solid-reveal {
  to { clip-path: inset(0 0 0 0); }
}

/* ═══════════════ Skip Button ═══════════════ */
.preloader-skip {
  position: fixed;
  bottom: max(clamp(1rem, 3vw, 1.5rem), env(safe-area-inset-bottom, 1rem));
  right: clamp(1rem, 3vw, 1.5rem);
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: clamp(0.6rem, 1.5vw, 0.75rem) clamp(1rem, 2vw, 1.25rem);
  border-radius: 9999px;
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  opacity: 0;
  transform: translateY(16px);
  animation: skip-fade-in 0.5s ease 1.2s both;
  transition: all 240ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

@keyframes skip-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preloader-skip:active {
  transform: translateY(2px);
  background: rgba(15, 23, 42, 0.75);
}

@media (hover: hover) {
  .preloader-skip:hover {
    transform: translateY(-2px);
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(34, 211, 238, 0.6);
    box-shadow: 0 0 16px rgba(34, 211, 238, 0.25);
  }

  .preloader-skip:hover .preloader-skip-icon {
    transform: translateX(3px);
  }
}

.preloader-skip-text {
  display: block;
}

.preloader-skip-icon {
  width: 16px;
  height: 16px;
  transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* ═══════════════ Exit Transition (5.8s – 6.5s) ═══════════════ */
.preloader-exit-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.preloader-exit-leave-to {
  opacity: 0;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

/* ═══════════════ Mobile Responsive Overrides (<768px) ═══════════════ */
@media (max-width: 767px) {
  .preloader-strip {
    animation: strip-drop-mobile 0.95s cubic-bezier(0.16, 1, 0.3, 1) var(--strip-delay, 0ms) both;
  }

  @keyframes strip-drop-mobile {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 0.65;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .preloader-name {
    padding: 0 clamp(0.75rem, 2vw, 1rem);
  }

  .preloader-name-outlined {
    -webkit-text-stroke: 0.8px rgba(34, 211, 238, 0.88);
    text-stroke: 0.8px rgba(34, 211, 238, 0.88);
  }

  .preloader-skip {
    gap: 0.25rem;
  }

  .preloader-skip-icon {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 480px) {
  .preloader-content {
    padding: clamp(0.75rem, 3vw, 1rem);
  }

  .preloader-name {
    padding: 0 0.5rem;
  }

  .preloader-skip {
    bottom: max(0.75rem, env(safe-area-inset-bottom, 0.75rem));
    right: 0.75rem;
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
