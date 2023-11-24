import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ForgotPassword.module.scss';
import config from '../../../config';
import logo from '@/assets/images/logo.png';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const cx = classNames.bind(styles);

function ForgotPassword() {
    // console.log(config.routes.home); // --> what diz
    return (
        <>
            {/* Nhập email đăng ký tài khoản */}
            <div className={cx('forgotPassword__modal__1')}>
                <div className={cx('forgotPassword__modal__1-inner', 'rounded-2x1 border-2')}>
                    <div className="forgotPassword__header flex flex-col items-center justify-center">
                        <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                        <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>

                        <h4 className="mt-2 font-regular">Nhập địa chỉ email tài khoản đã đăng ký</h4> {/* font ?? */}
                    </div>

                    <form action="" method="POST" className="mt-6 flex-1">
                        <div className={cx('email__wrapper', 'space-y-1')}>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="email@gmail.com"
                            />
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <Button
                                type="submit"
                                className="w-[220px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            >
                                Gửi mã xác nhận qua email
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Nhập mã xác nhận */}
            <div className={cx('forgotPassword__modal__2')}>
                <div className={cx('forgotPassword__modal__2-inner', 'rounded-2x1 border-2')}>
                    <div className="forgotPassword__header flex flex-col items-center justify-center">
                        <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                        <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                    </div>

                    <form action="" method="POST" className="mt-6 flex-1">
                        <div className={cx('otp__wrapper', 'space-y-1')}>
                            <Label htmlFor="otp">Mã xác nhận</Label>
                            <Input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    placeholder="XXXX"
                            />
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <Button
                                type="submit"
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            >
                                Xác nhận
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Nhập mật khẩu mới */}
            <div className={cx('forgotPassword__modal__3')}>
                <div className={cx('forgotPassword__modal__3-inner', 'rounded-2x1 border-2')}>
                    <div className="forgotPassword__header flex flex-col items-center justify-center">
                        <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                        <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                    </div>

                    <form action="" method="POST" className="mt-6 flex-1">
                        <div className={cx('new_password__wrapper', 'space-y-1')}>
                            <Label htmlFor="new_password">Mật khẩu mới</Label>
                            <Input
                                    type="password"
                                    id="new_password"
                                    name="new password"
                                    placeholder="•••••••••"
                            />
                        </div>
                        <div className={cx('new_password__wrapper_2', 'space-y-1')}>
                            <Label htmlFor="enter_new_password">Nhập lại mật khẩu mới</Label>
                            <Input
                                    type="password"
                                    id="enter_new_password"
                                    name="confirm new password"
                                    placeholder="•••••••••"
                            />
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <Button
                                type="submit"
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            >
                                Xác nhận
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default ForgotPassword;

