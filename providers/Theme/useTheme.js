import { THEMES } from "consts/theme";
import { useContext } from "react";

import { ThemeContext, ThemeDispatcher } from "./ThemeProvider";

export default function useTheme() {
    const theme = useContext(ThemeContext);
    const changeThemeHandler = useContext(ThemeDispatcher);

    const onChange = changeThemeHandler;
    const onToggle = () => {
        onChange(theme => Array.from(THEMES, ([name]) => name)[
            Number(!THEMES.get(theme))
        ]);
    };

    return {
        theme,
        onChange,
        onToggle
    };
};
