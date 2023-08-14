import { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { FONT_FAMILY } from '../../../Utilities/Types';

import styles from './FontButton.module.scss';

/**
 * <FontButton text={FONT_FAMILY.KUMBH_SANS} />
 * 
 * @param param0 string FONT_FAMILY
 * @returns 
 */
const FontButton = ({ text }: { text: string }) => {
    const theme = useContext(AppContext);

    return (
        <div className={`
            ${styles.container}
            ${text === FONT_FAMILY.ROBOTO ? styles[`font-roboto`] :
                text === FONT_FAMILY.KUMBH_SANS ? styles[`font-kumbh`] :
                    text === FONT_FAMILY.SPACE_MONO ? styles[`font-space`] : ``}
            ${theme.fontFamily === text ? styles[`active`] : styles[`not-active`]}
        `}>Aa</div>
    )
}

export default FontButton;