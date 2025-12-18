'use client'

import React, { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

const SHIMMER_DURATION_MS = 2500

interface TiltPanelProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function TiltPanel({ className, children, onClick }: TiltPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({})
  const [hasShimmer, setHasShimmer] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!panelRef.current || !isHovering) return

    const panel = panelRef.current
    const rect = panel.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const tiltX = (y - 0.5) * 20
    const tiltY = (0.5 - x) * 20

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transition: 'transform 0.05s ease-out',
      transformStyle: 'preserve-3d',
      willChange: 'transform'
    })
  }

  const handleMouseEnter = (): void => {
    setIsHovering(true)
    setHasShimmer(true)

    setTiltStyle({
      transform: 'perspective(1000px) rotateX(5deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out',
      transformStyle: 'preserve-3d',
      willChange: 'transform'
    })
  }

  const handleMouseLeave = (): void => {
    setIsHovering(false)
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
      transformStyle: 'preserve-3d',
      willChange: 'auto'
    })

    setTimeout(() => {
      setHasShimmer(false)
    }, SHIMMER_DURATION_MS)
  }

  return (
    <div
      ref={panelRef}
      className={cn('tilt-panel', hasShimmer && 'has-shimmer', className)}
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