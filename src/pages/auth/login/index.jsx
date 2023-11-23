import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import config from '../../../config';
import logo from '@/assets/images/logo.png';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const cx = classNames.bind(styles);

function Login() {
    console.log(config.routes.home);
    return (
        <>
            <div className={cx('login__modal')}>
                <div className={cx('login__modal-inner', 'rounded-2xl border-2')}>
                    <div className="login__header flex flex-col items-center justify-center">
                        {/* <Link to={config.routes.register} className="w-fit "> */}
                        <img className="h-24 w-24 rounded-full" src={logo} alt="KNK" />
                        {/* </Link> */}
                        <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNK</h2>
                    </div>

                    {/* login__form */}
                    <form action="" method="POST" className="mt-6 flex-1">
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="username">Email</Label>
                            <Input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="johndoe104"
                                // value={formData.email}
                                // onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={cx('password__wrapper', 'mt-2 space-y-1')}>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="•••••••••"
                                // onChange={(e) => handleChange(e)}
                                // value={formData.password}
                            />
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <Button
                                type="submit"
                                // onClick={handleSubmit}
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            >
                                Đăng nhập
                            </Button>
                        </div>
                    </form>

                    {/* <div className="login__action"></div> */}

                    <div className="login__footer">
                        <Link className="flex justify-center text-normal font-light text-gray-500">Quên mật khẩu</Link>

                        <div className="mt-2 flex justify-center items-center text-sm">
                            <span className="mx-2 text-sm text-gray-400">Bạn chưa có tài khoản?</span>
                            <Link
                                to={config.routes.register}
                                className="font-normal text-blue-600 hover:underline italic"
                            >
                                Register here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
