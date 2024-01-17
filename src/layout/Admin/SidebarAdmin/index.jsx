import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './SidebarAdmin.module.scss';
import config from '../../../config';

import { faClipboard, faHome, faLayerGroup, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SidebarAdmin() {
    return (
        <div className={cx('nav__bar', 'space-y-1')}>
            <NavLink
                to={config.routes.adminGeneral}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faHome} />
                <h3>Tổng quát</h3>
            </NavLink>
            <NavLink
                to={config.routes.adminUser}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faUser} />
                <h3>Người dùng</h3>
            </NavLink>
            <NavLink
                to={config.routes.adminBeneficiary}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faUserPlus} />
                <h3>Người thụ hưởng</h3>
            </NavLink>
            <NavLink
                to={config.routes.adminRegistration}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faLayerGroup} />
                <h3>Đơn đăng ký</h3>
            </NavLink>
            <NavLink
                to={config.routes.adminPaymentRequest}
                className={(nav) =>
                    cx(
                        'flex items-center space-x-3 p-3 font-semibold text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 group',
                        { active: nav.isActive },
                    )
                }
            >
                <FontAwesomeIcon icon={faClipboard} />
                <h3>Yêu cầu thanh toán</h3>
            </NavLink>
            <NavLink
                to={config.routes.adminLogout}
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
        </div>
    );
}

export default SidebarAdmin;
