<template>
  <transition name="loader-fade">
    <div v-if="loading" class="loader-screen">
      <loading-spanner />
    </div>
  </transition>

  <div class="site-root min-h-screen text-slate-900 dark:text-slate-50">

    <!-- scroll indicator -->
    <div
      class="scroll-progress"
      :style="{ transform: `scaleX(${scrollProgress})` }"
      aria-hidden="true"
    ></div>

    <!-- ✦ Animated network background -->
    <tech-background
      :cursor-enabled="cursorEnabled"
      :cx="cursor.x"
      :cy="cursor.y"
    />

    <!-- custom cursor -->
    <div
      v-if="cursorEnabled"
      class="custom-cursor"
      :class="{ 'custom-cursor--active': cursor.active }"
      :style="{ transform: `translate3d(${cursor.x - 6}px, ${cursor.y - 6}px, 0)` }"
      aria-hidden="true"
    ></div>
    <div
      v-if="cursorEnabled"
      class="custom-cursor-follower"
      :class="{ 'custom-cursor-follower--active': cursor.active }"
      :style="{ transform: `translate3d(${follower.x - 20}px, ${follower.y - 20}px, 0)` }"
      aria-hidden="true"
    ></div>

    <div class="app-shell relative z-10 w-full">
      <navbar />
      <main>
        <hero />
        <services />
        <about />
        <experience-skills />
        <projects />
        <contact />
      </main>
      <end />
      <top />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useDark } from '@vueuse/core'
import Hero            from './components/Hero.vue'
import Navbar          from './components/Navbar.vue'
import Services        from './components/Services.vue'
import About           from './components/About.vue'
import ExperienceSkills from './components/ExperienceSkills.vue'
import Projects        from './components/Projects.vue'
import Contact         from './components/Contact.vue'
import End             from './components/End.vue'
import LoadingSpanner  from './components/LoadingSpanner.vue'
import Top             from './components/Top.vue'
import TechBackground  from './components/TechBackground.vue'   // ← new

useDark({
  selector:   'html',
  attribute:  'class',
  valueDark:  'dark',
  valueLight: '',
})

const loading        = ref(true)
const scrollProgress = ref(0)
const cursorEnabled  = ref(false)
const cursor         = reactive({ x: 0, y: 0, active: false })
const follower       = reactive({ x: 0, y: 0 })

let rafId, followerRafId, loaderTimer

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const updateScrollProgress = () => {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = max > 0 ? window.scrollY / max : 0
    rafId = null
  })
}

const animateFollower = () => {
  follower.x += (cursor.x - follower.x) * 0.16
  follower.y += (cursor.y - follower.y) * 0.16
  followerRafId = requestAnimationFrame(animateFollower)
}

const handlePointerMove = (e) => {
  cursor.x = e.clientX
  cursor.y = e.clientY
}

const handlePointerOver = (e) => {
  cursor.active = Boolean(
    e.target.closest('a, button, input, textarea, [role="button"], .project-card')
  )
}

onMounted(() => {
  const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
  cursorEnabled.value = Boolean(fine && !prefersReducedMotion())

  cursor.x = follower.x = window.innerWidth  / 2
  cursor.y = follower.y = window.innerHeight / 2

  updateScrollProgress()
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  window.addEventListener('resize', updateScrollProgress, { passive: true })

  if (cursorEnabled.value) {
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerover',  handlePointerOver, { passive: true })
    animateFollower()
  }

  loaderTimer = setTimeout(
    () => { loading.value = false },
    prefersReducedMotion() ? 120 : 950
  )
})

onUnmounted(() => {
  if (rafId)          cancelAnimationFrame(rafId)
  if (followerRafId)  cancelAnimationFrame(followerRafId)
  if (loaderTimer)    clearTimeout(loaderTimer)

  window.removeEventListener('scroll',       updateScrollProgress)
  window.removeEventListener('resize',       updateScrollProgress)
  window.removeEventListener('pointermove',  handlePointerMove)
  document.removeEventListener('pointerover', handlePointerOver)
})
</script>