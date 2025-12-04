<template >
  <div v-if="loading">
    <loading-spanner />
  </div>
  <div class="min-h-screen bg-linear-to-r from-gray-900 via-blue-900 to-gray-900" >
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
</template>
<script>
import AOS from 'aos';  
import 'aos/dist/aos.css' ; 
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import { ref ,nextTick, onMounted } from 'vue';
import Services from './components/Services.vue';
import About from './components/About.vue';
import ExperienceSkills from './components/ExperienceSkills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import End from './components/End.vue';
import LoadingSpanner from './components/LoadingSpanner.vue';
import Top from './components/Top.vue';
export default {
  components: { Navbar , Hero , Services , About , ExperienceSkills , Projects, Contact , End , LoadingSpanner , Top},
  setup(){ 
   const loading = ref(true) ; 
   onMounted(async () => { 
    await nextTick() ; 
    AOS.init({
     duration : 800 , 
     once : false  ,
     offset : 100 , 
     easing : 'ease-in-out',
    });
    setTimeout(()=> {
      loading.value = false
    } , 800)
  })
  return {loading}  ;
  }
  
}
</script>
