<template>
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform translate-y-10 opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform translate-y-10 opacity-0">
        
        <button v-show="isVisible" 
                @click="scrollToTop"
                class="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-xl hover:shadow-blue-500/50 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white hover:-translate-y-2 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-blue-500/30">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" 
                 class="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>

        </button>

    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    if (window.scrollY > 300) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

