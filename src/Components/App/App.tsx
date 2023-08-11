import { useState } from "react"
import { COLOR_THEMES, FONT_FAMILY, SELECTED_OPTION } from "../../Utilities/Types"
import { AppContext } from "../../Context/AppContext"

import styles from './App.module.scss';

const App = () => {
    const [colorTheme, setColorTheme] = useState(COLOR_THEMES.ORANGE);
    const [fontFamily, setFontFamily] = useState(FONT_FAMILY.KUMBH_SANS);
    const [selectedOption, setSelectedOption] = useState(SELECTED_OPTION.POMODORO);

    return (
        <AppContext.Provider value={({
            colorTheme, setColorTheme, fontFamily, setFontFamily, selectedOption, setSelectedOption
        })}>
            <div className={
                fontFamily === FONT_FAMILY.ROBOTO ? styles[`font-roboto`] :
                    fontFamily === FONT_FAMILY.KUMBH_SANS ? styles[`font-kumbh`] :
                        fontFamily === FONT_FAMILY.SPACE_MONO ? styles[`font-space`] : ``
            }>
            </div>
        </AppContext.Provider>
    )
}

export default App