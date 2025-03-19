
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if user has a preference stored
    const storedPreference = localStorage.getItem('darkMode');
    
    // Check if system preference is dark
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on stored preference or system preference
    if (storedPreference !== null) {
      setIsDarkMode(storedPreference === 'true');
    } else {
      setIsDarkMode(systemPrefersDark);
    }
    
    // Apply theme class based on state
    applyTheme(storedPreference === 'true' || (storedPreference === null && systemPrefersDark));
  }, []);
  
  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    localStorage.setItem('darkMode', String(newValue));
    applyTheme(newValue);
  };
  
  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return (
    <Toggle 
      aria-label="Alternar modo oscuro"
      pressed={isDarkMode}
      onPressedChange={toggleDarkMode}
      className={cn("ml-auto rounded-full p-2", {
        "bg-secondary/80 text-foreground": !isDarkMode,
        "bg-secondary text-primary": isDarkMode
      })}
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default DarkModeToggle;
