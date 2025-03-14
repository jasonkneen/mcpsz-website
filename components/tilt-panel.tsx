'use client'

import React, { useState, useRef, useEffect } from 'react'

interface TiltPanelProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function TiltPanel({ className = '', children, onClick }: TiltPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({})
  const [hasShimmer, setHasShimmer] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current || !isHovering) return
    
    const panel = panelRef.current
    const rect = panel.getBoundingClientRect()
    
    // Calculate mouse position relative to the panel (0 to 1)
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    // Calculate tilt based on mouse position
    // Translate from 0-1 to -10 to 10 degrees
    const tiltX = (y - 0.5) * 20
    const tiltY = (0.5 - x) * 20
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transition: 'transform 0.05s ease-out',
      transformStyle: 'preserve-3d',
      willChange: 'transform'
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    setHasShimmer(true)
    
    // Set initial tilt to avoid sudden jump when mouse moves
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(5deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out',
      transformStyle: 'preserve-3d',
      willChange: 'transform'
    })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Reset tilt when mouse leaves
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
      transformStyle: 'preserve-3d',
      willChange: 'auto'
    })
    
    // Reset shimmer after animation completes
    setTimeout(() => {
      setHasShimmer(false)
    }, 2500) // Match shimmer animation duration
  }

  return (
    <div
      ref={panelRef}
      className={`tilt-panel ${hasShimmer ? 'has-shimmer' : ''} ${className}`.trim()}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-tilt="true"
    >
      {children}
    </div>
  )
}