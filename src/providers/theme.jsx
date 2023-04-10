import { createContext, useEffect, useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from '../support/constants';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(themeMediaQuery.matches ? DARK_THEME : LIGHT_THEME);
    themeMediaQuery.addEventListener('change', (e) => {
      setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
    });
  }, []);

  const toggleTheme = () => {
    const name = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    localStorage.setItem('theme', name);
    setTheme(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
