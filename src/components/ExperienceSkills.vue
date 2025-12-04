<template>
    <section class="py-10 relative overflow-hidden" id="skills">
        <!-- heading -->
        <div class="flex flex-col justify-center items-center py-8 relative z-10">

            <h1 class="text-4xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-wide">
                <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                    Skills
                </span>

                <span
                    class="text-blue-300 text-3xl sm:text-4xl font-bold mx-2 align-middle relative -top-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">
                    &
                </span>

                <span class="text-gray-100">
                    Experience
                </span>
            </h1>
            <div class="items-center">
                <p data-aos="fade-right" class="mt-4 font-bold p-3 text-center text-amber-50 text-sm sm:text-sm">
                    "Experienced in building responsive interfaces and full-stack applications using modern tools." </p>
            </div>




        </div>
        <!-- skills and experience --> 
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 p-15 items-start">
      
      <div data-aos="fade-right">
        
        <h1 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="bg-blue-500/10 p-2 rounded-lg text-blue-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </span>
          Technical Skills
        </h1>

        <div class="space-y-8 mb-12">
          <div v-for="skill in skills" :key="skill.id" class="group">
            
            <div class="flex items-end justify-between mb-2">
              <span class="text-gray-300 font-semibold flex items-center gap-2">
                <component :is="skill.icon" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"></component>
                {{ skill.title }}
              </span>
              <span :class="['font-bold transition-colors duration-300', skill.PrecentTageColor]">{{ skill.percentage }}%</span>
            </div>

            <div class="h-3 bg-gray-800/50 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
              <div class="h-full rounded-full transition-all duration-1000 group-hover:scale-100 shadow-[0_0_15px_currentColor]"
                   :class="[skill.gradient]" 
                   :style="{ width: skill.percentage + '%' }">
              </div>
            </div>
            
            <p class="text-xs text-gray-500 mt-2 ml-1">{{ skill.desc }}</p>
          </div>
        </div>

        <div class="py-20">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
             Technologies I Use
          </h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="(tech, index) in techStack" :key="index" 
                  class="px-4 py-2 bg-[#1e293b] text-gray-300 text-sm font-medium rounded-xl border border-blue-500/10 hover:border-blue-500/50 hover:text-white hover:bg-blue-500/10 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg">
              {{ tech }}
            </span>
          </div>
        </div>

      </div>

      <div data-aos="fade-left">
        
        <h1 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
           <span class="bg-green-500/10 p-2 rounded-lg text-green-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
           </span>
           Education & Experience
        </h1>

        <div class="relative border-l-2 border-gray-800 ml-3 space-y-10 pb-4">
          
          <div v-for="exp in experience" :key="exp.id" class="relative pl-8 group">
            
            <span :class="['absolute -left-[9px] top-2 w-5 h-5 rounded-full border-4 border-[#0f172a] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_currentColor]', exp.dotColor]"></span>
            
            <div :class="['p-5 rounded-2xl border bg-gray-900/40 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/60', exp.borderColor]">
              <div class="flex flex-wrap justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{{ exp.position }}</h3>
                <span :class="['px-3 py-1 rounded-full text-xs border bg-opacity-10', exp.dateColor, exp.borderClass]">
                  {{ exp.period }}
                </span>
              </div>
              
              <h4 :class="['text-base font-semibold mb-2', exp.companyColor]">{{ exp.company }}</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ exp.desc }}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon, ServerIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const skills = ref([
  {
    id: 1,
    title: "Frontend Development",
    icon: CodeBracketIcon,
    percentage: 90,
    PrecentTageColor: "text-blue-400",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500", // تم التصحيح لـ bg-gradient
    desc: "Vue.js, Tailwind CSS, Responsive Design"
  },
  {
    id: 2,
    title: "Backend Development",
    icon: ServerIcon,
    percentage: 70,
    PrecentTageColor: "text-green-400",
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    desc: "PHP, Laravel, MySQL, API Development"
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: PaintBrushIcon,
    percentage: 80,
    PrecentTageColor: "text-pink-400",
    gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
    desc: "Branding, UI/UX, Social Media Designs"
  },
  {
    id: 4,
    title: "Problem Solving",
    icon: LightBulbIcon,
    percentage: 85,
    PrecentTageColor: "text-yellow-400",
    gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    desc: "Algorithms, Debugging, Logic Building"
  },
]);

const experience = ref([
  {
    id: 1,
    position: "Bachelor Student",
    company: "Faculty of Computers & AI, Damietta University",
    period: "2022 - Present",
    desc: "Studying IT and AI, gaining foundational knowledge and practical skills.",
    borderColor: "border-green-500/20",
    dotColor: "bg-green-500",
    borderClass: "border-green-500/20",
    dateColor: "text-green-400",
    companyColor: "text-green-500"
  },
  {
    id: 2,
    position: "Internship",
    company: "ITI Minia",
    period: "2023",
    desc: "Completed hands-on training and projects in programming and web development.",
    borderColor: "border-blue-500/20",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-blue-400",
    companyColor: "text-blue-500"
  },
  {
    id: 3,
    position: "Internship",
    company: "Creativo Company, Mansoura",
    period: "2024 - 2025",
    desc: "Trained in web development (PHP, Laravel), UI/UX design, and full-stack projects.",
    borderColor: "border-cyan-500/20",
    dotColor: "bg-cyan-500",
    borderClass: "border-cyan-500/20",
    dateColor: "text-cyan-400",
    companyColor: "text-cyan-500"
  },
  {
    id: 4,
    position: "Internship",
    company: "ITI Port Said",
    period: "2025",
    desc: "Enhanced practical skills in software development and project implementation.",
    borderColor: "border-purple-500/20",
    dotColor: "bg-purple-500",
    borderClass: "border-purple-500/20",
    dateColor: "text-purple-400",
    companyColor: "text-purple-500"
  },
  {
    id: 5,
    position: "Training",
    company: "ITIDA & Infosec",
    period: "2025",
    desc: "Worked on real-world projects gaining experience in cybersecurity and IT solutions.",
    borderColor: "border-pink-500/20",
    dotColor: "bg-pink-500",
    borderClass: "border-pink-500/20",
    dateColor: "text-pink-400",
    companyColor: "text-pink-500"
  }
]);

const techStack = ["HTML", "CSS3", "JAVASCRIPT", "JQUERY", "BOOTSTRAP", "TAILWIND CSS", "VUE JS", "MYSQL", "PHP", "LARAVEL", "GIT", "REST API", "AJAX"];
</script>
