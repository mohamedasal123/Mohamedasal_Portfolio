<template>
  <section v-reveal id="about" class="relative overflow-hidden py-24 sm:py-32" aria-labelledby="about-heading">

    <!-- Glass veil — keeps the TechBackground canvas visible -->
    <div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-[2px] pointer-events-none z-0"></div>

    <!-- Separator lines -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>
    <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>

    <!-- Ambient orbs -->
    <div class="absolute top-1/4 -left-24 w-[34rem] h-[34rem] rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/8 to-transparent blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute bottom-1/4 -right-24 w-[34rem] h-[34rem] rounded-full bg-gradient-to-bl from-emerald-500/10 via-cyan-500/6 to-transparent blur-[140px] pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- ═══════════════ Section Header ═══════════════ -->
      <header class="mb-14 sm:mb-20 text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-3 mb-3">
          <span class="h-px w-8 bg-blue-500/60"></span>
          <span class="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">About Me</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 id="about-heading" class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-2xl">
            Code that ships,
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-300">campaigns that sell</span>.
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-md font-light">
            Full-stack engineer building Laravel &amp; Vue platforms — and the high-ROAS ad funnels that bring them customers.
          </p>
        </div>
      </header>

      <!-- ═══════════════ Top: Terminal + Spatial Profile ═══════════════ -->
      <div class="about-stage grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">

        <!-- ───────── LEFT (7 cols): 3D macOS Code Terminal ───────── -->
        <div class="lg:col-span-7 flex">
          <div class="terminal-rest w-full flex">
            <div
              id="about-terminal"
              v-tilt="{ strength: 5 }"
              class="terminal-card relative w-full flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-slate-950/85 text-slate-100"
            >
              <!-- frosted layer + glare -->
              <div class="absolute inset-0 backdrop-blur-2xl pointer-events-none -z-10"></div>
              <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none"></div>
              <div class="terminal-border absolute inset-0 rounded-3xl pointer-events-none"></div>

              <!-- Title bar -->
              <div class="relative flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-white/[0.07] bg-slate-900/80">
                <div class="flex items-center gap-2 shrink-0" aria-hidden="true">
                  <span class="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.75)]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.75)]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.75)]"></span>
                </div>

                <div class="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/70 border border-white/[0.08] font-mono text-xs text-slate-300 min-w-0">
                  <span class="px-1.5 rounded bg-indigo-500/20 text-indigo-300 font-bold text-[10px] leading-4">PHP</span>
                  <span class="truncate">MohamedIbrahimAsal.php</span>
                </div>

                <button
                  id="about-copy-code"
                  type="button"
                  @click="copyCode"
                  :aria-label="copied ? 'Code copied' : 'Copy code'"
                  class="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono text-xs font-semibold transition-all duration-300 cursor-pointer"
                  :class="copied
                    ? 'bg-emerald-500/15 border-emerald-400/50 text-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.35)]'
                    : 'bg-slate-800/80 border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:shadow-[0_0_14px_rgba(34,211,238,0.25)]'"
                >
                  <svg v-if="!copied" class="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{{ copied ? 'Copied!' : 'Copy Code' }}</span>
                </button>
              </div>

              <!-- Code body -->
              <div class="terminal-scroll relative flex-1 overflow-x-auto px-3 sm:px-5 py-5 font-mono text-[12.5px] sm:text-[13.5px] leading-[1.75]">
                <div
                  v-for="(line, i) in codeLines"
                  :key="i"
                  class="code-line flex whitespace-pre rounded-md"
                  :style="{ '--line-delay': `${i * 45}ms` }"
                >
                  <span class="w-8 shrink-0 pr-4 text-right text-slate-600 select-none tabular-nums">{{ i + 1 }}</span>
                  <span>
                    <span v-for="(tok, j) in line" :key="j" :class="tokenClass[tok[0]]">{{ tok[1] }}</span>
                    <span v-if="i === codeLines.length - 1" class="caret ml-1 inline-block w-2 h-4 align-middle bg-cyan-400/80"></span>
                  </span>
                </div>
              </div>

              <!-- Status bar -->
              <div class="relative flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 border-t border-white/[0.07] bg-slate-900/80 font-mono text-[11px] sm:text-xs">
                <div class="flex items-center gap-2 text-slate-400">
                  <svg class="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="9" r="3" /><path d="M6 9v6M18 12c0 3-3 3-6 3H9" />
                  </svg>
                  <span>git:(<span class="text-cyan-400">main</span>) <span class="text-emerald-400">clean</span></span>
                </div>
                <div class="flex items-center gap-1.5 text-slate-400">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"></span>
                  <span>0 Errors • <span class="text-emerald-400">100% Production Ready</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ───────── RIGHT (5 cols): 3D Spatial Profile Card ───────── -->
        <div class="lg:col-span-5 flex justify-center">
          <div
            id="about-profile-card"
            v-tilt="{ strength: 8 }"
            class="profile-card relative w-full max-w-md lg:max-w-none rounded-3xl p-3 sm:p-4"
          >
            <!-- Background glass layer (kept separate so backdrop-filter doesn't flatten the 3D badges) -->
            <div class="absolute inset-0 rounded-3xl bg-slate-950/80 backdrop-blur-2xl pointer-events-none"></div>
            <div class="profile-border absolute inset-0 rounded-3xl pointer-events-none"></div>
            <div class="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-cyan-500/25 via-transparent to-emerald-500/25 blur-2xl pointer-events-none -z-10"></div>

            <!-- Portrait -->
            <div class="relative h-[26rem] sm:h-[30rem] lg:h-full lg:min-h-[30rem] rounded-2xl overflow-hidden bg-slate-900">
              <img
                v-if="!imageFailed"
                :src="photoSrc"
                @error="onImageError"
                alt="Mohamed Ibrahim Asal — Full-Stack Developer"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover object-[50%_20%] transition-transform duration-700 hover:scale-105"
              />
              <div v-else class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                <span class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-emerald-400">MN</span>
              </div>

              <!-- Status pill -->
              <!-- <div class="absolute top-4 left-4 right-4 flex justify-start">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-400/40 text-[11px] sm:text-xs font-semibold text-emerald-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)]">
                  <span class="relative flex h-2.5 w-2.5">
                    <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                    <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>🟢 Open for Opportunities &amp; Freelance</span>
                </div>
              </div> -->

              <!-- Name plate -->
              <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-400 mb-1">Full-Stack Developer &amp; Media Buyer</p>
                <p class="text-2xl font-extrabold text-white leading-tight">Mohamed Ibrahim Asal</p>
                <p class="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                  <svg class="w-3.5 h-3.5 text-rose-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                  Mansoura, Egypt • Remote worldwide
                </p>
              </div>
            </div>

            <!-- Floating badge 1: Laravel neon (translateZ 50px) -->
            <div class="float-badge badge-laravel absolute -top-5 -right-3 sm:-right-6" aria-hidden="true">
              <div class="flex items-center gap-2.5 pl-2 pr-3.5 py-2 rounded-2xl bg-slate-950/90 border border-rose-500/50 shadow-[0_12px_32px_-6px_rgba(244,63,94,0.55)]">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 p-px shadow-[0_0_16px_rgba(244,63,94,0.7)]">
                  <div class="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke-linejoin="round">
                      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" stroke="#fb7185" stroke-width="1.6" />
                      <path d="M3 7l9 5 9-5M12 12v10" stroke="#fb7185" stroke-width="1.6" />
                      <path d="M12 2l9 5-9 5-9-5 9-5z" fill="#f43f5e" fill-opacity=".35" />
                    </svg>
                  </div>
                </div>
                <div class="leading-tight">
                  <p class="text-xs font-extrabold text-white">Laravel 12</p>
                  <p class="text-[10px] font-semibold uppercase tracking-wider text-rose-400">Backend Core</p>
                </div>
              </div>
            </div>

            <!-- Floating badge 2: Vue emerald crystal (translateZ 55px) -->
            <div class="float-badge badge-vue absolute top-[44%] -left-3 sm:-left-8" aria-hidden="true">
              <div class="flex items-center gap-2.5 pl-2 pr-3.5 py-2 rounded-2xl bg-slate-950/90 border border-emerald-400/50 shadow-[0_12px_32px_-6px_rgba(16,185,129,0.55)]">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 p-px shadow-[0_0_16px_rgba(16,185,129,0.7)]">
                  <div class="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M2 3.5h4L12 14l6-10.5h4L12 21 2 3.5z" fill="#34d399" />
                      <path d="M6.5 3.5h3.2L12 7.6l2.3-4.1h3.2L12 13 6.5 3.5z" fill="#0f766e" />
                      <path d="M2 3.5h4L12 14V21L2 3.5z" fill="#6ee7b7" fill-opacity=".45" />
                    </svg>
                  </div>
                </div>
                <div class="leading-tight">
                  <p class="text-xs font-extrabold text-white">Vue.js 3</p>
                  <p class="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Reactive UI</p>
                </div>
              </div>
            </div>

            <!-- Floating badge 3: Media Buying & Growth chart (translateZ 40px) -->
            <div class="float-badge badge-growth absolute -bottom-6 -right-3 sm:-right-6" aria-hidden="true">
              <div class="flex items-center gap-3 pl-2 pr-3.5 py-2 rounded-2xl bg-slate-950/90 border border-amber-400/50 shadow-[0_12px_32px_-6px_rgba(245,158,11,0.5)]">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 p-px shadow-[0_0_16px_rgba(245,158,11,0.6)]">
                  <div class="w-full h-full rounded-[11px] bg-slate-950 flex items-end justify-center gap-[3px] pb-2">
                    <span class="w-1 h-2 rounded-sm bg-amber-500/70"></span>
                    <span class="w-1 h-3 rounded-sm bg-amber-400/80"></span>
                    <span class="w-1 h-4 rounded-sm bg-amber-300"></span>
                    <span class="w-1 h-5 rounded-sm bg-gradient-to-t from-amber-300 to-rose-400"></span>
                  </div>
                </div>
                <div class="leading-tight">
                  <p class="text-xs font-extrabold text-white">Media Buying</p>
                  <p class="text-[10px] font-semibold uppercase tracking-wider text-amber-400">ROAS ▲ 3.8x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════ Bottom: 4 Bento Metrics ═══════════════ -->
      <div ref="metricsRef" class="metrics-stage mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <article
          v-for="(m, i) in metrics"
          :key="m.id"
          :id="`about-metric-${m.id}`"
          class="metric-card group relative overflow-hidden rounded-2xl p-6 bg-white/70 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/80 dark:border-white/10"
          :style="{ '--accent': m.accent }"
        >
          <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" :style="{ background: m.accent }"></div>

          <div class="relative flex items-center justify-between mb-5">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" :class="m.iconClass">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path v-for="(d, k) in m.paths" :key="k" :d="d" />
              </svg>
            </div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border" :class="m.iconClass">{{ m.tag }}</span>
          </div>

          <p class="relative font-extrabold tracking-tight text-slate-900 dark:text-white mb-1" :class="m.counter ? 'text-4xl tabular-nums' : 'text-2xl'">
            {{ m.counter ? `${counts[i]}+` : m.value }}
          </p>
          <p class="relative text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">{{ m.label }}</p>
          <p class="relative text-xs leading-relaxed font-light text-slate-600 dark:text-slate-400">{{ m.desc }}</p>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';

/* ───────────────── Code terminal (single source for render + copy) ───────────────── */
const tokenClass = {
  tag: 'text-rose-400 font-semibold',
  kw: 'text-purple-400',
  cls: 'text-amber-300 font-semibold',
  type: 'text-cyan-300',
  var: 'text-sky-300',
  str: 'text-emerald-400',
  fn: 'text-yellow-200',
  cmt: 'text-slate-500 italic',
  pun: 'text-slate-400',
  txt: 'text-slate-200',
};

const codeLines = [
  [['tag', '<?php']],
  [],
  [['kw', 'namespace '], ['type', 'App\\Portfolio'], ['pun', ';']],
  [],
  [['kw', 'use '], ['type', 'App\\Contracts\\Portfolio'], ['pun', ';']],
  [],
  [['cmt', '/** Mohamed Ibrahim Asal — Full-Stack Developer & Media Buyer */']],
  [['kw', 'class '], ['cls', 'DeveloperProfile'], ['kw', ' extends '], ['type', 'Portfolio']],
  [['pun', '{']],
  [['kw', '    public string '], ['var', '$location'], ['pun', ' = '], ['str', "'Mansoura, Egypt'"], ['pun', ';']],
  [],
  [['kw', '    public array '], ['var', '$stack'], ['pun', ' = ['], ['str', "'Laravel 12'"], ['pun', ', '], ['str', "'Vue 3'"], ['pun', ', '], ['str', "'REST APIs'"], ['pun', '];']],
  [],
  [['kw', '    public array '], ['var', '$specialties'], ['pun', ' = [']],
  [['str', "        'E-Commerce Platforms'"], ['pun', ',']],
  [['str', "        'High-ROAS Media Buying'"], ['pun', ',']],
  [['pun', '    ];']],
  [],
  [['kw', '    public function '], ['fn', 'deliverResults'], ['pun', '(): '], ['type', 'string']],
  [['pun', '    {']],
  [['kw', '        return '], ['var', '$this'], ['pun', '->'], ['var', 'productionReadyCode'], ['pun', ';']],
  [['pun', '    }']],
  [['pun', '}']],
];

const rawCode = codeLines.map((line) => line.map((t) => t[1]).join('')).join('\n');

const copied = ref(false);
let copyTimer = null;

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(rawCode);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = rawCode;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  copied.value = true;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copied.value = false), 2000);
};

/* ───────────────── Portrait with fallback chain ───────────────── */
const photoSources = ['/mohamedasalabout.png', '/Portfolio.jpg'];
const photoIndex = ref(0);
const photoSrc = ref(photoSources[0]);
const imageFailed = ref(false);

const onImageError = () => {
  photoIndex.value += 1;
  if (photoIndex.value < photoSources.length) {
    photoSrc.value = photoSources[photoIndex.value];
  } else {
    imageFailed.value = true;
  }
};

/* ───────────────── Bento metrics ───────────────── */
const metrics = [
  {
    id: 'internships',
    counter: 3,
    label: 'Internships',
    desc: 'Creativo Company, ITI Port Said, and ITIDA Cairo — real-world engineering tracks.',
    tag: 'Experience',
    accent: 'rgba(59,130,246,0.55)',
    iconClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
    paths: ['M22 10 12 5 2 10l10 5 10-5z', 'M6 12v5c3 2 9 2 12 0v-5'],
  },
  {
    id: 'deployed',
    counter: 15,
    label: 'Deployed Apps',
    desc: 'Live production platforms, including Liven Factory.',
    tag: 'Production',
    accent: 'rgba(16,185,129,0.55)',
    iconClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
    paths: ['M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z', 'M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z', 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0', 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'],
  },
  {
    id: 'ecommerce',
    counter: null,
    value: 'E-Commerce & Ads',
    label: 'E-Commerce & Media Buying',
    desc: 'High-ROAS scaling, custom stores, payment pipelines, and server-side ad tracking.',
    tag: 'Revenue',
    accent: 'rgba(244,63,94,0.5)',
    iconClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25',
    paths: ['M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z', 'M3 6h18', 'M16 10a4 4 0 0 1-8 0'],
  },
  {
    id: 'remote',
    counter: null,
    value: 'Remote Ready',
    label: 'Mansoura, Egypt',
    desc: 'Available globally — async-friendly, Git-driven collaboration across time zones.',
    tag: 'Worldwide',
    accent: 'rgba(168,85,247,0.5)',
    iconClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
    paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
  },
];

const counts = reactive(metrics.map(() => 0));
const metricsRef = ref(null);
let observer = null;
let rafId = null;

const animateCounts = () => {
  const start = performance.now();
  const duration = 1300;
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    metrics.forEach((m, i) => {
      if (m.counter) counts[i] = Math.round(m.counter * eased);
    });
    if (p < 1) rafId = requestAnimationFrame(tick);
  };
  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    metrics.forEach((m, i) => { if (m.counter) counts[i] = m.counter; });
    return;
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      animateCounts();
      observer.disconnect();
    },
    { threshold: 0.3 },
  );
  if (metricsRef.value) observer.observe(metricsRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
  if (rafId) cancelAnimationFrame(rafId);
  clearTimeout(copyTimer);
});
</script>

<style scoped>
/* ───────────── 3D stage ───────────── */
.about-stage,
.metrics-stage {
  perspective: 1200px;
}

/* Resting perspective tilt of the terminal (desktop only); v-tilt adds mouse tilt on the inner card */
.terminal-rest {
  transform-style: preserve-3d;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}
@media (min-width: 1024px) {
  .terminal-rest {
    transform: rotateY(7deg) rotateX(2deg);
  }
  .terminal-rest:hover {
    transform: rotateY(2deg) rotateX(0deg);
  }
}

.terminal-card {
  box-shadow:
    0 30px 70px -20px rgba(2, 6, 23, 0.75),
    0 0 0 1px rgba(255, 255, 255, 0.03),
    0 0 40px -12px rgba(34, 211, 238, 0.25);
}

.terminal-border {
  padding: 1px;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.5), transparent 35%, transparent 65%, rgba(16, 185, 129, 0.45));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* Code line entrance + hover highlight */
.code-line {
  animation: lineIn 500ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--line-delay);
}
.code-line:hover {
  background: rgba(34, 211, 238, 0.06);
}
@keyframes lineIn {
  from { opacity: 0; transform: translateX(-8px); }
  to { opacity: 1; transform: translateX(0); }
}

.caret {
  animation: caretBlink 1.05s steps(1) infinite;
}
@keyframes caretBlink {
  50% { opacity: 0; }
}

.terminal-scroll::-webkit-scrollbar { height: 6px; }
.terminal-scroll::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.25); border-radius: 999px; }
.terminal-scroll::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.5); }

/* ───────────── Spatial profile card ───────────── */
.profile-card {
  /* No backdrop-filter / overflow here: they would flatten preserve-3d and kill translateZ */
  transform-style: preserve-3d;
  box-shadow:
    0 35px 80px -25px rgba(2, 6, 23, 0.8),
    0 0 50px -15px rgba(34, 211, 238, 0.35);
}

.profile-border {
  padding: 1.5px;
  background: linear-gradient(140deg, rgba(34, 211, 238, 0.85), rgba(16, 185, 129, 0.2) 40%, rgba(59, 130, 246, 0.2) 60%, rgba(16, 185, 129, 0.85));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.45));
}

/* Floating badges — elevated in Z and gently bobbing */
.float-badge {
  z-index: 5;
  transform-style: preserve-3d;
  will-change: transform;
}
.badge-laravel { --z: 50px; animation: badgeFloat 5.5s ease-in-out infinite; }
.badge-vue { --z: 55px; animation: badgeFloat 6.5s ease-in-out infinite 0.8s; }
.badge-growth { --z: 40px; animation: badgeFloat 6s ease-in-out infinite 1.6s; }

@keyframes badgeFloat {
  0%, 100% { transform: translateZ(var(--z)) translateY(0); }
  50% { transform: translateZ(var(--z)) translateY(-8px); }
}

/* ───────────── Bento metrics ───────────── */
.metric-card {
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px -15px rgba(15, 23, 42, 0.18);
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease, border-color 400ms ease;
}
.metric-card:hover {
  transform: translateZ(30px) translateY(-6px);
  border-color: var(--accent);
  box-shadow: 0 24px 50px -18px rgba(15, 23, 42, 0.3), 0 0 30px -8px var(--accent);
}
:global(.dark) .metric-card {
  box-shadow: 0 14px 40px -18px rgba(0, 0, 0, 0.7);
}
:global(.dark) .metric-card:hover {
  box-shadow: 0 28px 60px -18px rgba(0, 0, 0, 0.8), 0 0 32px -6px var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .terminal-rest,
  .terminal-rest:hover { transform: none; }
  .code-line,
  .caret,
  .float-badge { animation: none; }
  .badge-laravel { transform: translateZ(50px); }
  .badge-vue { transform: translateZ(55px); }
  .badge-growth { transform: translateZ(40px); }
  .metric-card:hover { transform: none; }
}
</style>