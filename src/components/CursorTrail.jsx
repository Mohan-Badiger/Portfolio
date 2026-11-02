import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // 1. Don't run on touch devices (mobile/tablet) or if user prefers reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasFinePointer || prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = window.innerWidth
    let height = window.innerHeight

    const setupCanvasSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    setupCanvasSize()

    // Mouse state
    const mouse = { x: 0, y: 0, lastX: 0, lastY: 0, active: false }

    // Arrays for trail points and particles
    const trailPoints = []
    const particles = []

    const maxTrailLength = 12
    const colors = [
      'rgba(168, 85, 247, ', // Purple
      'rgba(236, 72, 153, ', // Pink
      'rgba(59, 130, 246, ', // Blue
      'rgba(34, 197, 94, ',  // Green
      'rgba(234, 179, 8, ',  // Yellow
    ]

    let animationFrameId = null
    let isLoopRunning = false

    const createParticle = (x, y, isBurst = false) => {
      const colorIndex = Math.floor(Math.random() * colors.length)
      const baseColor = colors[colorIndex]

      const angle = Math.random() * Math.PI * 2
      const speed = isBurst ? Math.random() * 5 + 2 : Math.random() * 1.5 + 0.5

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
        vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.5,
        alpha: 1.0,
        decay: isBurst ? Math.random() * 0.02 + 0.01 : Math.random() * 0.03 + 0.02,
        size: isBurst ? Math.random() * 8 + 4 : Math.random() * 5 + 3,
        baseColor,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        spikes: 4,
        innerRadiusRatio: 0.3,
      })
    }

    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, color) => {
      let rot = (Math.PI / 2) * 3
      let x = cx
      let y = cy
      const step = Math.PI / spikes

      ctx.beginPath()
      ctx.moveTo(cx, cy - outerRadius)
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }
      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw glowing vector trail
      if (trailPoints.length > 1) {
        ctx.shadowBlur = 12
        ctx.shadowColor = 'rgba(168, 85, 247, 0.5)'

        ctx.beginPath()
        ctx.moveTo(trailPoints[0].x, trailPoints[0].y)

        for (let i = 1; i < trailPoints.length - 1; i++) {
          const xc = (trailPoints[i].x + trailPoints[i + 1].x) / 2
          const yc = (trailPoints[i].y + trailPoints[i + 1].y) / 2
          ctx.quadraticCurveTo(trailPoints[i].x, trailPoints[i].y, xc, yc)
        }

        ctx.lineTo(trailPoints[trailPoints.length - 1].x, trailPoints[trailPoints.length - 1].y)

        const grad = ctx.createLinearGradient(
          trailPoints[0].x,
          trailPoints[0].y,
          trailPoints[trailPoints.length - 1].x,
          trailPoints[trailPoints.length - 1].y
        )
        grad.addColorStop(0, 'rgba(236, 72, 153, 0.05)')
        grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.35)')
        grad.addColorStop(1, 'rgba(59, 130, 246, 0.7)')

        ctx.strokeStyle = grad
        ctx.lineWidth = 3.5
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()

        ctx.shadowBlur = 0
      }

      // 2. Update and draw star sparkles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay
        p.rotation += p.rotationSpeed

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        const color = `${p.baseColor}${p.alpha})`
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        ctx.shadowBlur = 8
        ctx.shadowColor = color

        drawStar(0, 0, p.spikes, p.size, p.size * p.innerRadiusRatio, color)
        ctx.restore()
      }

      // Handle trail decay when mouse stops moving
      if (!mouse.active && trailPoints.length > 0) {
        trailPoints.shift()
      }

      // Dynamic Idle Auto-Pause:
      // If nothing is animating or moving, stop RAF loop to conserve CPU/battery!
      if (trailPoints.length === 0 && particles.length === 0 && !mouse.active) {
        ctx.clearRect(0, 0, width, height)
        isLoopRunning = false
        animationFrameId = null
        return
      }

      animationFrameId = requestAnimationFrame(render)
    }

    const startLoopIfNeeded = () => {
      if (!isLoopRunning) {
        isLoopRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseMove = (e) => {
      mouse.active = true
      mouse.lastX = mouse.x
      mouse.lastY = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY

      trailPoints.push({ x: mouse.x, y: mouse.y })
      if (trailPoints.length > maxTrailLength) {
        trailPoints.shift()
      }

      const dx = mouse.x - mouse.lastX
      const dy = mouse.y - mouse.lastY
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed > 1) {
        const numParticles = Math.min(Math.floor(speed / 6) + 1, 3)
        for (let i = 0; i < numParticles; i++) {
          createParticle(mouse.x, mouse.y, false)
        }
      }

      startLoopIfNeeded()
    }

    // Set active false after short mouse stop so trail fades gracefully
    let mouseStopTimeout = null
    const handleMouseStop = () => {
      clearTimeout(mouseStopTimeout)
      mouseStopTimeout = setTimeout(() => {
        mouse.active = false
      }, 100)
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const handleMouseClick = (e) => {
      const burstCount = 14
      for (let i = 0; i < burstCount; i++) {
        createParticle(e.clientX, e.clientY, true)
      }
      startLoopIfNeeded()
    }

    const handleResize = () => {
      setupCanvasSize()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousemove', handleMouseStop, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('click', handleMouseClick, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleMouseStop)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('click', handleMouseClick)
      clearTimeout(mouseStopTimeout)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  )
}
