<template>
    <section class="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">

        <div class="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white mb-6 tracking-tight" data-aos="fade-up">
                Contact <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Me</span>
            </h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Let’s work together—contact me for projects, collaborations, or development inquiries.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
            <!-- Contact Info -->
            <div class="glass-card bg-white/60 dark:bg-slate-800/60 p-8 md:p-10 rounded-3xl border border-white/40 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full"
                data-aos="fade-right">
                <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-10">Contact Information</h3>

                <div class="space-y-8">
                    <div class="flex items-start gap-5 group">
                        <div class="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-sm border border-blue-100 dark:border-transparent">
                            <EnvelopeIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div class="overflow-hidden">
                            <p class="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                            <a href="mailto:mohamediibrahim785@gmail.com"
                                class="text-slate-800 dark:text-white font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                                mohamediibrahim785@gmail.com
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start gap-5 group">
                        <div class="p-4 bg-green-50 dark:bg-green-500/10 rounded-2xl group-hover:bg-green-100 dark:group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-sm border border-green-100 dark:border-transparent">
                            <PhoneIcon class="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <p class="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Phone</p>
                            <a href="tel:+2010551866195"
                                class="text-slate-800 dark:text-white font-semibold text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors tracking-wide">
                                +20 105 518 6619
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start gap-5 group">
                        <div class="p-4 bg-red-50 dark:bg-red-500/10 rounded-2xl group-hover:bg-red-100 dark:group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-sm border border-red-100 dark:border-transparent">
                            <MapPinIcon class="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                            <p class="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Location</p>
                            <p class="text-slate-800 dark:text-white font-semibold text-lg tracking-wide">Mansoura, Egypt</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-5 group">
                        <div class="p-4 bg-blue-50 dark:bg-blue-600/10 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-sm border border-blue-100 dark:border-transparent">
                            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <div class="overflow-hidden">
                            <p class="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/mohamedibrahimasal" target="_blank"
                                class="text-slate-800 dark:text-white font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                                /in/mohamedibrahimasal
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Contact Form -->
            <div class="glass-card bg-white/60 dark:bg-slate-800/60 p-8 md:p-10 rounded-3xl border border-white/40 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative" data-aos="fade-left">
                
                <form ref="form" @submit.prevent="sendEmail" class="space-y-6">

                    <div>
                        <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                        <input type="text" name="user_name" required
                            class="w-full px-5 py-4 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all placeholder-slate-400 dark:placeholder-slate-500 shadow-inner"
                            placeholder="John Doe">
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                        <input type="email" name="user_email" required
                            class="w-full px-5 py-4 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all placeholder-slate-400 dark:placeholder-slate-500 shadow-inner"
                            placeholder="john@example.com">
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                        <textarea name="message" rows="4" required
                            class="w-full px-5 py-4 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all placeholder-slate-400 dark:placeholder-slate-500 resize-none shadow-inner"
                            placeholder="How can I help you?"></textarea>
                    </div>

                    <button type="submit" :disabled="isLoading"
                        class="w-full py-4 px-6 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 text-white font-extrabold hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3">
                        <span v-if="!isLoading" class="text-lg tracking-wide">Send Message</span>
                        <span v-else class="flex items-center gap-3 text-lg tracking-wide">
                            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    </button>

                    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <div v-if="statusMessage" :class="statusType === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800'" class="p-4 rounded-xl text-center text-sm font-bold shadow-sm">
                            {{ statusMessage }}
                        </div>
                    </transition>

                </form>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid';
import emailjs from '@emailjs/browser';

const form = ref(null);
const isLoading = ref(false);
const statusMessage = ref('');
const statusType = ref('');

const sendEmail = () => {
    isLoading.value = true;
    statusMessage.value = '';

    emailjs.sendForm('service_wdlai8p', 'template_f3cgjxp', form.value, 'lrMoNQeNkdaU1dFCo')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            statusMessage.value = 'Message sent successfully!';
            statusType.value = 'success';
            form.value.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            statusMessage.value = 'Failed to send message. Please try again.';
            statusType.value = 'error';
        })
        .finally(() => {
            isLoading.value = false;
            setTimeout(() => {
                statusMessage.value = '';
            }, 5000);
        });
};
</script>