import { LOCAL_STORAGE_THEME_KEY } from 'constants/localStorage';
import { THEME, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);

    document.body.className = newTheme;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme: theme || THEME.LIGHT, toggleTheme };
}
