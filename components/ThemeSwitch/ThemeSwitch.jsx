import { memo, useEffect } from "react";
import clsx from "clsx";

import { useTheme } from "providers/Theme";
import Switch from "components/Switch";

import { LIGHT, DARK, THEMES } from "consts/theme";

import styles from './ThemeSwitch.module.css';

const ThemeSwitch = () => {
    const { theme, onToggle: onChange } = useTheme();
    const value = !THEMES.get(theme);

    useEffect(() => {
        const getClassName = token => `${token.toLowerCase()}-theme`;
        const { classList } = document.body;

        classList.toggle(getClassName(LIGHT), value);
        classList.toggle(getClassName(DARK), !value);
    }, [value]);

    return (
        <Switch
            labelProps={{
                className: styles.switch
            }}
            inputProps={{
                value,
                checked: value,
                onChange
            }}
            classes={{
                handle: clsx(styles.slider, styles.round)
            }}
        />
    );
};

export default memo(ThemeSwitch);
