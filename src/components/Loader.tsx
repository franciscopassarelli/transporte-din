
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Truck } from 'lucide-react';

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
        <div className="mb-6 flex items-center justify-center">
          <Truck className="h-8 w-8 mr-2 text-primary" />
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-primary">Transporte</span>Dinámico
          </span>
        </div>
        <div className="loader-spinner mx-auto"></div>
      </div>
    </div>
  );
};

export default Loader;
