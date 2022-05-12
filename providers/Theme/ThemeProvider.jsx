import { createContext, useState, memo } from "react";

import { THEME } from "config";

export const ThemeContext = createContext(THEME);
export const ThemeDispatcher = createContext(() => null);

const ThemeProvider = ({ children, theme: defaultTheme }) => {
    const [theme, setThemeState] = useState(defaultTheme);

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
