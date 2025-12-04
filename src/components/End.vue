<template>
  <footer class="relative mt-12 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-white/10 overflow-hidden pt-10 pb-6">
    
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="flex flex-col lg:flex-row justify-between items-center gap-10 mb-8">
        
        <div class="text-center lg:text-left lg:w-1/3">
          <a href="#" class="text-2xl font-bold block">
            <span class="text-white">Eng. </span> 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mohamed Asal</span>
          </a>
          <p class="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs mx-auto lg:mx-0">
            Building modern, responsive, and high-performance web experiences.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:w-1/3">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" 
               class="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors duration-300 group">
                <component :is="link.icon" class="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                {{ link.name }}
            </a>
        </div>

        <div class="flex items-center gap-4 lg:w-1/3 justify-center lg:justify-end">
          
          <a href="https://github.com/mohamedasal123" target="_blank" class="social-btn text-white">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>

          <a href="https://www.linkedin.com/in/mohamedibrahimasal" target="_blank" class="social-btn text-white">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.389c.903-1.287 2.58-1.722 3.905-.832 1.326.891 1.595 2.748 1.595 4.443v4.999z"/></svg>
          </a>

          <a href="https://www.facebook.com/mohamed.ibrahimasal/" target="_blank" class="social-btn text-white">
            <svg class="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>

          <a href="https://www.instagram.com/mo7med_asal/" target="_blank" class="social-btn text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>

        </div>

      </div>

      <div class="border-t border-gray-700/50 my-6"></div>

      <div class="text-center">
         <p class="text-gray-500 text-sm font-medium">
            &copy; {{ currentYear }} <span class="text-blue-400">Mohamed Asal</span>. All Rights Reserved.
         </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { HomeIcon, BriefcaseIcon, CpuChipIcon, UserIcon, FolderOpenIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

const currentYear = ref(new Date().getFullYear());

const navLinks = [
    { name: 'Hero', href: '#', icon: HomeIcon },
    { name: 'Services', href: '#services', icon: BriefcaseIcon },
    { name: 'Skills', href: '#skills', icon: CpuChipIcon },
    { name: 'About', href: '#about', icon: UserIcon },
    { name: 'Projects', href: '#projects', icon: FolderOpenIcon },
    { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
];
</script>

