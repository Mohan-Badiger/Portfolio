import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Mouse state
    const mouse = { x: 0, y: 0, lastX: 0, lastY: 0, active: false }
    
    // Arrays for trail points and particles
    const trailPoints = []
    const particles = []

    const maxTrailLength = 12
    const colors = [
      'rgba(168, 85, 247, ', // Purple
      'rgba(236, 72, 153, ', // Pink
      'rgba(59, 130, 246, ',  // Blue
      'rgba(34, 197, 94, ',   // Green
      'rgba(234, 179, 8, ',   // Yellow
    ]

    // Handle window resizing
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)

    // Track mouse position
    const handleMouseMove = (e) => {
      mouse.active = true
      mouse.lastX = mouse.x
      mouse.lastY = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY

      // Add to trail
      trailPoints.push({ x: mouse.x, y: mouse.y })
      if (trailPoints.length > maxTrailLength) {
        trailPoints.shift()
      }

      // Calculate speed
      const dx = mouse.x - mouse.lastX
      const dy = mouse.y - mouse.lastY
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Spawn sprinkles on movement (more speed = more particles)
      if (speed > 1) {
        const numParticles = Math.min(Math.floor(speed / 5) + 1, 4)
        for (let i = 0; i < numParticles; i++) {
          createParticle(mouse.x, mouse.y, false)
        }
      }
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const handleMouseClick = (e) => {
      // Spawn burst of sprinkle particles on click
      const burstCount = 18
      for (let i = 0; i < burstCount; i++) {
        createParticle(e.clientX, e.clientY, true)
      }
    }

    // Particle constructor helper
    const createParticle = (x, y, isBurst = false) => {
      const colorIndex = Math.floor(Math.random() * colors.length)
      const baseColor = colors[colorIndex]
      
      const angle = Math.random() * Math.PI * 2
      const speed = isBurst 
        ? Math.random() * 5 + 2 
        : Math.random() * 1.5 + 0.5

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
        // Star proportions
        spikes: 4,
        innerRadiusRatio: 0.3
      })
    }

    // Draw 4-pointed star sparkle
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
    let animationFrameId
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw glowing vector trail
      if (trailPoints.length > 1) {
        ctx.shadowBlur = 15
        ctx.shadowColor = 'rgba(168, 85, 247, 0.6)'
        
        ctx.beginPath()
        ctx.moveTo(trailPoints[0].x, trailPoints[0].y)

        for (let i = 1; i < trailPoints.length - 1; i++) {
          const xc = (trailPoints[i].x + trailPoints[i + 1].x) / 2
          const yc = (trailPoints[i].y + trailPoints[i + 1].y) / 2
          ctx.quadraticCurveTo(trailPoints[i].x, trailPoints[i].y, xc, yc)
        }

        ctx.lineTo(trailPoints[trailPoints.length - 1].x, trailPoints[trailPoints.length - 1].y)
        
        // Gradient color for trail
        const grad = ctx.createLinearGradient(
          trailPoints[0].x, trailPoints[0].y,
          trailPoints[trailPoints.length - 1].x, trailPoints[trailPoints.length - 1].y
        )
        grad.addColorStop(0, 'rgba(236, 72, 153, 0.1)') // Fade out at tail
        grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.4)')
        grad.addColorStop(1, 'rgba(59, 130, 246, 0.8)') // Glowing blue lead
        
        ctx.strokeStyle = grad
        ctx.lineWidth = 4
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
        
        // Reset shadow for particles
        ctx.shadowBlur = 0
      }

      // 2. Update and draw star sparkles (sprinkles)
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
        
        // Add light glow to sparkles
        ctx.shadowBlur = 10
        ctx.shadowColor = color
        
        drawStar(0, 0, p.spikes, p.size, p.size * p.innerRadiusRatio, color)
        ctx.restore()
      }

      // Handle trail decay when mouse stops moving
      if (!mouse.active && trailPoints.length > 0) {
        trailPoints.shift()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    // Register event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('click', handleMouseClick)

    // Start loop
    render()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('click', handleMouseClick)
      cancelAnimationFrame(animationFrameId)
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
