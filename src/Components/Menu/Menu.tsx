import { SELECTED_OPTION } from '../../Utilities/Types';

import Button from '../Common/Button/Button';

import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.container}>
            <Button text={SELECTED_OPTION.POMODORO} />
            <Button text={SELECTED_OPTION.SHORT_BREAK} />
            <Button text={SELECTED_OPTION.LONG_BREAK} />
        </div>
    )
}

export default Menu