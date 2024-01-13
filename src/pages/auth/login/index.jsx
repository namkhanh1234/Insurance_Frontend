import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Login.module.scss';
import config from '../../../config';
import logo from '@/assets/images/logo.png';
import { ApiLogin } from '../../../services/authenticationService';
import axiosInstance from '../../../utils/axios';
import GoogleLoginButton from '../../../components/GoogleLoginButton/GoogleLoginButton';
// Redux
import { loginAction } from '../../../features/actions/authAction';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@mui/material';
import { useToast } from '@/components/ui/use-toast';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { toast } = useToast();

    const user = useSelector((state) => state.auth);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(
            loginAction({
                email: formData.email,
                password: formData.password,
            }),
        );
        if (user.auth) {
            toast({
                description: 'Đăng nhập thành công.',
                variant: 'success',
            });
        }
        // } else {
        //     toast({
        //         description: 'Tài khoản hoặc mật khẩu sai! ',
        //         variant: 'destructive',
        //     });
        // }
    };

    useEffect(() => {
        // Auth trong state
        if (user.auth) {
            navigate(config.routes.home);
        }
    });

    const handleTypeInput = () => {
        if (typeInput == 'password') {
            setTypeInput('text');
        } else {
            setTypeInput('password');
        }
    };

    return (
        <>
            <div className={cx('login__modal')}>
                <div className={cx('login__modal-inner', 'rounded-2xl border-2')}>
                    <div className="login__header flex flex-col items-center justify-center select-none">
                        <Link to={config.routes.home} className="w-fit ">
                            <img className="h-24 w-24 rounded-3xl" src={logo} alt="KNH" />
                        </Link>
                        <h2 className="mt-3 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
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
                        <div className="my-4">
                            <Divider>Hoặc</Divider>
                        </div>
                    </form>
                    {/* login google - auth2 */}
                    <div className="mb-4 flex justify-center">
                        {/* <div> */}
                        <GoogleLoginButton />
                        {/* </div> */}
                        {/* <div>Facebook</div> */}
                    </div>
                    <div className="login__footer">
                        <Link
                            to={config.routes.forgotPassword}
                            className="flex justify-center text-normal font-normal text-blue-600"
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
