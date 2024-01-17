import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';

import HeaderAdmin from '../HeaderAdmin';
import SidebarAdmin from '../SidebarAdmin';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className="wrapper">
            {/* Admin thường sử dụng Desktop - Thiết kế cho Destop */}
            <div className={cx('header', 'flex justify-between items-center border-b-2 border-[#0f172a1a]')}>
                <div className="flex-1 w-full h-full mx-8">
                    <HeaderAdmin />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <SidebarAdmin />
                </div>
                <div className={cx('content', 'px-4')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
