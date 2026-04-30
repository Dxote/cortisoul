import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  bg: string;
  surface: string;
  text: string;
  accent: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateTheme: (newColors: Partial<ThemeColors>) => void;
  resetTheme: () => void;
}

const defaultColors: ThemeColors = {
  bg: '#050505',
  surface: '#0f0f0f',
  text: '#ffffff',
  accent: '#00f2ff',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ThemeColors>(() => {
    const saved = localStorage.getItem('cortisoul_theme');
    return saved ? JSON.parse(saved) : defaultColors;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Apply colors to CSS variables
    const root = document.documentElement;
    root.style.setProperty('--bg-color', colors.bg);
    root.style.setProperty('--surface-color', colors.surface);
    root.style.setProperty('--text-primary', colors.text);
    root.style.setProperty('--accent-color', colors.accent);

    // Derived variables
    root.style.setProperty('--accent-muted', `${colors.accent}1a`);
    root.style.setProperty('--navbar-bg', `${colors.bg}b3`); // 0.7 opacity

    localStorage.setItem('cortisoul_theme', JSON.stringify(colors));
  }, [colors]);

  const updateTheme = (newColors: Partial<ThemeColors>) => {
    setIsTransitioning(true);

    let overlay = document.getElementById('theme-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'theme-overlay';
      document.body.appendChild(overlay);
    }

    overlay.classList.add('active');

    setTimeout(() => {
      setColors(prev => ({ ...prev, ...newColors }));

      setTimeout(() => {
        overlay?.classList.remove('active');
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const resetTheme = () => {
    updateTheme(defaultColors);
  };

  return (
    <ThemeContext.Provider value={{ colors, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
