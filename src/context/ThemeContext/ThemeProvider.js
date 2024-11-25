import { useMemo, useState } from 'react';
import { THEME, ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from 'constants/localStorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || THEME.LIGHT;

export const ThemeProvider = (props) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
