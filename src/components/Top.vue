<template>
    <transition name="fade">
        
        <button v-show="isVisible" 
                @click="scrollToTop"
                class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:-translate-y-1 transition-all duration-300 group">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" 
                 class="w-6 h-6 group-hover:animate-bounce">
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
// const isVisible = ref(false) ; 

// const handleScroll = () => { 
//     if(window.screenY > 300) { 
//           isVisible.value = true ; 
//      }else { 
//            isVisible.value = false  ;
//     }
// }
// const scrollToTop = () => { 
//       window.screenTop({
//              top : 0 , 
//              behavior : 'smooth' ;
//     })
// }

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

