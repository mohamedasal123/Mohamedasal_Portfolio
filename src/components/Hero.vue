<template>
  <section class="relative flex items-center w-full overflow-hidden min-h-screen py-5 lg:py-0" >
    <div class="w-full px-4 sm:px-6 md:px-12 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <div class="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <div class="text-white">
            <h1 class="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                data-aos="fade-right">
              Hi, I'm
              <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Mohamed
              </span>
            </h1>
            
            <p class="text-blue-200 font-medium text-base sm:text-lg md:text-2xl mt-4" 
               data-aos="fade-right"
               data-aos-delay="100">
              FULL STACK DEVELOPER & GRAPHIC DESIGNER
            </p>
            
            <p class="text-gray-300 text-base sm:text-lg pt-6 mx-auto lg:mx-0 max-w-xl leading-relaxed" data-aos="fade-up">
              I am a Full Stack PHP Developer with hands-on experience in building dynamic and responsive
              web applications from front-end to back-end. I specialize in using HTML, CSS, JavaScript,
              jQuery, Bootstrap, and AJAX to create interactive and user-friendly interfaces, while
              leveraging PHP and MySQL to develop robust server-side functionality and database-driven
              features.
            </p>
          </div>

          <div class="flex items-center justify-center lg:justify-start gap-4 flex-wrap mt-8" 
               data-aos="fade-up" 
               data-aos-delay="200">
            
            <a href="#contact"
              class="px-8 py-3.5 rounded-xl relative group w-full sm:w-auto flex justify-center items-center overflow-hidden bg-linear-to-r from-blue-400 to-cyan-400 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              <span class="text-white font-semibold flex items-center text-lg">
                Contact Me
                <ArrowRightIcon class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>

            <a href="/Mohamed_Asal_CV.pdf" download="Mohamed_Asal_CV.pdf"
              class="px-8 py-3.5 rounded-xl relative group w-full sm:w-auto flex justify-center items-center overflow-hidden border border-blue-400/30 hover:bg-blue-900/20 transition-all duration-300">
              <span class="text-white font-semibold flex items-center text-lg">
                Download CV
                <ArrowDownTrayIcon class="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>

        <div class="flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0">
          <div 
            class="relative 
                   w-[280px] h-[280px] 
                   sm:w-[350px] sm:h-[350px] 
                   md:w-[450px] md:h-[450px] 
                   lg:w-[500px] lg:h-[500px]
                   xl:w-[550px] xl:h-[550px]
                   bg-linear-to-r from-blue-600 to-cyan-600 
                   rounded-[50%_30%_30%_60%/70%_30%_70%_40%] 
                   overflow-hidden shadow-2xl shadow-blue-500/20 
                   border border-blue-500/30 transition-all duration-500 hover:scale-105"
            data-aos="zoom-in" 
            data-aos-delay="300"
          >
            <img 
              src="/Portfolio.png" 
              alt="Mohamed Developer" 
              class="w-full h-full object-contain object-bottom pt-4"
            >
          </div>
        </div>

      </div>
      
    </div>
    
  </section>
</template>

<script setup>
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
</script>