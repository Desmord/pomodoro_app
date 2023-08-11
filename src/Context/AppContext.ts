import { createContext } from "react"
import { COLOR_THEMES, FONT_FAMILY, SELECTED_OPTION } from "../Utilities/Types";

type AppContextType = {
    colorTheme: string,
    setColorTheme: Function,
    fontFamily: string,
    setFontFamily: Function,
    selectedOption: string,
    setSelectedOption: Function,
}

export const AppContext = createContext<AppContextType>({
    colorTheme: COLOR_THEMES.ORANGE,
    setColorTheme: () => { },
    fontFamily: FONT_FAMILY.KUMBH_SANS,
    setFontFamily: () => { },
    selectedOption: SELECTED_OPTION.POMODORO,
    setSelectedOption: () => { }
});
