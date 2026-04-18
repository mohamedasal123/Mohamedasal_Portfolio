<template>
    <section class="py-24 sm:py-32 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/20" id="skills">
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- header -->
            <div class="mb-20 text-center" data-aos="fade-up">
                <h2 class="text-SM font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">
                    Expertise
                </h2>
                <h3 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Skills & Experience
                </h3>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      
                <!-- Left: Skills (Sticky) -->
                <div class="lg:sticky lg:top-32" data-aos="fade-right">
                    
                    <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        Technical Arsenal
                    </h4>

                    <div class="space-y-10 mb-16">
                        <div v-for="skill in skills" :key="skill.id" class="group">
                            <div class="flex items-end justify-between mb-3">
                                <span class="text-slate-900 dark:text-white font-semibold flex items-center gap-3 text-lg">
                                    <component :is="skill.icon" class="w-5 h-5 text-blue-500 dark:text-blue-400"></component>
                                    {{ skill.title }}
                                </span>
                                <span class="font-bold text-slate-400 dark:text-slate-500">{{ skill.percentage }}%</span>
                            </div>

                            <div class="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 relative overflow-hidden"
                                    :class="[skill.gradient]" 
                                    :style="{ width: skill.percentage + '%' }">
                                    <div class="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite] -translate-x-full"></div>
                                </div>
                            </div>
                            
                            <p class="text-sm font-light text-slate-500 dark:text-slate-400 mt-3">{{ skill.desc }}</p>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                           Core Stack
                        </h4>
                        <div class="flex flex-wrap gap-2.5">
                            <span v-for="(tech, index) in techStack" :key="index" 
                                  class="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default shadow-sm">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                </div>

                <!-- Right: Experience Timeline -->
                <div data-aos="fade-left">
                    <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                        <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Professional Journey
                    </h4>

                    <div class="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-14 pb-4">
                        
                        <div v-for="exp in experience" :key="exp.id" class="relative pl-10 group">
                            <!-- Timeline dot -->
                            <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-slate-50 dark:ring-[#020617] group-hover:scale-150 group-hover:bg-blue-600 transition-all duration-300"></div>
                            
                            <div class="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                <h5 class="text-xl font-bold text-slate-900 dark:text-white">{{ exp.position }}</h5>
                                <span class="inline-flex w-max px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50">
                                    {{ exp.period }}
                                </span>
                            </div>
                            
                            <h6 class="text-slate-700 dark:text-slate-300 font-semibold mb-4">{{ exp.company }}</h6>
                            <p class="text-slate-600 dark:text-slate-400 text-base font-light leading-relaxed">
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
    gradient: "bg-linear-to-r from-blue-500 to-cyan-400",
    desc: "Vue.js, Tailwind CSS, Responsive Design"
  },
  {
    id: 2,
    title: "Backend Development",
    icon: ServerIcon,
    percentage: 70,
    gradient: "bg-linear-to-r from-blue-500 to-cyan-400",
    desc: "PHP, Laravel, MySQL, API Development"
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: PaintBrushIcon,
    percentage: 80,
    gradient: "bg-linear-to-r from-blue-500 to-cyan-400",
    desc: "Branding, UI/UX, Social Media Designs"
  },
  {
    id: 4,
    title: "Problem Solving",
    icon: LightBulbIcon,
    percentage: 85,
    gradient: "bg-linear-to-r from-blue-500 to-cyan-400",
    desc: "Algorithms, Debugging, Logic Building"
  },
]);

const experience = ref([
  {
    id: 1,
    position: "Bachelor Student",
    company: "Faculty of Computers & AI, Damietta University",
    period: "2022 - Present",
    desc: "Studying IT and AI, gaining foundational knowledge and practical skills in cutting edge tech environments.",
  },
  {
    id: 2,
    position: "Internship",
    company: "ITI Minia",
    period: "2023",
    desc: "Completed hands-on training and projects in modular programming and interactive web development integrations.",
  },
  {
    id: 3,
    position: "Internship",
    company: "Creativo Company, Mansoura",
    period: "2024 - 2025",
    desc: "Trained in backend web development (PHP, Laravel), full-cycle UI/UX design framing, and scalable full-stack projects.",
  },
  {
    id: 4,
    position: "Internship",
    company: "ITI Port Said",
    period: "2025",
    desc: "Enhanced practical skills in agile software development environments and active project implementation.",
  },
  {
    id: 5,
    position: "Training",
    company: "ITIDA & Infosec",
    period: "2025",
    desc: "Worked on real-world projects gaining extensive experience in cybersecurity applications and enterprise IT solutions.",
  }
]);

const techStack = ["HTML", "CSS3", "JAVASCRIPT", "JQUERY", "BOOTSTRAP", "TAILWIND CSS", "VUE JS", "MYSQL", "PHP", "LARAVEL", "GIT", "REST API", "AJAX"];
</script>

