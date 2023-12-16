import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './PaymentInfo.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const cx = classNames.bind(styles);

function ContractPaymentInfo() {
    return (
        <div className='mx-3 md:mx-6'>
            <div className='bg-white'>
                <div className="text-3xl font-semibold text-[#3e8bcc] uppercase pt-8 pb-8">Thông tin thanh toán hợp đồng</div>

                <div className='grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3'>
                    <div className={cx('transfer_info', 'col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1')}>
                        <div className='text-2xl uppercase font-semibold text-white pb-10'>Thông tin chuyển khoản</div>
                        
                        {/* thông tin MoMo của nhóm */}
                        <div className='text-white flex flex-col justify-center'>
                            <div className='mb-2'>
                                Tên tài khoản:
                                <div className={cx('info-text')}> Bảo hiểm sức khỏe KNH</div>
                            </div>

                            <div className='mb-2'>
                                Số điện thoại:
                                <div className={cx('info-text')}> 0123456789</div>
                            </div>

                            <div className=''>
                                Nội dung chuyển khoản:
                                <div className={cx('info-text')}> Thanh toán cho hợp đồng</div>
                            </div>
                        </div>

                    </div>

                    <div className={cx('username__wrapper', 'ccol-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 p-4 rounded-md border')}>
                        <div className='text-2xl uppercase font-semibold pb-5'>Thông tin khách hàng thanh toán</div>

                        <div className='border-b'></div>

                        <div className='text-xl pt-5'>Phương thức thanh toán: 
                            <span className={cx('colored-text-MoMo')}> MoMo</span>
                        </div>
                        
                        <div className='grid grid-cols-2 gap:2 md:gap-4'>
                            <div className={cx('username__wrapper', 'col_span_1')}>
                                <div className='pt-5 mr-5'>
                                    <Label htmlFor='name'>Họ tên</Label>
                                    <Input type='text' placeholder='Nhập họ tên tài khoản'></Input>
                                </div>

                                <div className='pt-5 mr-5'>
                                    <Label htmlFor='invoice_id'>Mã thanh toán</Label>
                                    <Input type='text' placeholder='Nhập mã thanh toán MoMo'></Input>
                                </div>                                
                            </div>
                            
                            <div className={cx('username__wrapper', 'col_span_1')}>
                                <div className='pt-5 ml-5'>
                                    <Label htmlFor='phone_number'>Số điện thoại</Label>
                                    <Input type='text' placeholder='Nhập số điện thoại tài khoản'></Input>
                                </div>
                                
                                <div className='pt-5 ml-5'>
                                    <Label htmlFor='periodic_fee'>Số tiền</Label>
                                    <Input type='text' placeholder='Nhập số tiền'></Input>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
                            <Button style={{ fontWeight: 'bold', backgroundColor: '#db2777' }}>Xác nhận</Button>
                        </div>                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContractPaymentInfo;