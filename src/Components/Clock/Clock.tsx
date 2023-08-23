import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { COLOR_THEMES, SELECTED_OPTION } from '../../Utilities/Types';

import styles from './Clock.module.scss';

// przeniesc do CoostomHook
const Clock = () => {
    const {
        pomodoroTime,
        currentPomodoroTime,
        setCurrentPomodoroTime,
        longBreakTime,
        currentLongBreakTime,
        setCurrentLongBreakTime,
        shortBreakTime,
        currentShortBreakTime,
        setCurrentShortBreakTime,
        colorTheme,
        selectedOption,
        timerTimeout,
        setTimerTimeout,
    } = useContext(AppContext);

    const [buttonText, setButtonText] = useState(`START`);

    /**
     * Redraws timer arc
     * @param angle in deg
     */
    const drawArc = (angle: number): void => {
        const orange = `hsl(0, 91%, 71%)`;
        const aquamarine = `hsl(182, 91%, 71%)`;
        const violet = `hsl(284, 89%, 74%)`;
        const angleInRadians = angle * (Math.PI / 180);

        let canvas = document.querySelector(`#arc-canvas`) as HTMLCanvasElement;
        let ctx = canvas.getContext(`2d`);

        if (ctx) {

            ctx.clearRect(0, 0, 1000, 1000)
            ctx.moveTo(0, 0);
            ctx.beginPath();

            switch (colorTheme) {
                case COLOR_THEMES.AQUARMARINE:
                    ctx.strokeStyle = aquamarine;
                    break;
                case COLOR_THEMES.VIOLET:
                    ctx.strokeStyle = violet;
                    break;
                default:
                    ctx.strokeStyle = orange;
                    break;
            }

            ctx.lineCap = "round";
            ctx.arc(500, 500, 440, 0, angleInRadians);
            ctx.lineWidth = 30;
            ctx.stroke();

        }

    }

    const getMinutes = (seconds: number): string =>
        `${Math.floor(seconds / 60)}`.length < 2 ?
            `0${Math.floor(seconds / 60)}` : `${Math.floor(seconds / 60)}`


    const getSeconds = (seconds: number): string =>
        `${seconds - (Math.floor(seconds / 60) * 60)}`.length < 2 ?
            `0${seconds - (Math.floor(seconds / 60) * 60)}` : `${seconds - (Math.floor(seconds / 60) * 60)}`


    const getClockValue = () => {

        switch (selectedOption) {
            case SELECTED_OPTION.POMODORO:
                return `
                    ${getMinutes(pomodoroTime - currentPomodoroTime)}:${getSeconds(pomodoroTime - currentPomodoroTime)}`
            case SELECTED_OPTION.SHORT_BREAK:
                return `
                    ${getMinutes(shortBreakTime - currentShortBreakTime)}:${getSeconds(shortBreakTime - currentShortBreakTime)}`
            default:
                return `
                    ${getMinutes(longBreakTime - currentLongBreakTime)}:F${getSeconds(longBreakTime - currentLongBreakTime)}`
        }

    }

    const counter = () => {

        clearTimeout(timerTimeout)
        setTimerTimeout(setTimeout(() => {

            switch (selectedOption) {
                case SELECTED_OPTION.POMODORO:
                    setCurrentPomodoroTime((prev: number) => prev + 1)
                    break;
                case SELECTED_OPTION.SHORT_BREAK:
                    setCurrentShortBreakTime((prev: number) => prev + 1)
                    break;
                default:
                    setCurrentLongBreakTime((prev: number) => prev + 1)
                    break;
            }

            counter()

        }, 1000))

    }

    const handleClick = () => {

        if (buttonText === `START`) {

            counter()
            setButtonText(`PAUSE`)

        } else if (buttonText === `RESTART`) {
            setCurrentPomodoroTime(0);
            setCurrentShortBreakTime(0);
            setCurrentLongBreakTime(0);
            drawArc(1);
            setButtonText(`START`)
        } else {

            if (timerTimeout) {
                clearTimeout(timerTimeout)
                setButtonText(`START`)
            }

        }

    }

    useEffect(() => {

        switch (selectedOption) {
            case SELECTED_OPTION.POMODORO:
                const percent = parseFloat((currentPomodoroTime / pomodoroTime).toFixed(2)) * 100
                const angle = Math.floor((percent / 100) * 360);

                angle ? drawArc(angle) : drawArc(1);
                break;

            case SELECTED_OPTION.SHORT_BREAK:
                const percentS = parseFloat((currentShortBreakTime / shortBreakTime).toFixed(2)) * 100
                const angleS = Math.floor((percentS / 100) * 360);

                angleS ? drawArc(angleS) : drawArc(1);
                break;

            default:
                const percentL = parseFloat((currentLongBreakTime / longBreakTime).toFixed(2)) * 100
                const angleL = Math.floor((percentL / 100) * 360);

                angleL ? drawArc(angleL) : drawArc(1);
                break;
        }
        // eslint-disable-next-line
    }, [
        currentLongBreakTime,
        currentShortBreakTime,
        currentPomodoroTime,
        colorTheme
    ])

    useEffect(() => {

        switch (selectedOption) {
            case SELECTED_OPTION.POMODORO:

                if (currentPomodoroTime === pomodoroTime) {
                    clearTimeout(timerTimeout)
                    setButtonText(`RESTART`)
                }
                break;

            case SELECTED_OPTION.SHORT_BREAK:
                if (currentShortBreakTime === shortBreakTime) {
                    clearTimeout(timerTimeout)
                    setButtonText(`RESTART`)
                }
                break;

            default:

                if (currentLongBreakTime === longBreakTime) {
                    clearTimeout(timerTimeout)
                    setButtonText(`RESTART`)
                }
                break;
        }

        // eslint-disable-next-line
    }, [
        currentLongBreakTime,
        currentShortBreakTime,
        currentPomodoroTime,
    ])

    return (
        <div className={styles.container}>
            <div className={styles.innerOval}></div>
            <canvas
                id="arc-canvas"
                className={styles[`arc-canvas-style`]}
                width={1000}
                height={1000}>
            </canvas>
            <div className={styles.time}>{getClockValue()}</div>
            <div className={styles.pause} onClick={() => handleClick()}>{buttonText}</div>
        </div>
    )
}

export default Clock;