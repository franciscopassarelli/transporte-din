
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Loader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn('loader', isLoaded && 'loaded')}>
      <div className="loader-content">
        <div className="mb-6">
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-primary">Dynamic</span>Transport
          </span>
        </div>
        <div className="loader-spinner mx-auto"></div>
      </div>
    </div>
  );
};

export default Loader;
