<template>
    <div class="fixed inset-0 z-50 flex flex-col justify-center items-center h-screen w-full bg-linear-to-r from-gray-900 via-[#111827] to-gray-900">
        
        <div class="flex space-x-3 mb-6">
            <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce shadow-[0_0_15px_#3b82f6]"></div>
            
            <div class="w-5 h-5 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_15px_#22d3ee]" 
                 style="animation-delay: 0.15s"></div>
            
            <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce shadow-[0_0_15px_#3b82f6]" 
                 style="animation-delay: 0.3s"></div>
        </div>

        <h2 class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 text-xl font-bold tracking-[0.2em] animate-pulse">
            LOADING...
        </h2>

    </div>
</template>