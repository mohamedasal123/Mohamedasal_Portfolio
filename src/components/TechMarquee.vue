<template>
  <section
    v-reveal="{ variant: 'fade-up', distance: 24 }"
    class="tech-marquee-section relative py-10 sm:py-14 overflow-hidden select-none"
    aria-label="Core Technical Competencies & Technologies"
  >
    <!-- Top & bottom ambient hairline divider beams -->
    <div class="marquee-divider marquee-divider--top" aria-hidden="true"></div>
    <div class="marquee-divider marquee-divider--bottom" aria-hidden="true"></div>

    <!-- Soft ambient center glow behind the 3D ribbon -->
    <div class="marquee-glow pointer-events-none" aria-hidden="true"></div>

    <!-- 3D Perspective Stage -->
    <div class="marquee-stage">
      <div class="marquee-ribbon" role="region" aria-label="Scrolling skills ribbon">
        
        <!-- Left & Right smooth vignette fade masks -->
        <div class="marquee-vignette marquee-vignette--left" aria-hidden="true"></div>
        <div class="marquee-vignette marquee-vignette--right" aria-hidden="true"></div>

        <!-- Infinite Scrolling Track (Duplicated for a 100% seamless mathematical loop) -->
        <div class="marquee-track" ref="trackRef">
          
          <!-- Primary Track -->
          <div class="marquee-group flex items-center gap-4 sm:gap-6 shrink-0">
            <div
              v-for="tech in technologies"
              :key="'primary-' + tech.name"
              class="marquee-card group"
              :style="{
                '--brand-color': tech.color,
                '--brand-glow': tech.glow,
              }"
            >
              <!-- Glassmorphic Card Surface -->
              <div class="marquee-card__surface">
                <!-- Inner glare sheen on top edge -->
                <div class="marquee-card__glare" aria-hidden="true"></div>

                <!-- Icon Container with floating 3D elevate -->
                <div class="marquee-card__icon-box" :style="{ color: tech.color }">
                  <div class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                    <svg
                      v-if="tech.svgPath"
                      :viewBox="tech.viewBox || '0 0 24 24'"
                      class="w-full h-full fill-current"
                      aria-hidden="true"
                    >
                      <path :d="tech.svgPath" />
                    </svg>
                    <!-- Multi-path / complex SVGs -->
                    <component
                      v-else-if="tech.customSvg"
                      :is="tech.customSvg"
                      class="w-full h-full"
                    />
                  </div>
                </div>

                <!-- Skill Meta -->
                <div class="flex flex-col text-left">
                  <span class="marquee-card__title">
                    {{ tech.name }}
                  </span>
                  <span class="marquee-card__category">
                    {{ tech.category }}
                  </span>
                </div>

                <!-- Ambient corner pulse indicator -->
                <div
                  class="marquee-card__dot"
                  :style="{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>

          <!-- Clone Track (Exact duplicate for gapless infinite scroll) -->
          <div class="marquee-group flex items-center gap-4 sm:gap-6 shrink-0" aria-hidden="true">
            <div
              v-for="tech in technologies"
              :key="'clone-' + tech.name"
              class="marquee-card group"
              :style="{
                '--brand-color': tech.color,
                '--brand-glow': tech.glow,
              }"
            >
              <div class="marquee-card__surface">
                <div class="marquee-card__glare"></div>

                <div class="marquee-card__icon-box" :style="{ color: tech.color }">
                  <div class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                    <svg
                      v-if="tech.svgPath"
                      :viewBox="tech.viewBox || '0 0 24 24'"
                      class="w-full h-full fill-current"
                    >
                      <path :d="tech.svgPath" />
                    </svg>
                    <component
                      v-else-if="tech.customSvg"
                      :is="tech.customSvg"
                      class="w-full h-full"
                    />
                  </div>
                </div>

                <div class="flex flex-col text-left">
                  <span class="marquee-card__title">
                    {{ tech.name }}
                  </span>
                  <span class="marquee-card__category">
                    {{ tech.category }}
                  </span>
                </div>

                <div
                  class="marquee-card__dot"
                  :style="{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }"
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

// Custom SVGs for multi-colored brand logos
const VueSvg = () =>
  h('svg', { viewBox: '0 0 24 24', class: 'w-full h-full' }, [
    h('path', { d: 'M2 3h3.5L12 14 18.5 3H22L12 21 2 3z', fill: '#42B883' }),
    h('path', { d: 'M6.5 3h3.5L12 6.5 14 3h3.5L12 11.5 6.5 3z', fill: '#35495E' })
  ])

const ReactSvg = () =>
  h('svg', { viewBox: '-11.5 -10.23174 23 20.46348', class: 'w-full h-full', fill: 'none', stroke: '#61DAFB', strokeWidth: '1' }, [
    h('circle', { cx: '0', cy: '0', r: '2.05', fill: '#61DAFB', stroke: 'none' }),
    h('g', {}, [
      h('ellipse', { rx: '11', ry: '4.2' }),
      h('ellipse', { rx: '11', ry: '4.2', transform: 'rotate(60)' }),
      h('ellipse', { rx: '11', ry: '4.2', transform: 'rotate(120)' })
    ])
  ])

const MySqlSvg = () =>
  h('svg', { viewBox: '0 0 24 24', class: 'w-full h-full', fill: 'currentColor' }, [
    h('path', {
      d: 'M16.5 3.5c-2.4 0-4.3 1.2-5.5 3.1-1.3-.9-2.9-1.3-4.5-1.1C3.8 5.8 1.7 8.3 1.5 11c-.2 2.3.9 4.6 2.8 5.8l.2.1c.4.3.9.5 1.4.7-.1.4-.2.8-.2 1.2 0 1.5 1 2.7 2.4 2.7.9 0 1.7-.5 2.1-1.2.6.4 1.3.7 2.1.8l.5.1c3.5.5 6.7-1.7 7.6-5.1.7-2.6-.1-5.3-2.1-6.9.5-.4.8-1 .8-1.7 0-1.1-.9-2-2.2-2zm-1.8 13.8c-2.5 0-4.7-1.5-5.6-3.8-.2-.6-.8-.9-1.4-.7-.6.2-.9.8-.7 1.4 1.2 3.1 4.2 5.1 7.7 5.1 2.3 0 4.4-.9 6-2.5-.2-.1-.3-.2-.5-.3-1.6-1.1-3.5-1.8-5.5-1.8v2.6z',
      fill: '#00758F'
    }),
    h('path', {
      d: 'M18.8 6.4c-.6-.4-1.3-.6-2-.6-1 0-1.9.5-2.4 1.3.6.4 1.2.9 1.6 1.5.5-.4 1.2-.6 1.9-.6.4 0 .8.1 1.2.2.1-.6-.1-1.2-.5-1.8z',
      fill: '#F29111'
    })
  ])

const GitSvg = () =>
  h('svg', { viewBox: '0 0 24 24', class: 'w-full h-full', fill: 'currentColor' }, [
    h('path', {
      d: 'M21.62 10.95L13.06 2.4a2.29 2.29 0 0 0-3.24 0L7.96 4.27l3.05 3.05a2.72 2.72 0 0 1 3.44 3.45l2.94 2.94a2.71 2.71 0 0 1 2.23 3.65 2.72 2.72 0 0 1-3.66-2.24L13.1 12.2a2.72 2.72 0 0 1-3.6-3.32L6.47 5.86 2.4 9.93a2.29 2.29 0 0 0 0 3.24l8.56 8.56a2.29 2.29 0 0 0 3.24 0l7.42-7.42a2.29 2.29 0 0 0 0-3.36z'
    })
  ])

const ApiSvg = () =>
  h('svg', { viewBox: '0 0 24 24', class: 'w-full h-full', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
    h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2' }),
    h('line', { x1: '8', y1: '21', x2: '16', y2: '21' }),
    h('line', { x1: '12', y1: '17', x2: '12', y2: '21' }),
    h('path', { d: 'M7 8h2l1 4h1' }),
    h('path', { d: 'M14 8h3' }),
    h('path', { d: 'M15.5 8v4' })
  ])

const EcomSvg = () =>
  h('svg', { viewBox: '0 0 24 24', class: 'w-full h-full', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
    h('path', { d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }),
    h('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
    h('path', { d: 'M16 10a4 4 0 0 1-8 0' })
  ])

const AdsSvg = () =>
  h('svg', { viewBox: '0 0 24 24', class: 'w-full h-full', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
    h('path', { d: 'M3 11l18-5v12L3 14v-3z' }),
    h('path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' }),
    h('path', { d: 'M21 9v6' })
  ])

const technologies = [
  {
    name: 'Laravel',
    category: 'Backend Framework',
    color: '#FF2D20',
    glow: 'rgba(255, 45, 32, 0.35)',
    svgPath: 'M23.601 7.214a1.077 1.077 0 0 0-.5-.453l-8.03-3.628a1.096 1.096 0 0 0-.9 0L6.14 6.76a1.079 1.079 0 0 0-.5.453L.39 16.593a1.082 1.082 0 0 0 .151 1.157 1.08 1.08 0 0 0 1.025.434l7.98-1.597 4.148 5.753a1.08 1.08 0 0 0 1.547.234l8.369-6.08a1.082 1.082 0 0 0 .426-1.074l-.435-8.206zm-8.878-2.3 6.643 3-6.643 3.003-6.644-3.003 6.644-3zm-7.697 4.54 6.644 3.002-4.049 5.617-6.502 1.301 3.907-9.92zm9.155 12.012-3.83-5.312 6.644-3.003.35 6.602-3.164 1.713z',
  },
  {
    name: 'PHP',
    category: 'Core Language',
    color: '#777BB4',
    glow: 'rgba(119, 123, 180, 0.38)',
    svgPath: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-5.2 13.5l1.1-5.8h2.3c1.2 0 2 .2 2.4.7.4.5.5 1.1.3 1.9-.3 1.3-.9 2.2-1.9 2.7-.7.4-1.6.5-2.7.5H6.8zm7.5 0l1.1-5.8h2.3c1.2 0 2 .2 2.4.7.4.5.5 1.1.3 1.9-.3 1.3-.9 2.2-1.9 2.7-.7.4-1.6.5-2.7.5h-1.5z',
  },
  {
    name: 'Vue.js',
    category: 'Reactive Frontend',
    color: '#42B883',
    glow: 'rgba(66, 184, 131, 0.38)',
    customSvg: VueSvg,
  },
  {
    name: 'React',
    category: 'Component UI',
    color: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.38)',
    customSvg: ReactSvg,
  },
  {
    name: 'Tailwind CSS',
    category: 'Modern Styling',
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.38)',
    svgPath: 'M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z',
  },
  {
    name: 'JavaScript',
    category: 'Core Ecosystem',
    color: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.32)',
    svgPath: 'M3 3h18v18H3V3zm13.725 14.475c1.05 0 1.9-.325 2.55-.975.65-.65.975-1.525.975-2.625 0-1.05-.3-1.875-.9-2.475-.6-.6-1.5-1.05-2.7-1.35l-.75-.2c-.65-.175-1.125-.4-1.425-.675-.3-.275-.45-.625-.45-1.05 0-.45.175-.825.525-1.125.35-.3.8-.45 1.35-.45.5 0 .925.125 1.275.375.35.25.6.625.75 1.125l1.9-.8c-.3-.75-.8-1.35-1.5-1.8-.7-.45-1.5-.675-2.425-.675-1.05 0-1.925.325-2.625.975-.7.65-1.05 1.5-1.05 2.55 0 .95.3 1.725.9 2.325.6.6 1.475 1.05 2.625 1.35l.75.2c.75.2 1.3.45 1.65.75.35.3.525.7.525 1.2 0 .5-.2.925-.6 1.275-.4.35-.95.525-1.65.525-.75 0-1.375-.225-1.875-.675-.5-.45-.825-1.075-.975-1.875l-1.9.8c.25 1.1.775 1.975 1.575 2.625.8.65 1.825.975 3.075.975zm-6.9 0c.55 0 1-.1 1.35-.3.35-.2.625-.5.825-.9.2-.4.3-.925.3-1.575V8.5h-2.1v6.2c0 .5-.1.85-.3 1.05-.2.2-.5.3-.9.3-.3 0-.55-.05-.75-.15s-.375-.25-.525-.45l-1.35 1.35c.4.6.9 1.025 1.5 1.275.6.25 1.25.375 1.95.375z',
  },
  {
    name: 'MySQL',
    category: 'Relational DB',
    color: '#00758F',
    glow: 'rgba(0, 117, 143, 0.38)',
    customSvg: MySqlSvg,
  },
  {
    name: 'RESTful APIs',
    category: 'Architecture',
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.38)',
    customSvg: ApiSvg,
  },
  {
    name: 'E-Commerce',
    category: 'Platform & Cart',
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.38)',
    customSvg: EcomSvg,
  },
  {
    name: 'Media Buying & Ads',
    category: 'Growth & ROI',
    color: '#F43F5E',
    glow: 'rgba(244, 63, 94, 0.38)',
    customSvg: AdsSvg,
  },
  {
    name: 'Git & GitHub',
    category: 'VCS & CI/CD',
    color: '#F05032',
    glow: 'rgba(240, 80, 50, 0.38)',
    customSvg: GitSvg,
  },
  {
    name: 'Postman',
    category: 'API Testing & Docs',
    color: '#FF6C37',
    glow: 'rgba(255, 108, 55, 0.38)',
    svgPath: 'M13.52 9.38a3.14 3.14 0 0 0-2.45 1.18 3.15 3.15 0 0 0-4.39.01 3.14 3.14 0 0 0-2.44-1.19c-1.74 0-3.15 1.41-3.15 3.15a3.14 3.14 0 0 0 1.23 2.49l-.02.13a3.15 3.15 0 0 0 3.15 3.15 3.14 3.14 0 0 0 2.48-1.22 3.15 3.15 0 0 0 4.38 0 3.14 3.14 0 0 0 2.48 1.22 3.15 3.15 0 0 0 3.15-3.15c0-.05-.01-.09-.02-.14a3.14 3.14 0 0 0 1.23-2.48c0-1.74-1.41-3.15-3.15-3.15zm-8.8 6.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm5.55-1.35a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm5.55 1.35a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  },
]
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   3D PERSPECTIVE STAGE & SEAMLESS INFINITE MARQUEE
───────────────────────────────────────────────────────────── */
.tech-marquee-section {
  isolation: isolate;
  contain: layout style paint;
}

/* Hairline gradient accent dividers */
.marquee-divider {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  pointer-events: none;
  z-index: 5;
}

.marquee-divider--top {
  top: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.22) 20%, rgba(34, 211, 238, 0.35) 50%, rgba(16, 185, 129, 0.22) 80%, transparent 100%);
}

.marquee-divider--bottom {
  bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.15) 25%, rgba(59, 130, 246, 0.25) 50%, rgba(168, 85, 247, 0.18) 75%, transparent 100%);
}

/* Ambient radial glow beam */
.marquee-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(72rem, 90vw);
  height: 10rem;
  background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 75%);
  filter: blur(40px);
  z-index: 0;
}

.dark .marquee-glow {
  background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.14) 0%, rgba(34, 211, 238, 0.07) 40%, transparent 75%);
}

/* 3D Stage Container */
.marquee-stage {
  position: relative;
  width: 100%;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  z-index: 2;
}

/* Ribbon: 3D subtle isometric tilt for dimension */
.marquee-ribbon {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transform: rotateX(8deg) rotateZ(-0.8deg) translateZ(0);
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (hover: hover) {
  .marquee-ribbon:hover {
    transform: rotateX(4deg) rotateZ(0deg) translateZ(10px);
  }
}

/* Vignette edge fades (masking left & right) */
.marquee-vignette {
  position: absolute;
  top: -20px;
  bottom: -20px;
  width: clamp(3rem, 10vw, 8rem);
  z-index: 10;
  pointer-events: none;
}

.marquee-vignette--left {
  left: 0;
  background: linear-gradient(90deg, var(--bg-color) 0%, rgba(248, 250, 252, 0) 100%);
}

.dark .marquee-vignette--left {
  background: linear-gradient(90deg, var(--bg-color) 0%, rgba(2, 6, 23, 0) 100%);
}

.marquee-vignette--right {
  right: 0;
  background: linear-gradient(270deg, var(--bg-color) 0%, rgba(248, 250, 252, 0) 100%);
}

.dark .marquee-vignette--right {
  background: linear-gradient(270deg, var(--bg-color) 0%, rgba(2, 6, 23, 0) 100%);
}

/* Scrolling Track (Flex wrapper translating -50%) */
.marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee-infinite 36s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-infinite {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

/* ─────────────────────────────────────────────────────────────
   3D FLOATING GLASSMORPHIC SKILL CARD
───────────────────────────────────────────────────────────── */
.marquee-card {
  position: relative;
  flex-shrink: 0;
  transform-style: preserve-3d;
  cursor: pointer;
  padding: 0.25rem;
}

.marquee-card__surface {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1.15rem;
  min-width: 175px;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.25);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 12px 28px -8px rgba(15, 23, 42, 0.08),
    0 4px 10px -2px rgba(15, 23, 42, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateZ(0);
  transform-style: preserve-3d;
  transition:
    transform 340ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 340ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 340ms ease,
    background-color 340ms ease;
  overflow: hidden;
}

.dark .marquee-card__surface {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 14px 32px -8px rgba(0, 0, 0, 0.45),
    0 4px 12px -2px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Inner glare reflection */
.marquee-card__glare {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, transparent 100%);
  pointer-events: none;
  opacity: 0.6;
  border-radius: 1.25rem 1.25rem 0 0;
}

.dark .marquee-card__glare {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%);
}

/* Icon Box */
.marquee-card__icon-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateZ(8px);
  transition:
    transform 340ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 340ms ease,
    background-color 340ms ease;
  flex-shrink: 0;
}

.dark .marquee-card__icon-box {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
}

/* Typography */
.marquee-card__title {
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--text-color);
  line-height: 1.2;
  transition: color 240ms ease;
  transform: translateZ(4px);
}

.marquee-card__category {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #64748b;
  line-height: 1.3;
  margin-top: 0.15rem;
  transform: translateZ(2px);
}

.dark .marquee-card__category {
  color: #94a3b8;
}

/* Status indicator dot */
.marquee-card__dot {
  position: absolute;
  top: 0.75rem;
  right: 0.85rem;
  width: 0.38rem;
  height: 0.38rem;
  border-radius: 999px;
  opacity: 0.45;
  transition: opacity 300ms ease, transform 300ms ease;
}

/* ─────────────────────────────────────────────────────────────
   HOVER 3D LIFT & NEON BRAND GLOW
───────────────────────────────────────────────────────────── */
@media (hover: hover) {
  .marquee-card:hover .marquee-card__surface {
    transform: translateZ(24px) translateY(-5px) scale(1.05);
    border-color: var(--brand-color);
    box-shadow:
      0 20px 36px -8px rgba(0, 0, 0, 0.18),
      0 0 24px -2px var(--brand-glow),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }

  .dark .marquee-card:hover .marquee-card__surface {
    background: rgba(15, 23, 42, 0.9);
    border-color: var(--brand-color);
    box-shadow:
      0 24px 44px -8px rgba(0, 0, 0, 0.6),
      0 0 28px -2px var(--brand-glow),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .marquee-card:hover .marquee-card__icon-box {
    transform: translateZ(16px) scale(1.08);
    box-shadow: 0 8px 20px -4px var(--brand-glow);
  }

  .marquee-card:hover .marquee-card__title {
    color: var(--brand-color);
  }

  .marquee-card:hover .marquee-card__dot {
    opacity: 1;
    transform: scale(1.4);
  }
}

/* ─────────────────────────────────────────────────────────────
   RESPONSIVE & ACCESSIBILITY ADAPTATIONS
───────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .marquee-ribbon {
    transform: rotateX(4deg) rotateZ(0deg);
  }

  .marquee-track {
    animation-duration: 26s;
  }

  .marquee-card__surface {
    padding: 0.6rem 0.95rem;
    min-width: 152px;
    gap: 0.65rem;
    border-radius: 1rem;
  }

  .marquee-card__icon-box {
    width: 2.35rem;
    height: 2.35rem;
    border-radius: 0.7rem;
  }

  .marquee-card__title {
    font-size: 0.82rem;
  }

  .marquee-card__category {
    font-size: 0.62rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    overflow-x: auto;
    scroll-behavior: auto;
  }

  .marquee-ribbon {
    transform: none;
  }
}
</style>
