import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <>
            <Link className={cx('menu-item')} to={data.to} onClick={onClick}>
                {data.icon ? <div className="mr-3">{data.icon}</div> : <></>}
                {data.title}
            </Link>
        </>
    );
}

export default MenuItem;
