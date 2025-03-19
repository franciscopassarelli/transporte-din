
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  rating = 5,
  imageSrc,
  className,
}) => {
  return (
    <div className={cn(
      'rounded-xl p-6 glass-morphism transition-all duration-300',
      'hover:shadow-lg hover:shadow-primary/5',
      'transform hover:-translate-y-1',
      className
    )}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          {imageSrc ? (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
              <img src={imageSrc} alt={author} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-semibold text-primary">{author.charAt(0)}</span>
            </div>
          )}
          
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-muted-foreground">{position}, {company}</p>
          </div>
        </div>
        
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                'h-4 w-4',
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              )} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-muted-foreground italic text-sm mb-4">
        "{quote}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
