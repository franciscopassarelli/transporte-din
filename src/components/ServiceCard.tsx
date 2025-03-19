
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn(
      'group rounded-xl p-6 transition-all duration-300',
      'border border-border/50 hover:border-primary/50',
      'bg-white/80 hover:bg-white',
      'dark:bg-black/20 dark:hover:bg-black/30',
      'hover:shadow-lg hover:shadow-primary/5',
      'transform hover:-translate-y-1',
      className
    )}>
      <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center
                     transition-all duration-300 group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary transition-all duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 transition-all duration-300">{title}</h3>
      
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed transition-all duration-300">
        {description}
      </p>
      
      <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 transition-all duration-300">
        Saber más
      </Button>
    </div>
  );
};

export default ServiceCard;
