import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import config from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <nav className={cx('nav__bar', 'space-y-1')}>
            <NavLink
                to={config.routes.home}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faHome} />
                <h3>Giới thiệu</h3>
            </NavLink>
            <NavLink
                to={config.routes.insurances}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-75"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                >
                    <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
                </svg>
                <h3>Sản phẩm</h3>
            </NavLink>
            <NavLink
                to={config.routes.registrationForm}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-75"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                >
                    <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
                </svg>
                <h3>Đăng ký bảo hiểm</h3>
            </NavLink>
            <NavLink
                to={config.routes.support}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faPhone} />
                <h3>Hỗ trợ</h3>
            </NavLink>

            <NavLink
                to={config.routes.logout}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    ></path>
                </svg>
                <h3>Đăng xuất</h3>
            </NavLink>
        </nav>
    );
}

export default Sidebar;
