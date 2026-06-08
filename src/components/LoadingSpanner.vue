<template>
    <div class="loader" role="status" aria-live="polite" aria-label="Loading portfolio">
        <div class="loader__mark" aria-hidden="true">
            <span class="loader__ring"></span>
            <span class="loader__ring loader__ring--delay"></span>
            <span class="loader__core">
                <img src="/Portfolio.png" alt="Mohamed Asal"
                    class="w-full h-full object-cover object-top rounded-[1.1rem]" />
            </span> <span class="loader__node loader__node--one"></span>
            <span class="loader__node loader__node--two"></span>
            <span class="loader__node loader__node--three"></span>
        </div>

        <div class="loader__copy">
            <span>Booting interface</span>
            <span class="loader__dots" aria-hidden="true"></span>
        </div>
    </div>
</template>

<style scoped>
.loader {
    display: grid;
    place-items: center;
    gap: 1.5rem;
}

.loader__mark {
    position: relative;
    display: grid;
    place-items: center;
    width: 7rem;
    height: 7rem;
}

.loader__ring {
    position: absolute;
    inset: 0;
    border-radius: 999px;
    border: 1px solid rgba(14, 165, 233, 0.20);
    border-top-color: rgba(34, 211, 238, 0.85);
    animation: loader-spin 1.4s linear infinite;
}

.loader__ring--delay {
    inset: 0.75rem;
    border-color: rgba(16, 185, 129, 0.18);
    border-right-color: rgba(16, 185, 129, 0.74);
    animation-duration: 2.1s;
    animation-direction: reverse;
}

.loader__core {
    display: grid;
    place-items: center;
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 1.2rem;
    /* شيل color و font-weight وسيب الباقي */
    background: linear-gradient(135deg, #2563eb, #06b6d4);
    box-shadow: 0 24px 60px rgba(37, 99, 235, 0.28), 0 0 28px rgba(34, 211, 238, 0.28);
    overflow: hidden; /* ← زود دي عشان الصورة ماتطلعش برا الـ border-radius */
}
.loader__node {
    position: absolute;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 999px;
    background: #67e8f9;
    box-shadow: 0 0 18px rgba(34, 211, 238, 0.7);
    animation: loader-node 1.8s ease-in-out infinite alternate;
}

.loader__node--one {
    top: 0.8rem;
    right: 1.2rem;
}

.loader__node--two {
    left: 0.75rem;
    bottom: 1.4rem;
    animation-delay: -0.45s;
}

.loader__node--three {
    right: 1.5rem;
    bottom: 0.65rem;
    animation-delay: -0.9s;
}

.loader__copy {
    display: inline-flex;
    align-items: center;
    min-height: 1.5rem;
    color: #64748b;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.dark .loader__copy {
    color: #cbd5e1;
}

.loader__dots::after {
    content: "";
    animation: loader-dots 1.2s steps(4, end) infinite;
}

@keyframes loader-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes loader-node {
    to {
        transform: translate3d(0, -8px, 0) scale(1.25);
        opacity: 0.5;
    }
}

@keyframes loader-dots {
    0% {
        content: "";
    }

    25% {
        content: ".";
    }

    50% {
        content: "..";
    }

    75%,
    100% {
        content: "...";
    }
}

@media (prefers-reduced-motion: reduce) {

    .loader__ring,
    .loader__node,
    .loader__dots::after {
        animation: none;
    }
}
</style>
