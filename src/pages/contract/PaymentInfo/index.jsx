import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './PaymentInfo.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axiosInstance from '../../../utils/axios';
import { useToast } from '@/components/ui/use-toast';
import { yupResolver } from '@hookform/resolvers/yup';

const cx = classNames.bind(styles);

const schema = yup
    .object({
        name: yup.string().required('Họ tên không được để trống'),
        phone_number: yup.string().required('Số điện thoại không được để trống'),
        invoice_id: yup.string().required('Mã thanh toán không được để trống'),
        periodic_fee: yup.string().required('Số tiền không được để trống'),
    })
    .required();

function ContractPaymentInfo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const { toast } = useToast();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            await axiosInstance.post('/contractPaymentInfo', {
                fullName: data.name,
                phone_number: data.phone_number,
                invoice_id: data.invoice_id,
                periodic_fee: data.periodic_fee,
            });
            toast({
                description: 'Đăng ký thành công.',
                variant: 'success',
            });
        } catch (error) {
            console.log(error);
            toast({
                description: 'Lỗi hệ thống vui lòng thử lại.',
                variant: 'destructive',
            });
        }
    };
    return (
        <div className="mx-3 md:mx-6">
            <div className="bg-white">
                <div className="text-3xl font-semibold text-[#3e8bcc] uppercase pt-8 pb-8">
                    Thông tin thanh toán hợp đồng
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
                    <div className={cx('transfer_info', 'col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1')}>
                        <div className="text-2xl uppercase font-semibold text-white pb-10">Thông tin chuyển khoản</div>

                        {/* thông tin tài khoản nhóm */}
                        <div className="text-white flex flex-col justify-center">
                            <div className="mb-2">
                                Tên tài khoản:
                                <div className={cx('info-text')}> Bảo hiểm sức khỏe KNH</div>
                            </div>

                            <div className="mb-2">
                                Số điện thoại:
                                <div className={cx('info-text')}> 0123456789</div>
                            </div>

                            <div className="">
                                Nội dung chuyển khoản:
                                <div className={cx('info-text')}> Thanh toán cho hợp đồng</div>
                            </div>
                        </div>
                    </div>

                    <form
                        className={cx('input_info', 'ccol-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2')}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="text-2xl uppercase font-semibold pb-5">Thông tin khách hàng thanh toán</div>

                        <div className="border-b"></div>

                        <div className="text-xl pt-5">
                            Phương thức thanh toán:
                            <span className={cx('colored-text-method')}> VNPAY</span>
                        </div>

                        <div className="grid grid-cols-2 gap:2 md:gap-4">
                            <div className={cx('username__wrapper', 'col_span_1')}>
                                <div className="pt-5 mr-5">
                                    <Label htmlFor="name">Họ tên</Label>
                                    <Input
                                        type="text"
                                        placeholder="Nhập họ tên tài khoản"
                                        {...register('name')}
                                    ></Input>
                                    <p className="text-red-600 text-xs">{errors.name?.message}</p>
                                </div>

                                <div className="pt-5 mr-5">
                                    <Label htmlFor="invoice_id">Mã thanh toán</Label>
                                    <Input
                                        type="text"
                                        placeholder="Nhập mã thanh toán"
                                        {...register('invoice_id')}
                                    ></Input>
                                    <p className="text-red-600 text-xs">{errors.invoice_id?.message}</p>
                                </div>
                            </div>

                            <div className={cx('username__wrapper', 'col_span_1')}>
                                <div className="pt-5 ml-5">
                                    <Label htmlFor="phone_number">Số điện thoại</Label>
                                    <Input
                                        type="text"
                                        placeholder="Nhập số điện thoại tài khoản"
                                        {...register('phone_number')}
                                    ></Input>
                                    <p className="text-red-600 text-xs">{errors.phone_number?.message}</p>
                                </div>

                                <div className="pt-5 ml-5">
                                    <Label htmlFor="periodic_fee">Số tiền</Label>
                                    <Input type="text" placeholder="Nhập số tiền" {...register('periodic_fee')}></Input>
                                    <p className="text-red-600 text-xs">{errors.periodic_fee?.message}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
                            <Button type="submit" style={{ fontWeight: 'bold', backgroundColor: '#dc2626' }}>
                                Xác nhận
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContractPaymentInfo;
