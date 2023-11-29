import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import styles from './Register.module.scss';
import config from '../../../config';
import logo from '@/assets/images/logo.png';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import axiosInstance from '../../../utils/axios';
import { useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);
YupPassword(yup);
const schema = yup
    .object({
        email: yup.string().required('Email không được để trống').email('Email không đúng định dạng'),
        name: yup.string().required('Họ tên không được để trống'),
        password: yup
            .string()
            .required('Mật khẩu không được để trống')
            .password()
            .min(8, 'Mật khẩu chứa ít nhất 8 kí tự')
            .minLowercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái thường')
            .minUppercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái in hoa')
            .minNumbers(1, 'Mật khẩu chứa ít nhất 1 số')
            .minSymbols(1, 'Mật khẩu chứa ít nhất 1 kí tự đặc biệt'),
        confirm_password: yup
            .string()
            .label('confirm password')
            .required('Vui lòng nhập lại mật khẩu')
            .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
        phone_number: yup.string().required('Số điện thoại không được để trống'),
        birthday: yup.string().required('Ngày sinh không được để trống'),
        id: yup.string().required('Số căn cước không được để trống'),
    })
    .required();

function Register() {
    const [gender, setGender] = useState('Nam');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        // try {
        //     await axiosInstance.post('/User/register', {
        //         email: data.email,
        //         password: data.password,
        //         fullName: data.name,
        //         phone: data.phone_number,
        //         sex: gender,
        //         dateOfBirth: '2023-11-29T07:25:14.027Z',
        //         cardIdentification: data.id,
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
        console.log(data);
        axios
            .post('http://localhost:5118/api/v1/User/register', {
                email: data.email,
                password: data.password,
                fullName: data.name,
                phone: data.phone_number,
                sex: gender,
                dateOfBirth: '2023-11-29T07:25:14.027Z',
                cardIdentification: data.id,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className={cx('register__modal')}>
                <div className={cx('register__modal-inner', 'rounded-2xl border-2')}>
                    <div className="flex flex-col items-center justify-center">
                        <img className="h-24 w-24 rounded-full" src={logo} alt="KNH" />
                        <h2 className="mt-2 font-semibold">Quản lý hợp đồng bảo hiểm online cùng KNH</h2>
                    </div>

                    {/* register__form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="name">Họ tên</Label>
                            <Input type="text" placeholder="Nguyễn Văn A" {...register('name')} />
                            <p className="text-red-600 text-xs">{errors.name?.message}</p>
                        </div>
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="name">Giới tính</Label>
                            <Select
                                onValueChange={(e) => {
                                    setGender(e);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Nam" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Nam">Nam</SelectItem>
                                        <SelectItem value="Nữ">Nữ</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="name">CCCD</Label>
                            <Input type="text" placeholder="012324567" {...register('id')} />
                            <p className="text-red-600 text-xs">{errors.id?.message}</p>
                        </div>
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" placeholder="johndoe104@gmail.com" {...register('email')} />
                            <p className="text-red-600 text-xs">{errors.email?.message}</p>
                        </div>
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="phonenumber">Số điện thoại</Label>
                            <Input type="text" placeholder="0123456789" {...register('phone_number')} />
                            <p className="text-red-600 text-xs">{errors.phone_number?.message}</p>
                        </div>
                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="birthday">Ngày sinh</Label>
                            <Input type="date" {...register('birthday')} />
                            <p className="text-red-600 text-xs">{errors.birthday?.message}</p>
                        </div>

                        <div className={cx('password__wrapper', 'mt-2 space-y-1')}>
                            <Label htmlFor="password">Mật khẩu</Label>
                            <Input type="password" placeholder="•••••••••" {...register('password')} />
                            <p className="text-red-600 text-xs">{errors.password?.message}</p>
                        </div>

                        <div className={cx('username__wrapper', 'space-y-1')}>
                            <Label htmlFor="confirmPassword">Nhập lại mật khẩu</Label>
                            <Input type="password" placeholder="•••••••••" {...register('confirm_password')} />
                            <p className="text-red-600 text-xs">{errors.confirm_password?.message}</p>
                        </div>
                        <div className="my-6 flex justify-center items-center">
                            <Button
                                type="submit"
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            >
                                Đăng ký
                            </Button>
                        </div>
                    </form>

                    <div>
                        <Link className="flex justify-center text-normal font-light text-gray-500">Quên mật khẩu</Link>

                        <div className="mt-2 flex justify-center items-center text-sm">
                            <span className="mx-2 text-sm text-gray-400">Bạn đã có tài khoản ?</span>
                            <Link to={config.routes.login} className="font-normal text-blue-600 hover:underline italic">
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Register;
