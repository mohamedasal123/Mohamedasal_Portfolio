<template>
  <section v-reveal class="py-24 sm:py-32 relative overflow-hidden" id="services">
    <!-- Section-level glass veil — lets the background canvas show through -->
    <div class="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-[2px] pointer-events-none z-0"></div>

    <!-- Subtle top-edge separator line -->
    <div
      class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none z-0">
    </div>

    <!-- Ambient multi-colored glow orbs -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65rem] h-[32rem] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/8 blur-[120px] rounded-full pointer-events-none z-0">
    </div>
    <div
      class="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-rose-500/6 dark:bg-rose-500/8 blur-[100px] rounded-full pointer-events-none z-0">
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="mb-14 sm:mb-20 text-center md:text-left">
        <!-- <div class="flex items-center justify-center md:justify-start gap-3 mb-3">
          <span class="h-px w-8 bg-blue-500/60"></span>

        </div> -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-2xl">
            Building fast websites that
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-300">
              grow your business
            </span>.
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-md font-light">
            From custom web platforms to targeted ad campaigns, I help you reach more customers and increase your sales.
          </p>
        </div>
      </div>

      <!-- 3D Coverflow Swiper Carousel -->
      <div class="relative px-2 sm:px-6">

        <Swiper :modules="swiperModules" effect="coverflow" :grab-cursor="true" :centered-slides="true"
          slides-per-view="auto" :loop="true" :coverflow-effect="{
            rotate: 30,
            stretch: 0,
            depth: 180,
            modifier: 1.2,
            slideShadows: false,
          }" :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }" :navigation="{
            nextEl: '.services-btn-next',
            prevEl: '.services-btn-prev',
          }" :pagination="{
            clickable: true,
            el: '.services-custom-pagination',
          }" class="services-swiper">
          <SwiperSlide v-for="(service, index) in carouselServices" :key="`${service.id}-${index}`"
            class="services-slide">
            <!-- 3D Neon Glassmorphic Card -->
            <div
              class="service-coverflow-card group relative flex flex-col h-full rounded-[2.2rem] overflow-hidden transition-all duration-500"
              :style="{
                '--card-glow': service.glowColor,
                '--card-accent': service.accentColor,
              }">
              <!-- Card border glow & gradient frame -->
              <div class="service-card__border absolute inset-0 rounded-[2.2rem] pointer-events-none z-20"></div>

              <!-- Inner top reflection glare -->
              <div class="service-card__glare absolute inset-x-0 top-0 h-40 pointer-events-none z-10"></div>

              <!-- Top Section: 3D Visual Window -->
              <div
                class="service-visual-window relative w-full h-52 sm:h-56 p-6 flex flex-col justify-between overflow-hidden">
                <!-- Background radial highlight -->
                <div
                  class="absolute inset-0 opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                  :style="{
                    background: `radial-gradient(circle at 50% 30%, ${service.accentColor}, transparent 70%)`
                  }"></div>

                <!-- Top status badge & metric pill -->
                <!-- <div class="relative z-10 flex items-center justify-between">
                  <span
                    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md border shadow-sm"
                    :class="service.badgeClass">
                    <span class="w-1.5 h-1.5 rounded-full animate-ping"
                      :style="{ backgroundColor: service.accentColor }"></span>
                    {{ service.badge }}
                  </span>

                  <span
                    class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white/40 dark:bg-slate-800/60 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 tabular-nums">
                    {{ service.metric }}
                  </span>
                </div> -->

                <!-- Floating 3D Isometric Neon Visual (Center) -->
                <div
                  class="relative z-10 flex items-center justify-center my-auto transform transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1">

                  <!-- Visual 1: Ads / Target Radar 3D -->
                  <div v-if="service.visualType === 'ads'" class="relative w-28 h-28 flex items-center justify-center">
                    <div
                      class="absolute inset-0 rounded-full border border-rose-500/30 animate-[spin_12s_linear_infinite]">
                    </div>
                    <div
                      class="absolute inset-2 rounded-full border border-dashed border-amber-400/40 animate-[spin_8s_linear_infinite_reverse]">
                    </div>
                    <div
                      class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 p-0.5 shadow-[0_0_30px_rgba(244,63,94,0.5)] transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                        <svg class="w-8 h-8 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <!-- Growth spark floating -->
                    <span
                      class="absolute -top-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950 shadow-lg animate-bounce">
                      +ROAS
                    </span>
                  </div>

                  <!-- Visual 2: E-Commerce Storefront 3D -->
                  <div v-else-if="service.visualType === 'ecommerce'"
                    class="relative w-28 h-28 flex items-center justify-center">
                    <div
                      class="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_14s_linear_infinite]">
                    </div>
                    <div
                      class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-0.5 shadow-[0_0_30px_rgba(16,185,129,0.5)] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                        <svg class="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </div>
                    </div>
                    <!-- Pay badge floating -->
                    <span
                      class="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400 text-slate-950 shadow-lg">
                      PAY
                    </span>
                  </div>

                  <!-- Visual 3: Full-Stack Architectural Cube 3D -->
                  <div v-else-if="service.visualType === 'fullstack'"
                    class="relative w-28 h-28 flex items-center justify-center">
                    <div
                      class="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]">
                    </div>
                    <div
                      class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-[0_0_30px_rgba(59,130,246,0.5)] transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                        <svg class="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                          <line x1="14" y1="4" x2="10" y2="20" />
                        </svg>
                      </div>
                    </div>
                    <!-- API badge -->
                    <span
                      class="absolute -top-1 -left-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-400 text-slate-950 shadow-lg">
                      v12
                    </span>
                  </div>

                  <!-- Visual 4: Landing Page Lightning Speed 3D -->
                  <div v-else class="relative w-28 h-28 flex items-center justify-center">
                    <div
                      class="absolute inset-0 rounded-full border border-purple-500/30 animate-[spin_12s_linear_infinite_reverse]">
                    </div>
                    <div
                      class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 p-0.5 shadow-[0_0_30px_rgba(168,85,247,0.5)] transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <div class="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                        <svg class="w-8 h-8 text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                    </div>
                    <!-- Speed badge -->
                    <span
                      class="absolute -bottom-1 -left-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-fuchsia-400 text-slate-950 shadow-lg">
                      &lt;0.8s
                    </span>
                  </div>

                </div>

                <!-- Bottom accent gradient bar in visual window -->
                <div
                  class="h-0.5 w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent">
                </div>
              </div>

              <!-- Bottom Section: Content & Business Description -->
              <div
                class="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl">
                <div>
                  <p class="text-xs font-bold uppercase tracking-wider mb-2" :style="{ color: service.accentColor }">
                    {{ service.kicker }}
                  </p>

                  <h4
                    class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-blue-500 dark:group-hover:text-cyan-300 transition-colors duration-300">
                    {{ service.title }}
                  </h4>

                  <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {{ service.desc }}
                  </p>
                </div>

                <div>
                  <!-- Tags / Tech Stack Pills -->
                  <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                    <span v-for="tag in service.tags" :key="tag"
                      class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-2xs">
                      {{ tag }}
                    </span>
                  </div>

                  <!-- CTA Button: Smooth scroll to #contact -->
                  <button @click="handleGetStarted"
                    class="group/btn w-full py-3.5 px-5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-between transition-all duration-300 shadow-md text-white bg-slate-900 hover:bg-blue-600 dark:bg-white/10 dark:hover:bg-blue-600 dark:border dark:border-white/15">
                    <span>Get Started</span>
                    <span
                      class="w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-300">
                      <ArrowRightIcon class="w-4 h-4 text-white" />
                    </span>
                  </button>
                </div>

              </div>

            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Glassmorphic Navigation Buttons (Sides) -->
        <button
          class="services-btn-prev absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-slate-700 dark:text-white bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-250/60 dark:border-white/15 shadow-xl hover:scale-110 hover:border-blue-500 transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Previous Service">
          <ChevronLeftIcon class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          class="services-btn-next absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-slate-700 dark:text-white bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-250/60 dark:border-white/15 shadow-xl hover:scale-110 hover:border-blue-500 transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Next Service">
          <ChevronRightIcon class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <!-- Active Pagination Indicator Pills (Bottom) -->
        <div class="services-custom-pagination mt-8 flex items-center justify-center gap-2.5"></div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { smoothScrollTo } from '../composables/useSmoothScroll';

// Import essential Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperModules = [EffectCoverflow, Navigation, Pagination, Autoplay];

const baseServices = [
  {
    id: 'media-buying',
    badge: 'HIGH CONVERSION',
    badgeClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-300 border-rose-500/30',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    accentColor: '#F43F5E',
    title: 'Media Buying & Growth Ads',
    kicker: 'Performance Marketing',
    desc: 'High-ROAS paid acquisition campaigns across Meta and TikTok. Engineered with server-side CAPI tracking, deep funnel analytics, and ruthless creative testing to maximize every dollar spent.',
    tags: ['Meta Ads', 'TikTok Ads', 'CAPI Tracking', 'High-ROAS', 'A/B Testing'],
    metric: '3.8x Avg. ROAS',
    visualType: 'ads',
  },
  {
    id: 'ecommerce',
    badge: 'POPULAR',
    badgeClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    accentColor: '#10B981',
    title: 'E-Commerce Platforms & Stores',
    kicker: 'Custom Storefronts',
    desc: 'Bespoke, high-throughput digital stores built for frictionless transactions. Seamlessly integrated with international payment gateways (Stripe, PayMob), real-time inventory, and sub-second checkout.',
    tags: ['Payment Gateways', 'Checkout Funnels', 'Inventory Sync', 'Stripe / PayMob', 'Speed 95+'],
    metric: '99.9% Uptime',
    visualType: 'ecommerce',
  },
  {
    id: 'fullstack',
    badge: 'FULL STACK',
    badgeClass: 'bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    accentColor: '#3B82F6',
    title: 'Full-Stack Web Applications',
    kicker: 'Scalable Architecture',
    desc: 'Enterprise-grade backends built with Laravel 12 paired with hyper-responsive Vue 3 single page applications. Robust RESTful APIs, relational MySQL database schemas, and rock-solid Sanctum security.',
    tags: ['Laravel 12', 'Vue 3', 'MySQL / Eloquent', 'REST APIs', 'Sanctum Auth'],
    metric: 'Enterprise Ready',
    visualType: 'fullstack',
  },
  {
    id: 'landing-pages',
    badge: 'FAST DELIVERY',
    badgeClass: 'bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    accentColor: '#A855F7',
    title: 'High-Converting Landing Pages',
    kicker: 'Conversion Rate Optimization',
    desc: 'Bespoke, performance-tuned landing pages crafted to convert cold traffic into qualified leads. Blazing sub-second load times, mobile-first responsiveness, and psychological UX triggers.',
    tags: ['Conversion UX', 'Sub-second Load', 'Tailwind CSS', 'Mobile First', 'Lead Gen'],
    metric: '< 0.8s Load Speed',
    visualType: 'landing',
  },
];

// In Swiper 3D coverflow, duplicating the 4 items (4 + 4 = 8) provides an infinite seamless loop without buffer gaps
const carouselServices = computed(() => [...baseServices, ...baseServices]);

const handleGetStarted = () => {
  smoothScrollTo('#contact', 96);
};
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   3D COVERFLOW SWIPER CUSTOMIZATION
───────────────────────────────────────────────────────────── */
:deep(.services-swiper) {
  padding-top: 1.5rem;
  padding-bottom: 3.5rem;
  overflow: visible;
}

:deep(.services-swiper .swiper-wrapper) {
  align-items: center;
}

:deep(.services-swiper .swiper-slide) {
  width: 320px;
  max-width: 86vw;
  transition: opacity 350ms cubic-bezier(0.16, 1, 0.3, 1), filter 350ms ease;
  opacity: 0.45;
  filter: blur(1.5px);
}

@media (min-width: 640px) {
  :deep(.services-swiper .swiper-slide) {
    width: 370px;
  }
}

@media (min-width: 1024px) {
  :deep(.services-swiper .swiper-slide) {
    width: 410px;
  }
}

:deep(.services-swiper .swiper-slide-active) {
  opacity: 1;
  filter: blur(0);
  z-index: 20;
}

/* ─────────────────────────────────────────────────────────────
   3D NEON GLASSMORPHIC SERVICE CARD
───────────────────────────────────────────────────────────── */
.service-coverflow-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.22);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 24px 60px -15px rgba(15, 23, 42, 0.12),
    0 8px 24px -6px rgba(15, 23, 42, 0.06),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
  transform-style: preserve-3d;
}

.dark .service-coverflow-card {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow:
    0 28px 70px -15px rgba(0, 0, 0, 0.55),
    0 10px 30px -8px rgba(0, 0, 0, 0.35),
    inset 0 1px 1px rgba(255, 255, 255, 0.12);
}

/* Dynamic border glow overlay */
.service-card__border {
  border: 1.5px solid transparent;
  transition: border-color 400ms ease, box-shadow 400ms ease;
}

.service-coverflow-card:hover .service-card__border,
:deep(.swiper-slide-active) .service-card__border {
  border-color: var(--card-accent);
  box-shadow: 0 0 25px -4px var(--card-glow);
}

/* Top glare reflection */
.service-card__glare {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, transparent 100%);
  opacity: 0.7;
}

.dark .service-card__glare {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 100%);
}

/* Navigation button disabled states */
.services-btn-prev.swiper-button-disabled,
.services-btn-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}

/* Custom Pagination Indicator Pills */
:deep(.services-custom-pagination .swiper-pagination-bullet) {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.4);
  opacity: 1;
  transition: all 300ms ease;
  cursor: pointer;
  display: inline-block;
}

:deep(.services-custom-pagination .swiper-pagination-bullet-active) {
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  width: 30px;
  box-shadow: 0 0 16px rgba(6, 182, 212, 0.6);
}

@media (prefers-reduced-motion: reduce) {
  :deep(.services-swiper .swiper-slide) {
    transition: none;
  }
}
</style>