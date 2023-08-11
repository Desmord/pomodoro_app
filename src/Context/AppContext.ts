import { createContext } from "react"
import { COLOR_THEMES } from "../Utilities/Types";

type AppContextType = {
    colorTheme: string,
    setColorTheme: Function,
}

export const AppContext = createContext<AppContextType>({
    colorTheme: COLOR_THEMES.ORANGE,
    setColorTheme: () => { }
});
