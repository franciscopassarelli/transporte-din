
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const animateOnScroll = () => {
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // If element is in viewport
        if (elementTop < window.innerHeight * 0.8 && elementBottom > 0) {
          element.classList.add('animated');
        }
      });
    };
    
    // Initial check on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
};

export default useScrollAnimation;
