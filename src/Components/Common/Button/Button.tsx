import { useContext } from 'react';
import { COLOR_THEMES } from '../../../Utilities/Types'
import { AppContext } from '../../../Context/AppContext';

import styles from './Button.module.scss'

/**
 * <Button text={SELECTED_OPTION.POMODORO} />
 * 
 * @param text string
 * @returns 
 */
const Button = ({ text, }: { text: string, }) => {
    const theme = useContext(AppContext);

    const handleClick = () => theme.setSelectedOption(text)

    return (
        <div
            className={`
                ${styles.container}
                ${theme.colorTheme === COLOR_THEMES.ORANGE ? styles.orange : ``}
                ${theme.colorTheme === COLOR_THEMES.AQUARMARINE ? styles.aquamarine : ``}
                ${theme.colorTheme === COLOR_THEMES.VIOLET ? styles.violet : ``}
                ${theme.selectedOption === text ? `` : styles[`is-not-active`]}
            `} 
            onClick={() => handleClick()}>
            {text}
        </div>
    )
}

export default Button
