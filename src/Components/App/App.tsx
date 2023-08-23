import { useState } from "react"
import { COLOR_THEMES, FONT_FAMILY, SELECTED_OPTION } from "../../Utilities/Types"
import { AppContext } from "../../Context/AppContext"

import Title from "../Title/Title";
import Menu from "../Menu/Menu";
import Clock from "../Clock/Clock";
import Settings from "../Settings/Settings";

import styles from './App.module.scss';

const App = () => {
    const [colorTheme, setColorTheme] = useState(COLOR_THEMES.ORANGE);
    const [fontFamily, setFontFamily] = useState(FONT_FAMILY.KUMBH_SANS);
    const [selectedOption, setSelectedOption] = useState(SELECTED_OPTION.POMODORO);

    const [pomodoroTime, setPomodoroTime] = useState(3600);
    const [shortBreakTime, setShortBreakTime] = useState(300);
    const [longBreakTime, setLongBreakTime] = useState(600);

    const [currentPomodoroTime, setCurrentPomodoroTime] = useState(0)
    const [currentShortBreakTime, setCurrentShortBreakTime] = useState(0)
    const [currentLongBreakTime, setCurrentLongBreakTime] = useState(0);

    const [timerTimeout, setTimerTimeout] = useState(null);

    return (
        <AppContext.Provider value={({
            colorTheme, setColorTheme,
            fontFamily, setFontFamily,
            selectedOption, setSelectedOption,
            pomodoroTime, setPomodoroTime,
            shortBreakTime, setShortBreakTime,
            longBreakTime, setLongBreakTime,
            currentPomodoroTime, setCurrentPomodoroTime,
            currentShortBreakTime, setCurrentShortBreakTime,
            currentLongBreakTime, setCurrentLongBreakTime,
            timerTimeout, setTimerTimeout,
        })}>
            <div className={
                fontFamily === FONT_FAMILY.ROBOTO ? styles[`font-roboto`] :
                    fontFamily === FONT_FAMILY.KUMBH_SANS ? styles[`font-kumbh`] :
                        fontFamily === FONT_FAMILY.SPACE_MONO ? styles[`font-space`] : ``
            }>
                <Title />
                <Menu />
                <Clock />
                <Settings />
            </div>
        </AppContext.Provider>
    )
}

export default App