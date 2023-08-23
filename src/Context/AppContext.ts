import { createContext } from "react"
import { COLOR_THEMES, FONT_FAMILY, SELECTED_OPTION } from "../Utilities/Types";

type AppContextType = {
    colorTheme: string,
    setColorTheme: Function,
    fontFamily: string,
    setFontFamily: Function,
    selectedOption: string,
    setSelectedOption: Function,
    pomodoroTime: number,
    setPomodoroTime: Function,
    shortBreakTime: number,
    setShortBreakTime: Function,
    longBreakTime: number,
    setLongBreakTime: Function,
    currentPomodoroTime: number,
    setCurrentPomodoroTime: Function,
    currentShortBreakTime: number,
    setCurrentShortBreakTime: Function,
    currentLongBreakTime: number,
    setCurrentLongBreakTime: Function,
    timerTimeout: any,
    setTimerTimeout: Function,
}

export const AppContext = createContext<AppContextType>({
    colorTheme: COLOR_THEMES.ORANGE,
    setColorTheme: () => { },
    fontFamily: FONT_FAMILY.KUMBH_SANS,
    setFontFamily: () => { },
    selectedOption: SELECTED_OPTION.POMODORO,
    setSelectedOption: () => { },
    pomodoroTime: 0,
    setPomodoroTime: () => { },
    shortBreakTime: 0,
    setShortBreakTime: () => { },
    longBreakTime: 0,
    setLongBreakTime: () => { },
    currentPomodoroTime: 0,
    setCurrentPomodoroTime: () => { },
    currentShortBreakTime: 0,
    setCurrentShortBreakTime: () => { },
    currentLongBreakTime: 0,
    setCurrentLongBreakTime: () => { },
    timerTimeout: null,
    setTimerTimeout: () => { }
});
