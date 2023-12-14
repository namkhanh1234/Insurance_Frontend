import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header', 'flex justify-between items-center border-b-2 border-gray-100')}>
                <label className="mt-1 ml-3" htmlFor="nav-mobile-input">
                    <FontAwesomeIcon
                        className="p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-900 hover:cursor-pointer text-2xl md:hidden"
                        icon={faBars}
                    />
                </label>
                <input type="checkbox" name="" className={cx('nav__input')} id="nav-mobile-input" />
                <label htmlFor="nav-mobile-input" className={cx('nav__overlay')}></label>
                {/* Navbar mobile */}
                <nav className={cx('nav__mobile')}>
                    <div className="mt-7">
                        <Sidebar />
                    </div>
                </nav>

                <div className="flex-1 w-full h-full mx-3 md:mx-6">
                    <Header />
                </div>
            </header>
            <div className={cx('container')}>
                {/* <div className={cx('content', 'mx-3 md:mx-6')}>{children}</div> */}
                <div className={cx('content', 'my-4')}>{children}</div>

                <div className="mx-3 md:mx-6">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
