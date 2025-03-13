'use client'

import React, { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create gradient colors
    const colors = {
      darkBlue: '#0f172a',
      darkGray: '#111827',
      emerald: 'rgba(16, 185, 129, 0.05)',
      black: '#000000'
    }

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw the animated background
    const render = () => {
      time += 0.005
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create radial gradient
      const gradientSize = Math.max(canvas.width, canvas.height) * 1.5
      const centerX = canvas.width / 2 + Math.sin(time * 0.2) * canvas.width * 0.1
      const centerY = canvas.height / 2 + Math.cos(time * 0.3) * canvas.height * 0.1
      
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, gradientSize
      )
      
      gradient.addColorStop(0, colors.darkGray)
      gradient.addColorStop(0.5, colors.darkBlue)
      gradient.addColorStop(1, colors.black)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add subtle emerald glow spots
      const numSpots = 5
      for (let i = 0; i < numSpots; i++) {
        const x = canvas.width * (0.1 + 0.8 * Math.sin(time + i * Math.PI / numSpots))
        const y = canvas.height * (0.1 + 0.8 * Math.cos(time * 0.7 + i * Math.PI / numSpots))
        
        const spotGradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, canvas.width * 0.3
        )
        
        spotGradient.addColorStop(0, colors.emerald)
        spotGradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.01)')
        spotGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.fillStyle = spotGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      animationFrameId = requestAnimationFrame(render)
    }
    
    render()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
}