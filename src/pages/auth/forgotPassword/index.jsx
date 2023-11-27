import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import styles from './ForgotPassword.module.scss';
import config from '../../../config';
import logo from '@/assets/images/logo.png';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const cx = classNames.bind(styles);
YupPassword(yup);

const schema = yup
    .object({
        email: yup.string().required('Email không được để trống').email('Email không đúng định dạng'),
        otp: yup
            .number()
            .required('Mã xác nhận không được để trống')
            .min(4, 'Mã xác nhận phải 4 chữ số')
            .max(4, 'Mã xác nhận phải 4 chữ số'),
        newPassword: yup
            .string()
            .required('Mật khẩu không được để trống')
            .password()
            .min(8, 'Mật khẩu chứa ít nhất 8 kí tự')
            .minLowercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái thường')
            .minUppercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái in hoa')
            .minNumbers(1, 'Mật khẩu chứa ít nhất 1 số')
            .minSymbols(1, 'Mật khẩu chứa ít nhất 1 kí tự đặc biệt'),
        confirmNewPassword: yup
            .string()
            .label('confirm password')
            .required('Vui lòng nhập lại mật khẩu')
            .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp')
    })
    .required();

function ForgotPassword() {
    console.log(config.routes.home); 

    const {
        forgotPassword,
        handleSubmit,
        formState: { errors },
    } = useForm ({
        resolver: yupResolver(schema),
    })

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    }

    // const handlePrevStep = () => {
    //     setStep(step - 1);
    // }

    const onSubmit = (data) => console.log(data);

    return (
        <>
            {/* Nhập email đăng ký tài khoản */}
            {step === 1 && (
                <div className={cx('forgotPassword__modal__1')}>
                    <div className={cx('forgotPassword__modal__1-inner', 'rounded-2xl border-2')}>
                        <div className="forgotPassword__header flex flex-col items-center justify-center">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                            <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>

                            <h4 className="mt-2 font-regular">Nhập địa chỉ email tài khoản đã đăng ký</h4> {/* font ?? */}
                        </div>

                        <form action="" method="POST" className="mt-6 flex-1" onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('email__wrapper', 'space-y-1')}>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="email@gmail.com"
                                        // {... forgotPassword(email)}
                                />
                                <p className="text-red-600 text-xs">{errors.email?.message}</p>
                            </div>
                            <div className="my-6 flex justify-center items-center">
                                <Button
                                    type="submit"
                                    className="w-[220px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                    onClick={handleNextStep}
                                >
                                    Gửi mã xác nhận qua email
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }            

            {/* Nhập mã xác nhận */}
            {step === 2 && (
                <div className={cx('forgotPassword__modal__2')}>
                    <div className={cx('forgotPassword__modal__2-inner', 'rounded-2xl border-2')}>
                        <div className="forgotPassword__header flex flex-col items-center justify-center">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                            <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                        </div>

                        <form action="" method="POST" className="mt-6 flex-1" onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('otp__wrapper', 'space-y-1')}>
                                <Label htmlFor="otp">Mã xác nhận</Label>
                                <Input
                                        type="text"
                                        id="otp"
                                        name="otp"
                                        placeholder="XXXX"
                                        // {... forgotPassword(otp)}
                                />
                                <p className="text-red-600 text-xs">{errors.otp?.message}</p>
                            </div>
                            <div className="my-6 flex justify-center items-center">
                                <Button
                                    type="submit"
                                    className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                    onClick={handleNextStep}
                                >
                                    Xác nhận
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }
            
            {/* Nhập mật khẩu mới */}
            {step === 3 && (
                <div className={cx('forgotPassword__modal__3')}>
                    <div className={cx('forgotPassword__modal__3-inner', 'rounded-2xl border-2')}>
                        <div className="forgotPassword__header flex flex-col items-center justify-center">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                            <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                        </div>

                        <form action="" method="POST" className="mt-6 flex-1" onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('new_password__wrapper', 'space-y-1')}>
                                <Label htmlFor="new_password">Mật khẩu mới</Label>
                                <Input
                                        type="password"
                                        id="new_password"
                                        name="new password"
                                        placeholder="•••••••••"
                                        // {... forgotPassword(newPassword)}
                                />
                                <p className="text-red-600 text-xs">{errors.newPassword?.message}</p>
                            </div>
                            <div className={cx('new_password__wrapper_2', 'space-y-1')}>
                                <Label htmlFor="enter_new_password">Nhập lại mật khẩu mới</Label>
                                <Input
                                        type="password"
                                        id="enter_new_password"
                                        name="confirm new password"
                                        placeholder="•••••••••"
                                        // {... forgotPassword(confirmNewPassword)}
                                />
                                <p className="text-red-600 text-xs">{errors.confirmNewPassword?.message}</p>
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
            )
            }
        </>
    );
}

export default ForgotPassword;

