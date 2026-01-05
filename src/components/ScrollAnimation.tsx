
import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { rootMargin: '0px 0px -20% 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'slide-in-left':
        return 'animate-slide-in-left opacity-100';
      case 'slide-in-right':
        return 'animate-slide-in-right opacity-100';
      case 'scale-in':
        return 'animate-scale-in opacity-100';
      default:
        return 'animate-fade-in opacity-100';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
