import useClock from './useClock';

import styles from './Clock.module.scss';

const Clock = () => {

    const { getClockValue, handleClick, buttonText, } = useClock();
   
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