import styles from './Select.module.scss';


// na podstawie tekstu okreslac co ustawiamy i wybierac wartosc i setWartosc z kontektstu

// wyłaczycć 200px w width form
const Select = ({ text, }: { text: string, }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{text}</div>
            <div className={styles.form}>
                <div className={styles.value}>25</div>
                <div className={styles.buttons}>
                    <div className={`${styles[`my-image`]} ${styles[`my-image-up`]}`}></div>
                    <div className={`${styles[`my-image`]} ${styles[`my-image-down`]}`}></div>
                </div>
            </div>
        </div >
    )
}

export default Select