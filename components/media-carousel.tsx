'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { AnimatedTerminal } from "@/components/animated-terminal"

interface MediaItem {
  type: 'image' | 'terminal';
  src?: string;
  alt?: string;
}

interface MediaCarouselProps {
  className?: string;
  mediaItems: MediaItem[];
  showHeader?: boolean;
  autoRotateInterval?: number;
  initialAutoRotate?: boolean;
  onMediaChange?: (mediaItem: MediaItem, index: number) => void;
}

export function MediaCarousel({
  className = '',
  mediaItems,
  showHeader = true,
  autoRotateInterval = 5000,
  onMediaChange,
  initialAutoRotate = true,
}: MediaCarouselProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(initialAutoRotate);
  const [rotationDirection, setRotationDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Set up auto-rotation for the carousel
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveMediaIndex((prev) => {
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1000);
          const nextIndex = (prev + 1) % mediaItems.length;
          
          // More variety in animation directions - sometimes use random direction
          if (Math.random() > 0.5) {
            setRotationDirection(Math.random() > 0.5 ? 'right' : 'left');
          } else {
            // Alternate direction for predictable pattern
            setRotationDirection(prev => prev === 'right' ? 'left' : 'right');
          }
          // Alternate rotation direction for a more dynamic effect
          return nextIndex;
        });
      }, autoRotateInterval);
    }
    
    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [isAutoRotating, mediaItems.length, autoRotateInterval]);
  
  // Call onMediaChange when activeMediaIndex changes
  useEffect(() => {
    if (onMediaChange && mediaItems[activeMediaIndex]) {
      onMediaChange(mediaItems[activeMediaIndex], activeMediaIndex);
    }
  }, [activeMediaIndex, mediaItems, onMediaChange]);
  // Handle carousel navigation
  const handleCarouselNav = (index: number) => {
    const oldIndex = activeMediaIndex;
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    setActiveMediaIndex(index);
    
    // More variety in animation directions for manual navigation
    const randomFactor = Math.random();
    if (randomFactor < 0.33) {
      setRotationDirection('right');
    } else if (randomFactor < 0.66) {
      setRotationDirection('left');
    } else {
      setRotationDirection(index > oldIndex ? 'right' : 'left');
    }
    
    // Reset auto-rotation timer when manually navigating
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
    
    if (isAutoRotating) {
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveMediaIndex((prev) => {
          const nextIndex = (prev + 1) % mediaItems.length;
          setRotationDirection(prev => prev === 'right' ? 'left' : 'right');
          return nextIndex;
        });
      }, autoRotateInterval);
    }
  };
  
  // Toggle auto-rotation
  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  return (
    <div className={`${className}`}>
      {showHeader && (
        <div className="flex items-center border-b border-gray-800 px-4 py-2 bg-gray-950">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-4 text-sm text-gray-400">
            {mediaItems[activeMediaIndex].type === 'terminal' 
              ? 'terminal' 
              : 'vscode'
            }
          </div>
        </div>
      )}
      <div className="relative aspect-video">
        <div className="perspective-container" style={{ 
          perspective: '2000px', 
          height: '100%', 
          width: '100%', 
          transformStyle: 'preserve-3d'
        }}>
          {mediaItems.map((item, index) => (
            <div 
              key={index}
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
                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {item.type === 'image' ? (
                <div className="w-full h-full bg-gray-950 flex items-center justify-center">
                  <img src={item.src || ''} alt={item.alt || ''} className="w-full h-full object-contain bg-gray-950" />
                </div>
              ) : ( 
                <div className="w-full h-full bg-gray-950 overflow-hidden">
                  <AnimatedTerminal className="h-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Navigation */}
      <div className="flex justify-center p-4 bg-gray-950 border-t border-gray-800">
        <div className="flex space-x-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
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
    </div>
  );
}