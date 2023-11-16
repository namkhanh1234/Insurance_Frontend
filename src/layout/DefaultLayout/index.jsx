import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

import Header from '../Header';
import Sidebar from '../Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header', 'border-b-2 border-gray-100')}>
                <Header />
            </header>
            <div className={cx('container')}>
                {/* <div className={cx('sidebar')}>
                    <Sidebar />
                </div> */}
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
