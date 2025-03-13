'use client';

import { useEffect, useState } from 'react';

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-effect-outer"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div 
        className="cursor-effect-inner"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        .cursor-effect-outer {
          pointer-events: none;
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%);
          transform: translate(-50%, -50%);
          z-index: 9999;
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        .cursor-effect-inner {
          pointer-events: none;
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(16, 185, 129, 0.8);
          transform: translate(-50%, -50%);
          z-index: 10000;
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.4);
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
            transform: translate(-50%, -50%) scale(1);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @media (hover: none) {
          .cursor-effect-outer, .cursor-effect-inner {
            display: none;
          }
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
}