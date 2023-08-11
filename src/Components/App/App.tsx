import { useState, createContext } from "react"
import { COLOR_THEMES } from "../../Utilities/Types"
import { AppContext } from "../../Context/AppContext"


const App = () => {
    const [colorTheme, setColorTheme] = useState(COLOR_THEMES.ORANGE)

    return (
        <AppContext.Provider value={({ colorTheme, setColorTheme })}>
            <div>App</div>
        </AppContext.Provider>
    )
}

export default App