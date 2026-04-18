<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="flex space-x-3 mb-6 relative">
            <div class="w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
            
            <div class="w-5 h-5 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-500/50" 
                 style="animation-delay: 0.15s"></div>
            
            <div class="w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-500/50" 
                 style="animation-delay: 0.3s"></div>
                 
            <div class="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 blur-xl rounded-full"></div>
        </div>

        <h2 class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-xl font-bold tracking-[0.2em] animate-pulse">
            LOADING...
        </h2>
    </div>
</template>