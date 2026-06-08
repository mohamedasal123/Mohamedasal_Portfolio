<template>
  <div class="tech-bg" aria-hidden="true">
    <canvas ref="canvasEl" class="tech-canvas"></canvas>

    <!-- spotlight follows cursor -->
    <div
      v-if="cursorEnabled"
      class="spotlight"
      :style="{ transform: `translate3d(${cx - 350}px, ${cy - 350}px, 0)` }"
    ></div>

    <!-- top veil so content is readable -->
    <div class="veil"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  cursorEnabled: { type: Boolean, default: false },
  cx: { type: Number, default: 0 },
  cy: { type: Number, default: 0 },
})

const canvasEl = ref(null)

let ctx, W, H, raf
let nodes = []
let mouse = { x: -9999, y: -9999 }

const NODE_COUNT = () => Math.min(90, Math.floor((W * H) / 14000))
const MAX_DIST    = 160
const MOUSE_DIST  = 200
const MOUSE_PULL  = 0.018   // how strongly nodes drift toward cursor
const SPEED       = 0.38

/* ── helpers ─────────────────────────── */
const rand  = (a, b) => a + Math.random() * (b - a)
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

/* ── node factory ────────────────────── */
function makeNode(i) {
  return {
    id: i,
    x:  rand(0, W),
    y:  rand(0, H),
    vx: rand(-SPEED, SPEED),
    vy: rand(-SPEED, SPEED),
    r:  rand(1.5, 3.2),
    pulse: rand(0, Math.PI * 2),   // phase offset for size pulse
  }
}

function initNodes() {
  nodes = Array.from({ length: NODE_COUNT() }, (_, i) => makeNode(i))
}

/* ── resize ──────────────────────────── */
function resize() {
  W = canvasEl.value.width  = window.innerWidth
  H = canvasEl.value.height = window.innerHeight
  initNodes()
}

/* ── draw frame ──────────────────────── */
function draw(ts) {
  ctx.clearRect(0, 0, W, H)

  /* update positions */
  for (const n of nodes) {
    /* gentle mouse attraction */
    if (props.cursorEnabled) {
      const dx = mouse.x - n.x
      const dy = mouse.y - n.y
      const d  = Math.sqrt(dx * dx + dy * dy)
      if (d < MOUSE_DIST) {
        const force = (1 - d / MOUSE_DIST) * MOUSE_PULL
        n.vx += dx * force
        n.vy += dy * force
      }
    }

    /* speed cap */
    const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
    if (spd > SPEED * 2.2) {
      n.vx = (n.vx / spd) * SPEED * 2.2
      n.vy = (n.vy / spd) * SPEED * 2.2
    }

    n.x += n.vx
    n.y += n.vy
    n.pulse += 0.018

    /* wrap edges with small margin */
    if (n.x < -20) n.x = W + 20
    if (n.x > W + 20) n.x = -20
    if (n.y < -20) n.y = H + 20
    if (n.y > H + 20) n.y = -20
  }

  /* draw connections */
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const d  = Math.sqrt(dx * dx + dy * dy)

      if (d < MAX_DIST) {
        const alpha = clamp((1 - d / MAX_DIST) * 0.55, 0, 0.55)

        /* check if near mouse — boost those lines */
        const midX = (a.x + b.x) / 2
        const midY = (a.y + b.y) / 2
        const md   = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2)
        const boost = props.cursorEnabled && md < MOUSE_DIST
          ? (1 - md / MOUSE_DIST) * 0.5
          : 0

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(96, 165, 250, ${alpha + boost})`
        ctx.lineWidth   = 0.6 + boost * 0.8
        ctx.stroke()
      }
    }
  }

  /* draw nodes */
  for (const n of nodes) {
    /* pulsing radius */
    const pr = n.r + Math.sin(n.pulse) * 0.6

    /* check proximity to mouse */
    const mdx = n.x - mouse.x
    const mdy = n.y - mouse.y
    const md  = Math.sqrt(mdx * mdx + mdy * mdy)
    const near = props.cursorEnabled && md < MOUSE_DIST * 0.6
    const glow = near ? (1 - md / (MOUSE_DIST * 0.6)) : 0

    /* outer glow ring */
    if (near) {
      ctx.beginPath()
      ctx.arc(n.x, n.y, pr + 6 * glow, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(96, 165, 250, ${0.08 * glow})`
      ctx.fill()
    }

    /* node dot */
    ctx.beginPath()
    ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
    ctx.fillStyle = near
      ? `rgba(147, 197, 253, ${0.55 + glow * 0.4})`
      : `rgba(96, 165, 250, ${0.32 + Math.sin(n.pulse) * 0.08})`
    ctx.fill()
  }

  raf = requestAnimationFrame(draw)
}

/* ── pointer tracking ────────────────── */
function onMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}
function onLeave() {
  mouse.x = -9999
  mouse.y = -9999
}

/* ── lifecycle ───────────────────────── */
onMounted(() => {
  ctx = canvasEl.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize, { passive: true })
  if (props.cursorEnabled) {
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave, { passive: true })
  }
  raf = requestAnimationFrame(draw)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerleave', onLeave)
})
</script>

<style scoped>
.tech-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: var(--bg-color);
  transition: background-color 0.5s ease;
}

.tech-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* radial spotlight follows cursor */
.spotlight {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.06) 0%,
    rgba(99, 102, 241, 0.03) 45%,
    transparent 70%
  );
  pointer-events: none;
  transition: transform 0.05s linear;
  will-change: transform;
}

:global(.dark) .spotlight {
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.09) 0%,
    rgba(99, 102, 241, 0.05) 45%,
    transparent 70%
  );
}

/* subtle overlay so text stays readable */
.veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(248, 250, 252, 0.15) 0%,
    rgba(248, 250, 252, 0.05) 50%,
    rgba(248, 250, 252, 0.25) 100%
  );
  transition: background 0.5s ease;
}

:global(.dark) .veil {
  background: linear-gradient(
    to bottom,
    rgba(8, 11, 18, 0.15) 0%,
    rgba(8, 11, 18, 0.05) 50%,
    rgba(8, 11, 18, 0.25) 100%
  );
}
</style>