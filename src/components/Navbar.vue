<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'py-0 mt-4 mx-3 sm:mx-6 md:mx-10'
        : 'py-2 mx-0'
    ]"
  >
    <div
      :class="[
        'max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 transition-all duration-500',
        isScrolled
          ? 'py-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)]'
          : 'py-5'
      ]"
    >

      <!-- Logo -->
      <a href="#hero" @click.prevent="scrollToSection('#hero')" class="flex items-center gap-2 group">
        <div class="w-9 h-9 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
          <span class="text-white text-sm font-black leading-none">M</span>
        </div>
        <span class="text-lg font-bold text-slate-900 dark:text-white tracking-tight hidden sm:block">
          Mohamed<span class="text-blue-600 dark:text-blue-400">.</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center">
        <ul class="flex items-center gap-1">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              @click.prevent="scrollToSection(item.href)"
              class="relative px-4 py-2 text-[13px] font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Desktop Right: Theme + CTA -->
      <div class="hidden md:flex items-center gap-3">
        <button
          @click="toggleDark()"
          class="relative w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
        >
          <SunIcon v-if="isDark" class="w-4 h-4" />
          <MoonIcon v-else class="w-4 h-4" />
        </button>

        <a
          href="#contact"
          @click.prevent="scrollToSection('#contact')"
          class="px-5 py-2 text-[13px] font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-colors duration-200 shadow-sm"
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile: Theme + Hamburger -->
      <div class="flex md:hidden items-center gap-2.5">
        <button
          @click="toggleDark()"
          class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400"
        >
          <SunIcon v-if="isDark" class="w-4 h-4" />
          <MoonIcon v-else class="w-4 h-4" />
        </button>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 relative"
        >
          <div class="w-[18px] h-[14px] relative">
            <span :class="[
              'absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ease-out',
              isMenuOpen ? 'rotate-45 top-[6px]' : 'top-0'
            ]"></span>
            <span :class="[
              'absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-200',
              isMenuOpen ? 'opacity-0 scale-x-0' : 'top-[6px] opacity-100'
            ]"></span>
            <span :class="[
              'absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ease-out',
              isMenuOpen ? '-rotate-45 top-[6px]' : 'top-[12px]'
            ]"></span>
          </div>
        </button>
      </div>

    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-2 mx-3 sm:mx-6 md:mx-10 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-2xl overflow-hidden"
      >
        <nav class="p-4">
          <ul class="space-y-1">
            <li v-for="item in Menu" :key="item.name">
              <a
                :href="item.href"
                @click.prevent="scrollToSection(item.href)"
                class="flex items-center px-4 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>

          <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#contact"
              @click.prevent="scrollToSection('#contact')"
              class="flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors duration-200"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
});
const toggleDark = useToggle(isDark);

const Menu = ref([
  { name: 'Services', href: '#services' },
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
]);

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    const headerOffset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
</script>