import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './LoginAdmin.module.scss';
import logo from '@/assets/images/logo.png';
import config from '../../../../config';
import { loginAdminAction } from '../../../../features/actions/authAction';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function LoginAdmin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const handleTypeInput = () => {
        if (typeInput == 'password') {
            setTypeInput('text');
        } else {
            setTypeInput('password');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            loginAdminAction({
                email: formData.email,
                password: formData.password,
            }),
        );

        // if (user.auth && user.isAdmin) {
        //     toast({
        //         description: 'Đăng nhập thành công.',
        //         variant: 'success',
        //     });
        // }
    };

    useEffect(() => {
        // Auth trong state
        // console.log('>> Check login page', user);

        if (user.auth && user.isAdmin) {
            navigate(config.routes.adminGeneral);
        }
    }, [user]);

    return (
        <div className={cx('login__modal')}>
            <div className={cx('login__modal-inner', 'rounded-2xl border-2')}>
                <div className="login__header flex flex-col items-center justify-center select-none">
                    <img className="h-24 w-24 rounded-3xl" src={logo} alt="KNH" />
                    <h2 className="mt-3 font-semibold">Quản trị viên KNH</h2>
                </div>

                {/* login__form */}
                <form action="" method="POST" className="mt-6 flex-1">
                    <div className={cx('username__wrapper', 'space-y-1')}>
                        <Label htmlFor="username">Email</Label>
                        <Input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="johndoe104@example.com"
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
                    <div className="mt-6 flex justify-center items-center">
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
