import * as type from 'redux/action/type/colorTheme';


export const setDarkTheme = (color) => ({
    type: type.SET_DARK_THEME,
    payload: {
        color
    }
});

export const setLightTheme = (color) => ({
    type: type.SET_LIGHT_THEME,
    payload: {
        color
    }
});