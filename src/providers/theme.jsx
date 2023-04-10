import { createContext, useEffect, useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from '../support/constants';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const toggleTheme = () => {
    const name = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
