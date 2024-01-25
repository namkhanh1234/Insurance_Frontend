import classNames from 'classnames/bind';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import styles from './ForgotPassword.module.scss';
import logo from '@/assets/images/logo.png';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import OtpInput from 'react-otp-input';

import { ApiSendEmail, ApiVerifiOTP } from '../../../services/userService';
import Timer from '../../../components/Timer/Timer';
import { useToast } from '@/components/ui/use-toast';

import ResetForm from '../../../components/ResetPasswordForm/ResetForm';

const cx = classNames.bind(styles);
const schema = yup
    .object({
        email: yup.string().required('Email không được để trống').email('Email không đúng định dạng'),
    })
    .required();

function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(false);
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleNextStep = (data) => {
        setStep(step + 1);
    };

    // const handlePrevStep = () => {
    //     setStep(step - 1);
    // }

    const onSubmitEmail = async (data) => {
        localStorage.setItem('email', data.email);
        handleNextStep();

        try {
            const response = await ApiSendEmail(data.email);
            if (response) {
                handleNextStep();
            } else {
                toast({
                    description: 'Nhập email sai! Vui lòng thử lại.',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                description: 'Nhập email sai! Vui lòng thử lại.',
                variant: 'destructive',
            });
        }
    };
    const verifingOTP = async () => {
        //handleNextStep();
        var email = localStorage.getItem('email');
        const data = {
            email: email,
            otp: otp,
        };
        try {
            const response = await ApiVerifiOTP(data);
            if (response) {
                handleNextStep();
            } else {
                toast({
                    description: 'Nhập mã otp sai! Vui lòng thử lại.',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                description: 'Nhập mã otp sai! Vui lòng thử lại.',
                variant: 'destructive',
            });
        }
    };
    const reSendMail = async () => {
        const email = localStorage.getItem('email');
        //handleNextStep();

        try {
            const response = await ApiSendEmail(email);
            if (response) {
                toast({
                    description: 'Đã gửi lại email',
                    variant: 'success',
                });
            } else {
                toast({
                    description: 'Lỗi hệ thống! Vui lòng thử lại',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                description: 'Lỗi hệ thống! Vui lòng thử lại',
                variant: 'destructive',
            });
        }
        setTimer((prev) => !prev);
    };

    return (
        <>
            {/* Nhập email đăng ký tài khoản */}

            {step === 1 && (
                <div className={cx('forgotPassword__modal__1')}>
                    <div className={cx('forgotPassword__modal__1-inner', 'rounded-2xl border-2')}>
                        <div className="forgotPassword__header flex flex-col items-center justify-center">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />
                            <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                            <h4 className="mt-2 font-regular">Nhập địa chỉ email tài khoản đã đăng ký</h4>
                            {/* font ?? */}
                        </div>
                        <form onSubmit={handleSubmit(onSubmitEmail)} className="mt-6">
                            <div className={cx('email__wrapper', 'space-y-1')}>
                                <Input type="text" placeholder="email@gmail.com" {...register('email')} />
                                <p className="text-red-600 text-xs">{errors.email?.message}</p>
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
            )}
            {/* Nhập mã xác nhận */}
            {step === 2 && (
                <div className={cx('forgotPassword__modal__2')}>
                    <div className={cx('forgotPassword__modal__2-inner', 'rounded-2xl border-2')}>
                        <div className="forgotPassword__header flex flex-col items-center justify-center">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />
                            <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                        </div>

                        <div className=" my-2 text-center w-full">
                            <p>Chúng tôi đã gửi mã OTP đến email của bạn</p>
                            <p className="mb-4">Vui lòng nhập mã bên dưới để xác nhận email của bạn</p>
                            <OtpInput
                                name="otp"
                                id="otp"
                                inputStyle="text-5xl border-solid border-2 border-indigo-600 bg-slate-200 rounded-md min-w-[10px] min-h-[10px] "
                                containerStyle="flex justify-between w-full"
                                inputType="text"
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => <input {...props} />}
                            />
                            <div className="flex">
                                <p>Mã sẽ hết hiệu lực trong </p>
                                <Timer key={timer} second={90}></Timer>
                                <p>giây</p>
                            </div>
                            <div className="my-6 flex justify-center items-center">
                                <Button
                                    className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                    onClick={verifingOTP}
                                >
                                    Xác nhận
                                </Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="">Bạn không nhận được email ? </p>
                                <Button variant="link" className=" text-sky-400" onClick={reSendMail}>
                                    Gửi lại
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Nhập mật khẩu mới */}
            {step === 3 && (
                <div className={cx('forgotPassword__modal__3')}>
                    <div className={cx('forgotPassword__modal__3-inner', 'rounded-2xl border-2')}>
                        <div className="forgotPassword__header flex flex-col items-center justify-center">
                            <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />

                            <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                        </div>
                        <ResetForm></ResetForm>
                    </div>
                </div>
            )}
        </>
    );
}

export default ForgotPassword;
