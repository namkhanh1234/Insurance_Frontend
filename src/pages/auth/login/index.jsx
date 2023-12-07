import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import config from '../../../config';
import logo from '@/assets/images/logo.png';
import { login } from '../../../services/authenticationService';
import axiosInstance from '../../../utils/axios';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [typeInput, setTypeInput] = useState('password');

    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    // const = []

    const apiLogin = async () => {
        // // Không cần try catch bắt handling error vì đã làm bên service
        // debugger;
        // console.log(formData);
        const res = await login(formData.email, formData.password);
        // console.log(res);

        if (res && res.data) {
            // console.log(res.data);
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            localStorage.setItem('user_id', res.data.user_id);

            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
            navigate(config.routes.home);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        apiLogin();
    };

    const handleTypeInput = () => {
        if (typeInput == 'password') {
            setTypeInput('text');
        } else {
            setTypeInput('password');
        }
    };

    // console.log(formData);

    return (
        <>
            <div className={cx('login__modal')}>
                <div className={cx('login__modal-inner', 'rounded-2xl border-2')}>
                    <div className="login__header flex flex-col items-center justify-center select-none">
                        <Link to={config.routes.home} className="w-fit ">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />
                        </Link>
                        <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
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
                                value={formData.email}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={cx('password__wrapper', 'mt-2 space-y-1')}>
                            <Label htmlFor="password">Mật khẩu</Label>
                            <div className="relative">
                                <Input
                                    type={typeInput}
                                    id="password"
                                    name="password"
                                    placeholder="•••••••••"
                                    value={formData.password}
                                    onChange={(e) => handleChange(e)}
                                />
                                <FontAwesomeIcon
                                    onClick={handleTypeInput}
                                    className="absolute top-3 right-4"
                                    icon={typeInput == 'password' ? faEyeSlash : faEye}
                                />
                            </div>
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            >
                                Đăng nhập
                            </Button>
                        </div>
                    </form>

                    {/* <div className="login__action"></div> */}

                    <div className="login__footer">
                        <Link
                            to={config.routes.forgotPassword}
                            className="flex justify-center text-normal font-light text-gray-500"
                        >
                            Quên mật khẩu
                        </Link>

                        <div className="mt-2 flex justify-center items-center text-sm">
                            <span className="mx-2 text-sm text-gray-400">Bạn chưa có tài khoản?</span>
                            <Link
                                to={config.routes.register}
                                className="font-normal text-blue-600 hover:underline italic"
                            >
                                Đăng ký tài khoản
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
