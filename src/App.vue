<template>
  <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
    <loading-spanner />
  </div>
  
  <div class="relative min-h-screen text-slate-900 dark:text-slate-50 transition-colors duration-500 overflow-hidden">
    
   
    <div class="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-700">

      <!-- ── LAYER 1 · Tech Grid (Slowest, subtle counter-parallax) ── -->
      <div class="absolute inset-0 will-change-transform"
           :style="{
             transform: `translate3d(${smoothX * -0.012}px, ${smoothY * -0.012}px, 0)`,
             transition: 'none'
           }">
        <!-- Primary grid -->
        <div class="absolute inset-[-5%] tech-grid opacity-20 dark:opacity-35"></div>
        <!-- Animated grid shimmer sweep -->
        <div class="absolute inset-0 grid-shimmer opacity-0 dark:opacity-100"></div>
      </div>

      <!-- ── LAYER 2 · Organic Blob Shapes (Medium parallax) ── -->
      <div class="absolute inset-0 will-change-transform"
           :style="{
             transform: `translate3d(${smoothX * 0.018}px, ${smoothY * 0.018}px, 0)`,
             transition: 'none'
           }">
        <div class="blob-bg bg-shape1"></div>
        <div class="blob-bg bg-shape2"></div>
        <div class="blob-bg bg-shape3"></div>
        <!-- Extra accent blob (dark mode only) -->
        <div class="blob-bg bg-shape4 hidden dark:block"></div>
      </div>

      <!-- ── LAYER 3 · SVG Noise Texture (Depth & Premium Feel) ── -->
      <div class="absolute inset-0 noise-overlay opacity-[0.025] dark:opacity-[0.04] mix-blend-overlay pointer-events-none"></div>

      <!-- ── LAYER 4 · Smart Particle System (Fastest parallax + drift) ── -->
      <div class="absolute inset-0 will-change-transform"
           :style="{
             transform: `translate3d(${smoothX * -0.038}px, ${smoothY * -0.038}px, 0)`,
             transition: 'none'
           }">
        <!-- Main glowing particles -->
        <div
          v-for="p in particles"
          :key="p.id"
          class="tech-particle absolute rounded-full will-change-transform"
          :style="getParticleStyle(p)"
        ></div>
        <!-- Connection Lines Canvas -->
        <canvas
          ref="particleCanvas"
          class="absolute inset-0 w-full h-full opacity-0 dark:opacity-100"
          :width="windowWidth"
          :height="windowHeight"
        ></canvas>
      </div>

      <!-- ── LAYER 5 · Multi-Layer Mouse Glow (Inertia trailing) ── -->
      <!-- Outer Halo — slowest trail -->
      <div class="absolute top-0 left-0 pointer-events-none mix-blend-screen will-change-transform"
           :style="{
             transform: `translate3d(${glowX1 - 500}px, ${glowY1 - 500}px, 0)`,
             transition: 'none'
           }">
        <div class="glow-halo-outer w-[1000px] h-[1000px] rounded-full opacity-60 dark:opacity-40"></div>
      </div>
      <!-- Mid Glow — medium trail -->
      <div class="absolute top-0 left-0 pointer-events-none mix-blend-screen will-change-transform"
           :style="{
             transform: `translate3d(${glowX2 - 300}px, ${glowY2 - 300}px, 0)`,
             transition: 'none'
           }">
        <div class="glow-halo-mid w-[600px] h-[600px] rounded-full opacity-80 dark:opacity-60"></div>
      </div>
      <!-- Core Glow — fastest (closest to cursor) -->
      <div class="absolute top-0 left-0 pointer-events-none mix-blend-screen will-change-transform"
           :style="{
             transform: `translate3d(${glowX3 - 120}px, ${glowY3 - 120}px, 0)`,
             transition: 'none'
           }">
        <div class="glow-halo-core w-[240px] h-[240px] rounded-full opacity-90 dark:opacity-70"></div>
      </div>

      <!-- ── LAYER 6 · Readability Backdrop ── -->
      <div class="absolute inset-0 backdrop-blur-[60px] bg-white/45 dark:bg-[#020617]/72"></div>
    </div>

    <div class="relative z-10 w-full">
      <navbar />
      <hero />
      <services />
      <about />
      <experience-skills />
      <projects />
      <contact />
      <end />
      <top />
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import { ref, reactive, nextTick, onMounted, onUnmounted, computed } from 'vue';
import { useDark, useToggle, useMouse, useWindowSize } from '@vueuse/core';
import Services from './components/Services.vue';
import About from './components/About.vue';
import ExperienceSkills from './components/ExperienceSkills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import End from './components/End.vue';
import LoadingSpanner from './components/LoadingSpanner.vue';
import Top from './components/Top.vue';

// ─── Lerp helper ────────────────────────────────────────────────────────────
const lerp = (a, b, t) => a + (b - a) * t;

// ─── Particle factory ────────────────────────────────────────────────────────
const createParticles = (count = 22) => {
  return Array.from({ length: count }, (_, i) => {
    const sin = Math.sin(i * 1234.5678 + 0.1);
    const cos = Math.cos(i * 4321.8765 + 0.1);
    const sin2 = Math.sin(i * 987.654);
    const cos2 = Math.cos(i * 543.21);
    return {
      id: i,
      size: 2 + Math.abs(sin) * 6,
      left: Math.abs(cos) * 100,
      top: Math.abs(sin * cos) * 100,
      opacity: 0.15 + Math.abs(sin) * 0.5,
      floatDur: 8 + Math.abs(sin) * 18,
      floatDelay: Math.abs(cos) * 12,
      driftDur: 20 + Math.abs(sin2) * 30,
      driftDelay: Math.abs(cos2) * 20,
      pulseDur: 3 + Math.abs(sin2) * 4,
      pulseDelay: Math.abs(cos2) * 5,
      // Drift destination offsets (vw/vh relative)
      driftX: (sin2 * 8).toFixed(2),
      driftY: (cos2 * 8).toFixed(2),
    };
  });
};

export default {
  components: { Navbar, Hero, Services, About, ExperienceSkills, Projects, Contact, End, LoadingSpanner, Top },

  setup() {
    const loading = ref(true);
    const particleCanvas = ref(null);

    const isDark = useDark({
      selector: 'html',
      attribute: 'class',
      valueDark: 'dark',
      valueLight: '',
    });
    useToggle(isDark);

    // ── Mouse raw position ──────────────────────────────────────────────────
    const { x: mouseX, y: mouseY } = useMouse();
    const { width, height } = useWindowSize();

    const windowWidth = computed(() => width.value);
    const windowHeight = computed(() => height.value);

    // ── Inertia / smoothed positions ───────────────────────────────────────
    // smoothX/Y → parallax (relative to center)
    // glowX1/Y1 → slowest glow trail  (outer halo)
    // glowX2/Y2 → medium glow trail   (mid glow)
    // glowX3/Y3 → fastest glow trail  (core dot)
    const smoothX = ref(0);
    const smoothY = ref(0);
    const glowX1 = ref(0);
    const glowY1 = ref(0);
    const glowX2 = ref(0);
    const glowY2 = ref(0);
    const glowX3 = ref(0);
    const glowY3 = ref(0);

    let rafId = null;
    let canvasCtx = null;
    let lastConnectFrame = 0;

    // ── Particles data ──────────────────────────────────────────────────────
    const particles = reactive(createParticles(22));

    // ── Connection-line drawing ─────────────────────────────────────────────
    const drawConnections = () => {
      if (!canvasCtx || !particleCanvas.value) return;
      const now = performance.now();
      if (now - lastConnectFrame < 50) return; // ~20fps for lines (cheap)
      lastConnectFrame = now;

      const canvas = particleCanvas.value;
      const w = canvas.width;
      const h = canvas.height;
      canvasCtx.clearRect(0, 0, w, h);

      // Collect absolute pixel positions
      const pts = particles.map(p => ({
        x: (p.left / 100) * w,
        y: (p.top / 100) * h,
        r: p.size / 2,
      }));

      const MAX_DIST = 160;
      canvasCtx.lineWidth = 0.5;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            canvasCtx.strokeStyle = `rgba(99, 179, 237, ${alpha})`;
            canvasCtx.beginPath();
            canvasCtx.moveTo(pts[i].x, pts[i].y);
            canvasCtx.lineTo(pts[j].x, pts[j].y);
            canvasCtx.stroke();
          }
        }
      }
    };

    // ── Main RAF loop ───────────────────────────────────────────────────────
    const isMobile = () => window.innerWidth < 768;

    const tick = () => {
      const cx = width.value / 2;
      const cy = height.value / 2;

      if (!isMobile()) {
        // Parallax relative offset — strong inertia (t=0.06)
        smoothX.value = lerp(smoothX.value, mouseX.value - cx, 0.06);
        smoothY.value = lerp(smoothY.value, mouseY.value - cy, 0.06);

        // Glow trails — varying speeds
        glowX1.value = lerp(glowX1.value, mouseX.value, 0.04); // slowest
        glowY1.value = lerp(glowY1.value, mouseY.value, 0.04);

        glowX2.value = lerp(glowX2.value, mouseX.value, 0.08); // medium
        glowY2.value = lerp(glowY2.value, mouseY.value, 0.08);

        glowX3.value = lerp(glowX3.value, mouseX.value, 0.16); // fastest
        glowY3.value = lerp(glowY3.value, mouseY.value, 0.16);
      } else {
        // On mobile: zero out parallax, center glow
        smoothX.value = lerp(smoothX.value, 0, 0.1);
        smoothY.value = lerp(smoothY.value, 0, 0.1);
        glowX1.value = glowX2.value = glowX3.value = cx;
        glowY1.value = glowY2.value = glowY3.value = cy;
      }

      drawConnections();
      rafId = requestAnimationFrame(tick);
    };

    // ── Particle style builder ──────────────────────────────────────────────
    const getParticleStyle = (p) => ({
      width: `${p.size}px`,
      height: `${p.size}px`,
      left: `${p.left}%`,
      top: `${p.top}%`,
      opacity: p.opacity,
      // Combined: float (vertical oscillation) + drift (slow wander) + pulse (glow breath)
      animation: [
        `float-particle ${p.floatDur}s ease-in-out ${p.floatDelay}s infinite alternate`,
        `drift-particle-${(p.id % 4) + 1} ${p.driftDur}s ease-in-out ${p.driftDelay}s infinite alternate`,
        `pulse-glow ${p.pulseDur}s ease-in-out ${p.pulseDelay}s infinite alternate`,
      ].join(', '),
    });

    // ── Lifecycle ───────────────────────────────────────────────────────────
    onMounted(async () => {
      await nextTick();

      // Seed glow at center so it doesn't snap from 0,0
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      glowX1.value = glowX2.value = glowX3.value = cx;
      glowY1.value = glowY2.value = glowY3.value = cy;

      // Canvas setup
      if (particleCanvas.value) {
        canvasCtx = particleCanvas.value.getContext('2d');
      }

      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-in-out',
      });

      tick();

      setTimeout(() => { loading.value = false; }, 800);
    });

    onUnmounted(() => {
      if (rafId) cancelAnimationFrame(rafId);
    });

    return {
      loading,
      mouseX,
      mouseY,
      smoothX,
      smoothY,
      glowX1, glowY1,
      glowX2, glowY2,
      glowX3, glowY3,
      windowWidth,
      windowHeight,
      particles,
      particleCanvas,
      getParticleStyle,
    };
  },
};
</script>

<style>
/* ═══════════════════════════════════════════════════════════════════
   PREMIUM BACKGROUND ANIMATION SYSTEM
   All classes are global because they live on fixed background divs.
   ═══════════════════════════════════════════════════════════════════ */

/* ── Tech Grid ──────────────────────────────────────────────────── */
.tech-grid {
  background-image:
    linear-gradient(rgba(99, 179, 237, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 179, 237, 0.18) 1px, transparent 1px);
  background-size: 48px 48px;
  /* Subtle drift of the grid itself */
  animation: grid-drift 30s ease-in-out infinite alternate;
}

@keyframes grid-drift {
  0%   { background-position: 0px 0px; }
  100% { background-position: 24px 24px; }
}

/* Grid shimmer sweep (dark mode only) */
.grid-shimmer {
  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(99, 179, 237, 0.04) 50%,
    transparent 80%
  );
  background-size: 200% 200%;
  animation: shimmer-sweep 8s ease-in-out infinite;
}

@keyframes shimmer-sweep {
  0%   { background-position: -100% -100%; opacity: 0; }
  30%  { opacity: 1; }
  70%  { opacity: 1; }
  100% { background-position: 200% 200%; opacity: 0; }
}

/* ── Blob Shapes ─────────────────────────────────────────────────── */
.blob-bg {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  will-change: transform, opacity;
}

/* Light mode blobs */
.bg-shape1 {
  width: 55vw; height: 55vw;
  max-width: 700px; max-height: 700px;
  top: -15%; left: -10%;
  background: radial-gradient(ellipse at 40% 40%,
    rgba(147, 197, 253, 0.55),
    rgba(196, 181, 253, 0.30),
    transparent 70%);
  animation: blob-morph-1 18s ease-in-out infinite alternate;
}
.bg-shape2 {
  width: 50vw; height: 50vw;
  max-width: 650px; max-height: 650px;
  top: 30%; right: -12%;
  background: radial-gradient(ellipse at 60% 40%,
    rgba(196, 181, 253, 0.45),
    rgba(147, 197, 253, 0.25),
    transparent 70%);
  animation: blob-morph-2 22s ease-in-out infinite alternate;
}
.bg-shape3 {
  width: 45vw; height: 45vw;
  max-width: 580px; max-height: 580px;
  bottom: -10%; left: 30%;
  background: radial-gradient(ellipse at 50% 60%,
    rgba(167, 243, 208, 0.35),
    rgba(103, 232, 249, 0.20),
    transparent 70%);
  animation: blob-morph-3 26s ease-in-out infinite alternate;
}

/* Dark mode blobs — more saturated, neon-ish */
.dark .bg-shape1 {
  background: radial-gradient(ellipse at 40% 40%,
    rgba(56, 189, 248, 0.18),
    rgba(139, 92, 246, 0.12),
    transparent 70%);
}
.dark .bg-shape2 {
  background: radial-gradient(ellipse at 60% 40%,
    rgba(139, 92, 246, 0.15),
    rgba(59, 130, 246, 0.10),
    transparent 70%);
}
.dark .bg-shape3 {
  background: radial-gradient(ellipse at 50% 60%,
    rgba(16, 185, 129, 0.12),
    rgba(56, 189, 248, 0.08),
    transparent 70%);
}
.dark .bg-shape4 {
  width: 40vw; height: 40vw;
  max-width: 500px; max-height: 500px;
  top: 5%; right: 25%;
  background: radial-gradient(ellipse at 50% 50%,
    rgba(244, 63, 94, 0.06),
    rgba(251, 113, 133, 0.04),
    transparent 70%);
  animation: blob-morph-4 32s ease-in-out infinite alternate;
}

@keyframes blob-morph-1 {
  0%   { transform: translate3d(0,0,0) scale(1)    rotate(0deg);   border-radius: 60% 40% 50% 50%; }
  33%  { transform: translate3d(3%,2%,0) scale(1.06) rotate(5deg);  border-radius: 50% 60% 40% 55%; }
  66%  { transform: translate3d(-2%,4%,0) scale(0.97) rotate(-3deg); border-radius: 45% 55% 60% 40%; }
  100% { transform: translate3d(2%,-3%,0) scale(1.04) rotate(7deg);  border-radius: 55% 45% 45% 60%; }
}
@keyframes blob-morph-2 {
  0%   { transform: translate3d(0,0,0) scale(1)    rotate(0deg);    border-radius: 55% 45% 60% 40%; }
  40%  { transform: translate3d(-4%,3%,0) scale(1.08) rotate(-6deg); border-radius: 40% 60% 50% 55%; }
  80%  { transform: translate3d(3%,-2%,0) scale(0.95) rotate(4deg);  border-radius: 60% 40% 45% 55%; }
  100% { transform: translate3d(-2%,5%,0) scale(1.05) rotate(-3deg); border-radius: 50% 50% 60% 40%; }
}
@keyframes blob-morph-3 {
  0%   { transform: translate3d(0,0,0) scale(1)    rotate(0deg);   border-radius: 50% 50% 50% 50%; }
  50%  { transform: translate3d(5%,-4%,0) scale(1.1) rotate(8deg);  border-radius: 60% 40% 55% 45%; }
  100% { transform: translate3d(-3%,3%,0) scale(0.93) rotate(-5deg); border-radius: 45% 60% 40% 58%; }
}
@keyframes blob-morph-4 {
  0%   { transform: translate3d(0,0,0) scale(1); border-radius: 50% 50% 50% 50%; }
  100% { transform: translate3d(4%,5%,0) scale(1.12); border-radius: 40% 60% 55% 45%; }
}

/* ── SVG Noise Overlay ───────────────────────────────────────────── */
.noise-overlay {
  /* Inline SVG feTurbulence as data URI — zero external requests */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 180px 180px;
}

/* ── Particle System ─────────────────────────────────────────────── */
.tech-particle {
  background: radial-gradient(circle at 35% 35%,
    rgba(147, 210, 255, 1),
    rgba(59, 130, 246, 0.9) 50%,
    rgba(139, 92, 246, 0.5) 80%,
    transparent);
  box-shadow:
    0 0 6px 1px rgba(59, 130, 246, 0.7),
    0 0 12px 2px rgba(59, 130, 246, 0.3);
}
.dark .tech-particle {
  background: radial-gradient(circle at 35% 35%,
    rgba(186, 230, 255, 1),
    rgba(56, 189, 248, 0.9) 50%,
    rgba(139, 92, 246, 0.4) 80%,
    transparent);
  box-shadow:
    0 0 8px 2px rgba(56, 189, 248, 0.8),
    0 0 16px 4px rgba(56, 189, 248, 0.25),
    0 0 30px 6px rgba(139, 92, 246, 0.1);
}

/* Float — vertical oscillation */
@keyframes float-particle {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(0, -22px, 0); }
}

/* Drift variants — unique horizontal/diagonal wander per cluster */
@keyframes drift-particle-1 {
  from { transform: translate3d(0px, 0px, 0); }
  to   { transform: translate3d(14px, -10px, 0); }
}
@keyframes drift-particle-2 {
  from { transform: translate3d(0px, 0px, 0); }
  to   { transform: translate3d(-12px, 8px, 0); }
}
@keyframes drift-particle-3 {
  from { transform: translate3d(0px, 0px, 0); }
  to   { transform: translate3d(10px, 12px, 0); }
}
@keyframes drift-particle-4 {
  from { transform: translate3d(0px, 0px, 0); }
  to   { transform: translate3d(-8px, -14px, 0); }
}

/* Glow breathing / pulse */
@keyframes pulse-glow {
  from {
    box-shadow:
      0 0 6px 1px rgba(59, 130, 246, 0.5),
      0 0 12px 2px rgba(59, 130, 246, 0.2);
    opacity: var(--base-opacity, 0.4);
  }
  to {
    box-shadow:
      0 0 10px 3px rgba(99, 170, 255, 0.85),
      0 0 22px 5px rgba(59, 130, 246, 0.40),
      0 0 40px 8px rgba(139, 92, 246, 0.15);
    opacity: 1;
  }
}

/* ── Mouse Glow Layers ───────────────────────────────────────────── */
/* Outer Halo — largest, very soft, slowest */
.glow-halo-outer {
  background: radial-gradient(circle at center,
    rgba(59, 130, 246, 0.07)   0%,
    rgba(99, 102, 241, 0.05)  25%,
    rgba(139, 92, 246, 0.03)  50%,
    transparent                70%
  );
  filter: blur(40px);
}
.dark .glow-halo-outer {
  background: radial-gradient(circle at center,
    rgba(56, 189, 248, 0.10)   0%,
    rgba(99, 102, 241, 0.07)  25%,
    rgba(139, 92, 246, 0.04)  50%,
    transparent                70%
  );
}

/* Mid Glow */
.glow-halo-mid {
  background: radial-gradient(circle at center,
    rgba(99, 170, 255, 0.12)  0%,
    rgba(139, 92, 246, 0.07) 40%,
    transparent               70%
  );
  filter: blur(20px);
}
.dark .glow-halo-mid {
  background: radial-gradient(circle at center,
    rgba(56, 189, 248, 0.18)  0%,
    rgba(139, 92, 246, 0.10) 40%,
    transparent               70%
  );
}

/* Core — tightest, brightest, fastest-trailing */
.glow-halo-core {
  background: radial-gradient(circle at center,
    rgba(147, 210, 255, 0.20)  0%,
    rgba(99, 170, 255, 0.12)  40%,
    transparent                70%
  );
  filter: blur(8px);
}
.dark .glow-halo-core {
  background: radial-gradient(circle at center,
    rgba(186, 230, 255, 0.28)  0%,
    rgba(56, 189, 248, 0.16)  40%,
    transparent                70%
  );
}
</style>