import { PERSITANCE_DRIVER } from "config";
import { PERSITANCE_KEY } from "consts/theme";

const getDriver = () => {
    if (typeof window !== 'undefined' && PERSITANCE_DRIVER in window) {
        return window[PERSITANCE_DRIVER];
    }
    return null;
};

export const setItem = value => getDriver()?.setItem(PERSITANCE_KEY, value);

export const getItem = () => getDriver()?.getItem(PERSITANCE_KEY);
