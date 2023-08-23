import { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import { SELECTED_OPTION, FONT_FAMILY, COLOR_THEMES } from '../../Utilities/Types';

import Select from '../Common/Select/Select';
import FontButton from '../Common/FontButton/FontButton';
import ColorButton from '../Common/ColorButton/ColorButton';

import styles from './Settings.module.scss';

const Settings = () => {
    const theme = useContext(AppContext);

    const [isDisplayed, setIsDisplayed] = useState(false);

    const display = () => {
        if (theme.timerTimeout) {
            clearTimeout(theme.timerTimeout)
        }
        setIsDisplayed(true)
    }

    const close = () => setIsDisplayed(false)

    const apply = () => {
        setIsDisplayed(false)
    }

    return (
        <div className={styles.container}>
            <img
                className={styles[`settings-main-button`]}
                onClick={() => display()}
                src='./assets/settings.svg' alt=""></img>
            <div className={`
                ${styles[`settings-container`]}
                ${isDisplayed ? styles[`settings-open-status`] : styles[`settings-close-status`]}`}>
                <div className={styles[`settings-content`]}>
                    {/* Close */}
                    <div className={styles[`settings-close`]} onClick={() => close()}>
                        <img src='./assets/close.svg' alt=""></img>
                    </div>
                    {/* Time */}
                    <div className={styles[`settings-title`]}>Settings</div>
                    <div className={styles[`settings-time-container`]}>
                        <div className={styles[`time-container-title`]}>TIME ( MINUTES )</div>
                        <div className={styles[`time-container-pomodoro`]}>
                            <Select text={SELECTED_OPTION.POMODORO} />
                        </div>
                        <div className={styles[`time-container-short-break`]}>
                            <Select text={SELECTED_OPTION.SHORT_BREAK} />
                        </div>
                        <div className={styles[`time-container-long-break`]}>
                            <Select text={SELECTED_OPTION.LONG_BREAK} />
                        </div>
                    </div>
                    {/* Font */}
                    <div className={styles[`font-container`]}>
                        <div className={styles.title}>FONT</div>
                        <div className={styles[`buttons-container`]}>
                            <FontButton text={FONT_FAMILY.KUMBH_SANS} />
                            <FontButton text={FONT_FAMILY.ROBOTO} />
                            <FontButton text={FONT_FAMILY.SPACE_MONO} />
                        </div>
                    </div>
                    {/* Color */}
                    <div className={styles[`color-container`]}>
                        <div className={styles.title}>FONT</div>
                        <div className={styles[`buttons-container`]}>
                            <ColorButton color={COLOR_THEMES.ORANGE} />
                            <ColorButton color={COLOR_THEMES.AQUARMARINE} />
                            <ColorButton color={COLOR_THEMES.VIOLET} />
                        </div>
                    </div>
                    {/* Apply */}
                    <div className={`
                        ${styles.apply}
                        ${theme.colorTheme === COLOR_THEMES.ORANGE ? styles.orange : ``}
                        ${theme.colorTheme === COLOR_THEMES.AQUARMARINE ? styles.aquamarine : ``}
                        ${theme.colorTheme === COLOR_THEMES.VIOLET ? styles.violet : ``}
                    `}
                        onClick={() => apply()}>Apply</div>
                </div>
            </div>
        </div>
    )
}

export default Settings;