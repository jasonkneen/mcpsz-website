'use client'

import { useState, useEffect, useRef, useCallback } from "react"
import { AnimatedTerminal } from "@/components/animated-terminal"

const TRANSITION_DURATION_MS = 1000
const DEFAULT_AUTO_ROTATE_INTERVAL_MS = 5000

interface MediaItem {
  type: 'image' | 'terminal'
  src?: string
  alt?: string
}

interface MediaCarouselProps {
  className?: string
  mediaItems: MediaItem[]
  showHeader?: boolean
  autoRotateInterval?: number
  initialAutoRotate?: boolean
  onMediaChange?: (mediaItem: MediaItem, index: number) => void
}

export function MediaCarousel({
  className = '',
  mediaItems,
  showHeader = true,
  autoRotateInterval = DEFAULT_AUTO_ROTATE_INTERVAL_MS,
  onMediaChange,
  initialAutoRotate = true,
}: MediaCarouselProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(initialAutoRotate)
  const [rotationDirection, setRotationDirection] = useState<'left' | 'right'>('right')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null)
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimers = useCallback(() => {
    if (autoRotateTimerRef.current) {
      clearInterval(autoRotateTimerRef.current)
      autoRotateTimerRef.current = null
    }
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current)
      transitionTimerRef.current = null
    }
  }, [])

  const startTransition = useCallback(() => {
    setIsTransitioning(true)
    transitionTimerRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION_MS)
  }, [])

  const goToSlide = useCallback((index: number) => {
    startTransition()
    setActiveMediaIndex(index)
    setRotationDirection(prev => prev === 'right' ? 'left' : 'right')
  }, [startTransition])

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating || mediaItems.length <= 1) return

    autoRotateTimerRef.current = setInterval(() => {
      startTransition()
      setActiveMediaIndex(prev => (prev + 1) % mediaItems.length)
      setRotationDirection(prev => prev === 'right' ? 'left' : 'right')
    }, autoRotateInterval)

    return clearTimers
  }, [isAutoRotating, mediaItems.length, autoRotateInterval, startTransition, clearTimers])

  // Cleanup on unmount
  useEffect(() => clearTimers, [clearTimers])

  // Notify parent of media changes
  useEffect(() => {
    if (onMediaChange && mediaItems[activeMediaIndex]) {
      onMediaChange(mediaItems[activeMediaIndex], activeMediaIndex)
    }
  }, [activeMediaIndex, mediaItems, onMediaChange])

  const handleCarouselNav = (index: number): void => {
    clearTimers()
    goToSlide(index)

    // Restart auto-rotation if enabled
    if (isAutoRotating && mediaItems.length > 1) {
      autoRotateTimerRef.current = setInterval(() => {
        startTransition()
        setActiveMediaIndex(prev => (prev + 1) % mediaItems.length)
        setRotationDirection(prev => prev === 'right' ? 'left' : 'right')
      }, autoRotateInterval)
    }
  }

  const toggleAutoRotate = (): void => {
    setIsAutoRotating(prev => !prev)
  }

  const getMediaKey = (item: MediaItem, index: number): string => {
    return `${item.type}-${item.src || index}`
  }

  return (
    <div className={className}>
      {showHeader && (
        <div className="flex items-center border-b border-gray-800 px-4 py-2 bg-gray-950">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-4 text-sm text-gray-400">
            {mediaItems[activeMediaIndex].type === 'terminal' ? 'terminal' : 'vscode'}
          </div>
        </div>
      )}

      <div className="relative" style={{ height: '400px' }}>
        <div
          className="perspective-container"
          style={{
            perspective: '2000px',
            height: '100%',
            width: '100%',
            transformStyle: 'preserve-3d'
          }}
        >
          {mediaItems.map((item, index) => (
            <div
              key={getMediaKey(item, index)}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                activeMediaIndex === index
                  ? 'opacity-100 z-10 transform-none visible'
                  : 'opacity-0 z-0 invisible'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                transform: activeMediaIndex === index
                  ? 'rotateY(0deg) scale(1) translateZ(0)'
                  : `rotateY(${rotationDirection === 'right' ? '90deg' : '-90deg'}) scale(0.95) translateZ(-50px)`,
                transformStyle: 'preserve-3d',
                transformOrigin: rotationDirection === 'right' ? 'left center' : 'right center',
                boxShadow: activeMediaIndex === index ? '0 10px 25px rgba(0, 0, 0, 0.4)' : 'none',
                transition: `all ${TRANSITION_DURATION_MS * 1.2}ms cubic-bezier(0.4, 0, 0.2, 1)`
              }}
            >
              {item.type === 'image' ? (
                <div className="w-full h-full bg-gray-950 flex items-center justify-center">
                  <img
                    src={item.src || ''}
                    alt={item.alt || ''}
                    className="w-full h-full object-contain bg-gray-950"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-gray-950 overflow-hidden">
                  <AnimatedTerminal className="h-full w-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showHeader && mediaItems.length > 1 && (
        <div className="flex justify-center p-4 bg-gray-950 border-t border-gray-800">
          <div className="flex space-x-2">
            {mediaItems.map((item, index) => (
              <button
                key={getMediaKey(item, index)}
                onClick={() => handleCarouselNav(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeMediaIndex === index ? 'bg-emerald-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={toggleAutoRotate}
            className={`ml-4 text-xs px-2 py-1 rounded ${
              isAutoRotating
                ? 'bg-emerald-900 text-emerald-300'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            {isAutoRotating ? 'Auto-rotate: On' : 'Auto-rotate: Off'}
          </button>
        </div>
      )}
    </div>
  )
}
