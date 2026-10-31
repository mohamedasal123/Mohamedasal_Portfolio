<template>
  <section v-reveal id="skills" class="relative overflow-hidden py-24 sm:py-32" aria-labelledby="skills-heading">

    <!-- Section-level glass veil — lets the background canvas show through -->
    <div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-[2px] pointer-events-none z-0"></div>

    <!-- Separator lines top & bottom -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>
    <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0"></div>

    <!-- Ambient glowing light orbs -->
    <div class="absolute top-1/3 -left-28 w-[38rem] h-[38rem] rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/8 to-transparent blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute bottom-1/3 -right-28 w-[38rem] h-[38rem] rounded-full bg-gradient-to-bl from-emerald-500/10 via-purple-600/8 to-transparent blur-[140px] pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="mb-16 sm:mb-20 text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-3 mb-3">
          <span class="h-px w-8 bg-blue-500/60"></span>
          <span class="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">
            Arsenal &amp; Journey
          </span>
        </div>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 id="skills-heading" class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-2xl">
            <span class="line-mask block overflow-hidden">
              <span class="line-inner block">Battle-tested skills,</span>
            </span>
            <span class="line-mask block overflow-hidden">
              <span class="line-inner block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-300">
                real-world execution.
              </span>
            </span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-md font-light">
            Scalable backend engineering, reactive interfaces, and revenue-focused growth systems backed by verified hands-on milestones.
          </p>
        </div>
      </div>

      <!-- 2-Column Grid (lg:grid-cols-12, perspective: 1200px) -->
      <div class="skills-stage grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

        <!-- ══════════════════════════════════════════════════════════════════
             LEFT COLUMN (6 cols): 3D Skills Arsenal Bento Cards
        ══════════════════════════════════════════════════════════════════ -->
        <div class="lg:col-span-6 flex flex-col gap-6" data-aos="fade-right">
          
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-500 dark:text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
                </svg>
              </span>
              <span>Technical Arsenal</span>
            </h3>
          </div>

          <!-- ── Card 1: Backend Architecture & Core ── -->
          <div
            v-tilt="{ strength: 5 }"
            class="frosted-glass-card group relative p-6 sm:p-7 rounded-3xl transition-all duration-400"
            style="--hover-glow: rgba(244, 63, 94, 0.35); --hover-border: rgba(244, 63, 94, 0.45);"
          >
            <!-- Card top highlight layer -->
            <div class="card-inner-highlight absolute inset-0 rounded-3xl pointer-events-none"></div>

            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5">
              <!-- Visual: Floating 3D Neon Laravel Cube & MySQL Cylinder -->
              <div class="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 flex items-center justify-center icon-breathing">
                <div class="absolute inset-0 rounded-full border border-rose-500/30 animate-[spin_16s_linear_infinite]"></div>
                <!-- Laravel 3D Cube Icon -->
                <div class="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 p-0.5 shadow-[0_0_20px_rgba(244,63,94,0.45)]">
                  <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.66 0L0 6.64v10.72L11.66 24l11.66-6.64V6.64L11.66 0zm-1.04 2.45v5.82L4.99 5.34l5.63-2.89zm2.08 0l5.63 2.89-5.63 2.93V2.45zM3.95 7.15l6.67 3.47v6.08l-6.67-3.48V7.15zm8.75 9.55v-6.08l6.67-3.47v6.07l-6.67 3.48z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Title & Focus -->
              <div class="flex-1">
                <h4 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  Backend Architecture &amp; APIs
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-light leading-relaxed">
                  High-throughput RESTful endpoints, relational schema design, Sanctum authentication, queue workers, and clean modular domain models built for scale.
                </p>
              </div>
            </div>

            <!-- Tech Tags / Pills with Dynamic Micro-Interactions -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-slate-200/60 dark:border-white/5">
              <span
                v-for="tag in backendTags"
                :key="tag"
                class="skill-pill skill-pill--rose px-3 py-1.5 rounded-xl text-xs font-mono font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- ── Card 2: Frontend Engineering & SPAs ── -->
          <div
            v-tilt="{ strength: 5 }"
            class="frosted-glass-card group relative p-6 sm:p-7 rounded-3xl transition-all duration-400"
            style="--hover-glow: rgba(16, 185, 129, 0.35); --hover-border: rgba(16, 185, 129, 0.45);"
          >
            <!-- Card top highlight layer -->
            <div class="card-inner-highlight absolute inset-0 rounded-3xl pointer-events-none"></div>

            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5">
              <!-- Visual: 3D Emerald Vue Crystal -->
              <div class="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 flex items-center justify-center icon-breathing-reverse">
                <div class="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_18s_linear_infinite_reverse]"></div>
                <!-- 3D Emerald Crystal Facet -->
                <div class="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(16,185,129,0.45)]">
                  <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                      <path d="M2 3.5h4L12 14l6-10.5h4L12 21 2 3.5z" fill="#34d399" />
                      <path d="M6.5 3.5h3.2L12 7.6l2.3-4.1h3.2L12 13 6.5 3.5z" fill="#0f766e" />
                      <path d="M2 3.5h4L12 14V21L2 3.5z" fill="#6ee7b7" fill-opacity=".45" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Title & Focus -->
              <div class="flex-1">
                <h4 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  Frontend Engineering &amp; SPAs
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-light leading-relaxed">
                  Single-page applications built with Vue 3 Composition API, centralized Pinia state management, Tailwind CSS v4 design systems, and responsive 3D micro-animations.
                </p>
              </div>
            </div>

            <!-- Tech Tags / Pills with Dynamic Micro-Interactions -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-slate-200/60 dark:border-white/5">
              <span
                v-for="tag in frontendTags"
                :key="tag"
                class="skill-pill skill-pill--emerald px-3 py-1.5 rounded-xl text-xs font-mono font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- ── Card 3: E-Commerce & Performance Marketing ── -->
          <div
            v-tilt="{ strength: 5 }"
            class="frosted-glass-card group relative p-6 sm:p-7 rounded-3xl transition-all duration-400"
            style="--hover-glow: rgba(245, 158, 11, 0.35); --hover-border: rgba(245, 158, 11, 0.45);"
          >
            <!-- Card top highlight layer -->
            <div class="card-inner-highlight absolute inset-0 rounded-3xl pointer-events-none"></div>

            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5">
              <!-- Visual: 3D Growth Chart & Shopping Cart -->
              <div class="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 flex items-center justify-center icon-breathing">
                <div class="absolute inset-0 rounded-full border border-amber-500/30 animate-[spin_14s_linear_infinite]"></div>
                <!-- 3D Cart / Growth Container -->
                <div class="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 p-0.5 shadow-[0_0_20px_rgba(245,158,11,0.45)]">
                  <div class="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center p-2">
                    <svg class="w-5 h-5 text-amber-400 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="8" cy="21" r="1"/>
                      <circle cx="19" cy="21" r="1"/>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                    </svg>
                    <div class="flex items-end gap-1 h-2">
                      <span class="w-1 h-1 rounded-xs bg-amber-400/80"></span>
                      <span class="w-1 h-1.5 rounded-xs bg-amber-300"></span>
                      <span class="w-1 h-2 rounded-xs bg-emerald-400"></span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Title & Focus -->
              <div class="flex-1">
                <h4 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  E-Commerce &amp; Media Buying
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-light leading-relaxed">
                  Frictionless checkout pipelines, international payment gateway integrations (Stripe, PayMob), server-side Meta &amp; TikTok CAPI tracking, and targeted ad funnels.
                </p>
              </div>
            </div>

            <!-- Tech Tags / Pills with Dynamic Micro-Interactions -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-slate-200/60 dark:border-white/5">
              <span
                v-for="tag in growthTags"
                :key="tag"
                class="skill-pill skill-pill--amber px-3 py-1.5 rounded-xl text-xs font-mono font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>

        </div>

        <!-- ══════════════════════════════════════════════════════════════════
             RIGHT COLUMN (6 cols): Active Circuit Timeline
        ══════════════════════════════════════════════════════════════════ -->
        <div class="lg:col-span-6 flex flex-col" data-aos="fade-left">
          
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <span>Experience Timeline</span>
            </h3>
          </div>

          <!-- Vertical Timeline with Active Flowing Circuit Line -->
          <div class="relative pl-6 sm:pl-8 mt-6">
            
            <!-- Circuit Track (Static Base) -->
            <div class="circuit-track absolute top-3 bottom-6 left-2.5 sm:left-3.5 w-[2px] bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
              <!-- Continuously moving light beam flowing down the circuit -->
              <div class="circuit-pulse-beam"></div>
            </div>

            <!-- Milestones Stack -->
            <div class="space-y-8 sm:space-y-9">

              <div
                v-for="item in timelineItems"
                :key="item.id"
                class="timeline-entry relative group"
                :style="{ '--node-accent': item.accentColor, '--node-glow': item.glowColor }"
              >
                <!-- Pulsating Milestone Node with Radar Ripples -->
                <div class="timeline-node absolute -left-[23px] sm:-left-[27px] top-6 z-20 flex items-center justify-center">
                  <span
                    class="absolute w-5 h-5 rounded-full opacity-75 animate-ping"
                    :style="{ backgroundColor: item.accentColor }"
                  ></span>
                  <span
                    class="relative w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 shadow-[0_0_10px_var(--node-glow)] transition-transform duration-300 group-hover:scale-125"
                    :style="{ backgroundColor: item.accentColor }"
                  ></span>
                </div>

                <!-- High-tech Frosted Glass Card -->
                <div class="frosted-glass-card relative p-6 sm:p-7 rounded-3xl transition-all duration-400">
                  <!-- Inner top highlight -->
                  <div class="card-inner-highlight absolute inset-0 rounded-3xl pointer-events-none"></div>

                  <!-- Header: Badge + Period -->
                  <div class="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <!-- <span
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md border shadow-xs"
                      :class="item.badgeClass"
                    >
                      <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: item.accentColor }"></span>
                      {{ item.badge }}
                    </span> -->

                    <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-100/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                      {{ item.period }}
                    </span>
                  </div>

                  <!-- Title & Organization -->
                  <h4 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 dark:group-hover:text-cyan-300 transition-colors">
                    {{ item.title }}
                  </h4>

                  <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-1.5">
                    <svg class="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{{ item.organization }}</span>
                  </p>

                  <!-- Description -->
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mt-3">
                    {{ item.desc }}
                  </p>

                  <!-- Highlight Metric / Key Takeaway -->
                  <div v-if="item.highlight" class="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-2 text-xs font-mono">
                    <span class="text-cyan-500 dark:text-cyan-400 font-bold">Key Focus:</span>
                    <span class="text-slate-700 dark:text-slate-200">{{ item.highlight }}</span>
                  </div>
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
/* ── Backend Arsenal Data ── */
const backendTags = [
  'Laravel 12',
  'PHP 8.3',
  'RESTful APIs',
  'MySQL',
  'Sanctum Auth',
  'Eloquent ORM',
  'Database Indexing',
  'API Security',
];

/* ── Frontend Arsenal Data ── */
const frontendTags = [
  'Vue 3',
  'Pinia',
  'Tailwind CSS v4',
  'JavaScript ESNext',
  'Vite',
  'Composition API',
  'Responsive UX',
  'Micro-Animations',
];

/* ── Growth & E-Commerce Data ── */
const growthTags = [
  'Custom Storefronts',
  'Media Buying',
  'Meta/TikTok CAPI',
  'High ROAS',
  'Stripe / PayMob',
  'Funnel CRO',
  'Conversion Tracking',
  'A/B Testing',
];

/* ── 4 Timeline Milestones (Real Resume Data) ── */
const timelineItems = [
  {
    id: 'university',
    badge: 'University',
    badgeClass: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-500/30',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    title: 'Faculty of Computers & Artificial Intelligence',
    organization: 'Damietta University (2022 – 2026)',
    period: '2022 – 2026',
    desc: 'Studying Information Technology and Artificial Intelligence. Deep foundational coursework in algorithms, data structures, network security, and database design. Maintained GPA: 3.11 (Very Good).',
    highlight: 'Major: IT & AI • GPA: 3.11 (Very Good)',
  },
  {
    id: 'creativo',
    badge: 'Industry',
    badgeClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    title: 'Full-Stack Developer Intern',
    organization: 'Creativo Company, Mansoura',
    period: '2024 – 2025',
    desc: 'Hands-on production internship building robust Laravel backends, reactive Vue 3 dashboards, and complete UI/UX product cycles for client software and commercial platforms.',
    highlight: 'Production Laravel 12 & Vue 3 application cycles',
  },
  {
    id: 'iti',
    badge: 'Intensive',
    badgeClass: 'bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.5)',
    title: 'Full-Stack Bootcamp Graduate',
    organization: 'ITI (Information Technology Institute) Port Said & Minia',
    period: '2023 & 2025',
    desc: 'Intensive government-backed software engineering tracks. Completed rigorous practical projects emphasizing agile methodologies, MVC architectures, relational database schemas, and modern web integrations.',
    highlight: 'Agile sprints, MVC standards, live project deliveries',
  },
  {
    id: 'itida',
    badge: 'Security',
    badgeClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-300 border-rose-500/30',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.5)',
    title: 'Cybersecurity & InfoSec Trainee',
    organization: 'ITIDA Cairo',
    period: '2025',
    desc: 'Enterprise security training focusing on vulnerability assessments, OWASP top 10 threat mitigation, system hardening, and secure coding practices for API endpoints and data storage.',
    highlight: 'OWASP mitigation, secure auth & system hardening',
  },
];
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   3D PERSPECTIVE STAGE
───────────────────────────────────────────────────────────── */
.skills-stage {
  perspective: 1200px;
}

/* ─────────────────────────────────────────────────────────────
   LUXURY FROSTED GLASS CARDS
───────────────────────────────────────────────────────────── */
.frosted-glass-card {
  /* Light Mode */
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.85);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 20px 40px -15px rgba(15, 23, 42, 0.08);
  transform-style: preserve-3d;
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease, border-color 400ms ease;
}

.dark .frosted-glass-card {
  /* Dark Mode: Luxury frosted glass (0.50 opacity for subtle canvas particle bleed-through) */
  background: rgba(15, 23, 42, 0.50);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 22px 50px -15px rgba(0, 0, 0, 0.5);
}

.frosted-glass-card:hover {
  transform: translateY(-5px);
  border-color: var(--hover-border, rgba(6, 182, 212, 0.4));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 25px 60px -15px rgba(15, 23, 42, 0.15),
    0 0 32px -5px var(--hover-glow, rgba(6, 182, 212, 0.25));
}

.dark .frosted-glass-card:hover {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 30px 70px -15px rgba(0, 0, 0, 0.7),
    0 0 35px -5px var(--hover-glow, rgba(6, 182, 212, 0.25));
}

.card-inner-highlight {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED TIMELINE CIRCUIT WITH PULSING FLOW BEAM
───────────────────────────────────────────────────────────── */
.circuit-pulse-beam {
  position: absolute;
  left: 0;
  width: 100%;
  height: 90px;
  background: linear-gradient(180deg, transparent, #22d3ee, #3b82f6, #10b981, transparent);
  box-shadow: 0 0 14px #22d3ee;
  animation: pulseBeam 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes pulseBeam {
  0% {
    top: -15%;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    top: 115%;
    opacity: 0;
  }
}

.timeline-entry:hover .frosted-glass-card {
  transform: translateY(-4px);
  border-color: var(--node-accent);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 24px 55px -15px rgba(15, 23, 42, 0.15),
    0 0 30px -6px var(--node-glow);
}

.dark .timeline-entry:hover .frosted-glass-card {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 28px 65px -15px rgba(0, 0, 0, 0.7),
    0 0 32px -6px var(--node-glow);
}

/* ─────────────────────────────────────────────────────────────
   SKILL PILLS MICRO-INTERACTIONS
───────────────────────────────────────────────────────────── */
.skill-pill {
  background: rgba(241, 245, 249, 0.85);
  border: 1px solid rgba(226, 232, 240, 0.9);
  color: #334155;
  transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.dark .skill-pill {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
}

.skill-pill:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.15);
}

.skill-pill--rose:hover {
  border-color: rgba(244, 63, 94, 0.5);
  color: #fb7185;
  box-shadow: 0 0 14px -2px rgba(244, 63, 94, 0.35);
}

.skill-pill--emerald:hover {
  border-color: rgba(16, 185, 129, 0.5);
  color: #34d399;
  box-shadow: 0 0 14px -2px rgba(16, 185, 129, 0.35);
}

.skill-pill--amber:hover {
  border-color: rgba(245, 158, 11, 0.5);
  color: #fbbf24;
  box-shadow: 0 0 14px -2px rgba(245, 158, 11, 0.35);
}

/* ─────────────────────────────────────────────────────────────
   SUBTLE FLOATING / BREATHING ICON ANIMATION
───────────────────────────────────────────────────────────── */
.icon-breathing {
  animation: floatBreathing 5.5s ease-in-out infinite;
}

.icon-breathing-reverse {
  animation: floatBreathingReverse 6s ease-in-out infinite 1s;
}

@keyframes floatBreathing {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-4px) rotate(1.5deg);
  }
}

@keyframes floatBreathingReverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-4px) rotate(-1.5deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .circuit-pulse-beam,
  .icon-breathing,
  .icon-breathing-reverse {
    animation: none;
  }
  .frosted-glass-card:hover,
  .timeline-entry:hover .frosted-glass-card,
  .skill-pill:hover {
    transform: none;
  }
}
</style>
