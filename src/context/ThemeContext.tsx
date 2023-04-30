import { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => { },
});

export function useTheme() {
  return useContext(ThemeContext);
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function setTheme(isDark: boolean) {
    setIsDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setTheme(true);
      document.documentElement.classList.add('dark');
    } else {
      setTheme(false);
      document.documentElement.classList.remove('dark');
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    loadTheme()
  };

  useEffect(() => {
    loadTheme();
    const isLocalStorageAvailable = typeof window.localStorage !== 'undefined';
    if (isLocalStorageAvailable) {
      const savedTheme = window.localStorage.getItem('theme');
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}