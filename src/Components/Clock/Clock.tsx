import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { COLOR_THEMES } from '../../Utilities/Types';

import styles from './Clock.module.scss';

const Clock = () => {
    const theme = useContext(AppContext);

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

            switch (theme.colorTheme) {
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

    const handleClick = () => {
        console.log(`click`)
    }

    useEffect(() => {
        // tutaj odswierzamy rysowanie
        // zmienna w useState procenty 
        //      i przy zmianie czasu obliczac procent oobecnie akutalnego,
        //      wylicanie ile to stopi z 360 i odswirzenie zmiennej w usestate
        //      i ta funkcjie w komponenecie
    }, [theme.currentLongBreakTime, theme.currentShortBreakTime, theme.currentPomodoroTime])

    return (
        <div className={styles.container}>
            <div className={styles.innerOval}></div>
            <canvas
                id="arc-canvas"
                className={styles[`arc-canvas-style`]}
                width={1000}
                height={1000}>
            </canvas>
            <div className={styles.time}>17:59</div>
            <div className={styles.pause} onClick={() => handleClick()}>{buttonText}</div>
        </div>
    )
}

export default Clock;