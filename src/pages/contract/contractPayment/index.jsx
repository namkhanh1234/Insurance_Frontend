import classNames from 'classnames/bind';

import React, { useState, useEffect } from 'react';

import styles from './ContractPayment.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContractPayment() {
    
    const BuyerInfo = () => {
        const [buyerData, setBuyerData] = useState([]);

        const fetchData = async() => {
            try {
                const response = await fetch('');
                const data = await response.json();

                setBuyerData(data);
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    const [isBuyerAdditionalInfoVisible, setBuyerAdditionalInfoVisible] = useState(false);
    
    const toggleBuyerAdditionalInfo = () => {
        setBuyerAdditionalInfoVisible(!isBuyerAdditionalInfoVisible);
    };

    const [isBuyeeAdditionalInfoVisible, setBuyeeAdditionalInfoVisible] = useState(false);
    
    const toggleBuyeeAdditionalInfo = () => {
        setBuyeeAdditionalInfoVisible(!isBuyeeAdditionalInfoVisible);
    };
    
    return (
        <>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 bg-white">
                <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
                    <div className='text-3xl font-semibold text-sky-500 uppercase pb-6 mt-6 ml-6'>
                        Xác nhận đơn thanh toán
                    </div>
                    
                    {/*Thông tin người mua*/}
                    <div className={cx('contractPayment_modal')}>
                        <div className={cx('personClass_modal', 'rounded-2xl border-2 mr-20')}>
                            <div className="Buyer__header flex">
                                <h2 className="text-sky-50 font-semibold uppercase ml-3">Bên mua bảo hiểm</h2>
                            </div>
                        </div>

                        <div className={cx('personInfo_modal', 'rounded-2xl border-2 mr-20 mb-6')}>
                            <div className='Buyer__info items-center'>
                                <p className="info ml-3">Họ tên:</p>
                                <p className="info ml-3">Ngày sinh:</p>                                
                            </div>

                            <FontAwesomeIcon
                                onClick={toggleBuyerAdditionalInfo}
                                className="absolute top-2 right-4 cursor-pointer"
                                icon={isBuyerAdditionalInfoVisible ? faEyeSlash : faEye}
                            />

                            {isBuyerAdditionalInfoVisible && (
                                <div>
                                    <p className="info ml-3">Giới tính:</p>
                                    <p className="info ml-3">CMND/CCCD:</p>
                                    <p className="info ml-3">Số điện thoại:</p>
                                    <p className="info ml-3">Email:</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Thông tin người được mua*/}
                    <div className={cx('contractPayment_modal')}>
                        <div className={cx('personClass_modal', 'rounded-2xl border-2 mr-20')}>
                            <div className="Buyer__header flex">
                                <h2 className="text-sky-50 font-semibold uppercase ml-3">Người được bảo hiểm</h2>
                            </div>
                        </div>

                        <div className={cx('personInfo_modal', 'rounded-2xl border-2 mr-20 mb-6')}>
                            <div className='Buyee__info items-center'>
                                <p className="info ml-3">Họ tên:</p>
                                <p className="info ml-3">Phí bảo hiểm:</p>                                                          
                            </div>

                            <FontAwesomeIcon
                                onClick={toggleBuyeeAdditionalInfo}
                                className="absolute top-2 right-4 cursor-pointer"
                                icon={isBuyeeAdditionalInfoVisible ? faEyeSlash : faEye}
                            />

                            {isBuyeeAdditionalInfoVisible && (
                                <div>
                                    <p className="info ml-3">Mối quan hệ:</p>      
                                    <p className="info ml-3">Ngày sinh:</p>      
                                    <p className="info ml-3">Giới tính:</p>
                                    <p className="info ml-3">CMND/CCCD:</p>
                                    <p className="info ml-3">Số điện thoại:</p>
                                    <p className="info ml-3">Email:</p>
                                </div>
                            )}


                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FontAwesomeIcon
                                    icon={faFileContract}
                                    style={{ marginRight: '8px', color: 'grey', cursor: 'pointer' }}
                                />
                                <p
                                    style={{
                                    color: 'grey',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = 'blue')}
                                    onMouseLeave={(e) => (e.target.style.color = 'grey')}
                                >
                                    Xem giấy chứng nhận (Bản xem trước)
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className={cx('contractPayment_modal')}>
                        <div className={cx('paymentMethod_modal', 'rounded-2xl border-2 mr-20 mb-2')}>
                            <div className="Buyer__header flex">
                                <h2 className="text-sky-50 font-semibold uppercase ml-3">Phương thức thanh toán</h2>
                            </div>
                        </div>

                        <div className={cx('payments')}>
                            <RadioGroup defaultValue="MoMo" className='flex'>
                                <div className="flex items-center space-x-2 ml-6 inline-flex">
                                    <RadioGroupItem value="MoMo" id="r1" className=''/>
                                    <Label htmlFor="r1">Ví điện tử MoMo</Label>
                                </div>
                                <div className="flex items-center space-x-2 ml-6 inline-flex">
                                    <RadioGroupItem value="atStore" id="r2" />
                                    <Label htmlFor="r2">Trực tiếp tại điểm bán</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                    <div className='text-3xl font-semibold text-sky-500 uppercase pb-6 mt-6'>
                        Hóa đơn thanh toán
                    </div>
                    
                    {/*Nhập mã giảm giá*/}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input 
                            type='text' 
                            placeholder='Nhập mã giảm giá' 
                            style={{ marginRight: '5px', backgroundColor: '#d3d3d3'}} 
                        />
                        <Button style={{ marginLeft: '5px', marginRight: '10px', backgroundColor: '#FF4500'}}>
                            Áp dụng
                        </Button>
                    </div>

                    <div className={cx('line')}></div>
                    <div>
                        <p>Tổng phí bảo hiểm:</p>
                    </div>

                    <div className={cx('line')}></div>
                    <div>
                        <p className='uppercase text-sky-700 font-semibold'>Tổng phí thanh toán:</p>
                    </div>

                    <div className={cx('line')}></div>
                    <div className="items-top flex space-x-2">
                        <Checkbox id="contractTerm" className='data-[state=checked]:bg-blue-500  dark:data-[state=checked]:bg-blue-100 dark:data-[state=checked]:text-blue-800'/>
                                <div className="grid gap-1.5 leading-none">
                                    <Label
                                        htmlFor="contractTerm"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Chấp nhận điều khoản hợp đồng
                                    </Label>
                                    <p className="text-sm text-muted-foreground mr-5 text-justify">
                                        Tôi đồng ý cam kết rằng các thông tin đã khai báo trên đây là trung thực, đầy đủ, chính xác và hoàn toàn chịu trách nhiệm về các thông tin đã khai báo này. Tôi đã đọc, hiểu rõ và chấp nhận toàn bộ các điều khoản bảo hiểm, quy tắc bảo hiểm và các tài liệu đính kèm khác và Thỏa thuận sử dụng ứng dụng.
                                    </p>
                                </div>
                    </div>
                    
                    {/**Thanh toán */}
                    <div className='mt-10' style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <Button style={{backgroundColor: '#0369a1'}}>
                            Thanh toán
                        </Button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContractPayment;