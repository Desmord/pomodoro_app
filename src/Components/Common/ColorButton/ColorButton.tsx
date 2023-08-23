import { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { COLOR_THEMES } from '../../../Utilities/Types';
import { MdOutlineDone } from 'react-icons/md';

import styles from './ColorButton.module.scss';

/**
 * <FontButton text={COLOR_THEMES.ORANGE} />
 * 
 * @param param0 string COLOR_THEMES
 * @returns 
 */
const ColorButton = ({ color }: { color: string }) => {
    const theme = useContext(AppContext);

    const changeColor = () => {
        theme.setColorTheme(color)
    }

    return (
        <div className={`
            ${styles.container}
            ${color === COLOR_THEMES.ORANGE ? styles[`color-orange`] :
                color === COLOR_THEMES.AQUARMARINE ? styles[`color-aquarmarine`] :
                    color === COLOR_THEMES.VIOLET ? styles[`color-violet`] : ``}
        `} onClick={() => changeColor()}>
            {theme.colorTheme === color ? <MdOutlineDone /> : ``}
        </div>
    )
}

export default ColorButton;