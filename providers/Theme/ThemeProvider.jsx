import { createContext, useState, useEffect, memo } from "react";

import { THEME } from "config";
import { getItem, setItem } from "services/persistance";
import { THEMES } from "consts/theme";

export const ThemeContext = createContext(THEME);
export const ThemeDispatcher = createContext(() => null);

const ThemeProvider = ({ children, theme: defaultTheme }) => {
    const [theme, setThemeState] = useState(() =>
        THEMES.has(getItem())
            ? getItem()
            : defaultTheme
    );

    useEffect(() => {
        setItem(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatcher.Provider value={setThemeState}>
                {children}
            </ThemeDispatcher.Provider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.defaultProps = {
    theme: THEME
};

export default memo(
    ThemeProvider,
    (prevProps, nextProps) => prevProps.theme === nextProps.theme
);
