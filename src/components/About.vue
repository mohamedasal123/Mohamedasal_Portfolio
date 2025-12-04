<template>
    <section class="relative overflow-hidden pt-10" id="about">
        <!-- heading -->
        <div class="items-center">
            <div class="text-5xl lg:text-5xl mb-4 md:text-4xl sm:text-3xl text-center relative z-10">
                <h1 class="text-6xl md:text-5xl font-bold text-white mb-4"><span
                        class="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">About </span>Me
                </h1>
            </div>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 m-6 justify-center items-center ">

            <div class="relative w-full max-w-lg mx-auto">

                <div
                    class="grid grid-cols-1 sm:grid-cols-2  gap-4 p-8 lg:p-4 m-10 rounded-3xl border border-blue-500/20 bg-linear-to-br from-white/10 to-gray-900/50 backdrop-blur-lg shadow-cyan-900 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">

                    <div v-for="(image) in images" :key="image.id" :data-aos="image.data_aos"
                        :data-aos-delay="image.data_delay"
                        class="relative group rounded-2xl overflow-hidden h-80 w-full  sm:h-70 border border-white/10">

                        <img :src="image.src" :alt="image.alt"
                            class="w-full h-full object-content group-hover:scale-110 transition-transform duration-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" />

                    </div>

                </div>

                <div class="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-max z-20">
                    <div
                        class="bg-linear-to-r from-blue-600 to-cyan-500 p-2 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <div
                            class="bg-linear-to-br from-blue-900 to-cyan-900 rounded-xl px-6 py-3 flex flex-col items-center justify-center">
                            <span
                                class="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                2+ Years
                            </span>
                            <span class="text-xs text-gray-300 font-medium tracking-wide">
                                Experience
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="relative items-center m-4 p-5">
                <!-- names -->
                <div
                    class="w-fit mx-auto text-center rounded-full p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-500 cursor-default">

                    <div class="rounded-full px-8 py-4 hover:bg-transparent transition-all duration-500">

                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-200 to-cyan-400"
                            data-aos="fade-right">
                            Eng. Mohamed Asal
                        </h1>

                    </div>

                </div>
                <!-- p -->
                <div class="mt-6 text-center lg:text-left" data-aos="fade-up">
                    <p class="text-gray-400 text-base sm:text-lg leading-loose max-w-2xl mx-auto lg:mx-0">
                        Hi, I'm <span class="text-white font-bold">Mohamed Ibrahim</span>, a passionate
                        <span
                            class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 font-bold">Full
                            Stack Developer & Graphic Designer</span>
                        with strong experience in building modern, responsive, and high-quality web applications.
                        <br><br>
                        I specialize in creating clean UI/UX designs and transforming them into fully functional
                        websites using
                        <span class="text-cyan-300">HTML, CSS, JavaScript, jquery , Vue.js, PHP, laravel framework , and
                            MySQL</span>.
                        I focus on delivering smooth user experiences, optimized performance, and scalable code.
                        <br><br>
                        In addition to development, I design visually appealing graphics such as logos and brand
                        identities.
                        I’m always learning and improving. If you'd like to connect, feel free to reach out through my
                        <span class="text-blue-400 font-medium">LinkedIn</span> or <span
                            class="text-blue-400 font-medium">Email</span>.
                    </p>
                </div>
                <!-- links -->
                <div class="flex flex-wrap gap-4 mt-10 justify-center lg:justify-center">

                    <a href="https://www.linkedin.com/in/mohamedibrahimasal" target="_blank"
                        class="flex items-center gap-2 px-6 py-3 border border-blue-100 text-blue-100 rounded-full font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a href="https://www.facebook.com/mohamed.ibrahimasal/"
                        class="flex items-center gap-2 px-6 py-3 border border-blue-100 text-blue-100 rounded-full font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1" target="_blank">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        Facebook
                        <!-- <EnvelopeIcon class="w-6 h-6 text-red-100 hover:text-white group-hover:translate-x-1 transition-transform duration-300" /> -->
                    </a>

                </div>
            </div>

        </div>

    </section>
</template>
<script setup>
// import { EnvelopeIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
const images = ref([
    {
        id: 1,
        src: '/me4.jpeg',
        alt: 'Frontend Project',
        tag: 'Frontend',
        tagColor: 'bg-blue-600/80',
        data_aos: 'fade-up',
        data_delay: '100'
    },
    {
        id: 2,
        src: '/me5.jpeg',
        alt: 'Backend Project',
        tag: 'Backend',
        tagColor: 'bg-cyan-600/80',
        data_aos: 'fade-up',
        data_delay: '200'
    },
    {
        id: 3,
        src: '/me2.jpeg',
        alt: 'Design Project',
        tag: 'Design',
        tagColor: 'bg-purple-600/80',
        data_aos: 'fade-up',
        data_delay: '300'
    },
    {
        id: 4,
        src: '/me1.jpeg',  
        alt: 'Tools Setup',
        tag: 'Tools',
        tagColor: 'bg-pink-600/80',
        data_aos: 'fade-up',
        data_delay: '400'
    }
]);
</script>
