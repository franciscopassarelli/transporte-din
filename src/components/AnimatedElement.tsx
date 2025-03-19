
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'blur-in';
  threshold?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  duration = 700,
  animation = 'fade-in',
  threshold = 0.2,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add('animated');
              }
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'transform translate-y-16';
      case 'slide-down':
        return 'transform -translate-y-16';
      case 'slide-left':
        return 'transform translate-x-16';
      case 'slide-right':
        return 'transform -translate-x-16';
      case 'scale-in':
        return 'transform scale-95';
      case 'blur-in':
        return 'filter blur-sm';
      default:
        return '';
    }
  };
  
  return (
    <div
      ref={elementRef}
      className={cn(
        'animate-on-scroll',
        getAnimationClass(),
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
