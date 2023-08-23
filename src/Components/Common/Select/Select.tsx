import { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { SELECTED_OPTION } from '../../../Utilities/Types';

import styles from './Select.module.scss';

/**
 *   <Select text={SELECTED_OPTION.POMODORO} />
 * @param param0  string
 * @returns 
 */
const Select = ({ text }: { text: string, }) => {

    const app = useContext(AppContext);

    const getValue = () => {

        switch (text) {
            case SELECTED_OPTION.POMODORO:
                return app.pomodoroTime / 60;
            case SELECTED_OPTION.SHORT_BREAK:
                return app.shortBreakTime / 60;
            default:
                return app.longBreakTime / 60;
        }

    }

    const add = () => {

        switch (text) {
            case SELECTED_OPTION.POMODORO:
                app.setPomodoroTime((prev: number) => prev + 60)
                break;
            case SELECTED_OPTION.SHORT_BREAK:
                app.setShortBreakTime((prev: number) => prev + 60)
                break;
            default:
                app.setLongBreakTime((prev: number) => prev + 60)
                break;
        }

    }

    const substract = () => {

        switch (text) {
            case SELECTED_OPTION.POMODORO:
                app.setPomodoroTime((prev: number) => prev - 1 < 0 ? 0 : prev - 60)
                break;
            case SELECTED_OPTION.SHORT_BREAK:
                app.setShortBreakTime((prev: number) => prev - 1 < 0 ? 0 : prev - 60)
                break;
            default:
                app.setLongBreakTime((prev: number) => prev - 1 < 0 ? 0 : prev - 60)
                break;
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{text}</div>
            <div className={styles.form}>
                <div className={styles.value}>{getValue()}</div>
                <div className={styles.buttons}>
                    <div onClick={() => add()} className={`${styles[`my-image`]} ${styles[`my-image-up`]}`}></div>
                    <div onClick={() => substract()} className={`${styles[`my-image`]} ${styles[`my-image-down`]}`}></div>
                </div>
            </div>
        </div >
    )
}

export default Select