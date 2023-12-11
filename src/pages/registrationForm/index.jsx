import classNames from 'classnames/bind';

import React, { useState, useEffect } from 'react';

import styles from './ContractPayment.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const cx = classNames.bind(styles);

function RegistrationForm() {
    const [relationship, setRelationship] = useState('');
    const [gender, setGender] = useState('');
    const [insurance, setInsurance] = useState('');

    // tính toán tuổi từ ngày sinh 
    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const [birthdate, setBirthdate] = useState('2023-01-01');
    const [age, setAge] = useState(calculateAge('2023-01-01'));
    
    const handleBirthdateChange = (event) => {
        const newBirthdate = event.target.value;
        setBirthdate(newBirthdate);
        setAge(calculateAge(newBirthdate));
      };

    // 

    return (
        <>
            <div className="bg-white">
                <div className='text-3xl font-semibold text-sky-500 uppercase pt-6 pb-6 ml-6'>
                    Mua bảo hiểm KNH        
                </div>
              
                <div className='font-semibold ml-6'>
                        Thông tin người được bảo hiểm
                </div>

                <div className="grid grid-cols-4 gap-4 sm:gap-2 ml-6">
                    
                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor='relationship'>Mối quan hệ với người mua</Label>
                            <Select
                                onValueChange={(e) => {
                                    setRelationship(e);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Chọn mối quan hệ" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Bản thân">Bản thân</SelectItem>
                                        <SelectItem value="Cha/Mẹ">Cha/Mẹ</SelectItem>
                                        <SelectItem value="Vợ/Chồng">Vợ/Chồng</SelectItem>
                                        <SelectItem value="Anh/Chị/Em">Anh/Chị/Em</SelectItem>
                                        <SelectItem value="Con">Con</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='pt-2'>
                            <Label htmlFor='gender'>Giới tính</Label>
                            <Select
                                onValueChange={(e) => {
                                    setGender(e);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Chọn giới tính" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Nam">Nam</SelectItem>
                                        <SelectItem value="Nữ">Nữ</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='pt-2'>
                            <Label htmlFor='address'>Địa chỉ</Label>
                            <Input type="text" placeholder="Địa chỉ" ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor='name'>Họ tên</Label>
                            <Input type="text" placeholder="Nhập họ tên" ></Input>
                        </div>

                        <div className='pt-2'>
                            <Label htmlFor='phoneNumber'>Số điện thoại</Label>
                            <Input type="number" placeholder="Nhập số điện thoại" ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor="birthdate">Ngày sinh</Label>
                            <Input
                                type="date"
                                id="birthdate"
                                value={birthdate}
                                onChange={handleBirthdateChange}
                            />
                        </div>
                        
                        <div className='pt-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input type="text" placeholder="Nhập địa chỉ email" ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor="age">Tuổi</Label>
                            <Input type="text" value={age} readOnly />
                        </div>

                        <div className='pt-2'>
                            <Label htmlFor='citizenID'>CMND/CCCD</Label>
                            <Input type="number" placeholder="CMND/CCCD" ></Input>
                        </div>  
                    </div>    
                </div>

                <div className={cx('line')}></div>

                <div className='font-semibold ml-6 pt-3'>
                        Chọn gói bảo hiểm
                </div>

                <div className="grid grid-cols-4 gap-4 sm:gap-2 ml-6">
                    
                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor='startDate'>Ngày hiệu lực</Label>
                            <Input
                                type="date"
                                id="start-date"
                                // value={startdate}
                                // onChange={handleBirthdateChange}
                            />
                        </div>

                        <div className='pt-2'>
                            <Label htmlFor='insurance'>Gói bảo hiểm</Label>
                            <Select
                                onValueChange={(e) => {
                                    setInsurance(e);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Chọn gói bảo hiểm" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Vàng">Gold</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor='startTime'>Thời gian bắt đầu</Label>
                            <Input type="time" id="start-time" name="start-time"></Input>
                        </div>

                        <div className='pt-2'>
                            <Label htmlFor='oldContract'>Số hợp đồng cũ</Label>
                            <Input type="number" placeholder="Nhập số hợp đồng cũ" ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor="endDate">Ngày kết thúc</Label>
                            <Input
                                type="date"
                                id="end-date"
                                // value={birthdate}
                                // onChange={handleBirthdateChange}
                            />
                        </div>
                            
                        <div className='pt-2'>
                            <Label htmlFor='fee'>Phí bảo hiểm</Label>
                            <Input type="number" placeholder="Nhập phí bảo hiểm" ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}>
                        <div className='pt-2'>
                            <Label htmlFor='endTime'>Thời gian kết thúc</Label>
                            <Input type="time" id="end-time" name="end-time"></Input>
                        </div>
                    </div>      
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Button style={{ fontWeight: 'bold', marginRight: '50px', backgroundColor: '#bae6fd', color: '#075985' }}>
                        Chi tiết quyền lợi
                    </Button>

                    <Button style={{ fontWeight: 'bold', marginLeft: '50px', backgroundColor: '#0369a1' }}>
                        Tiếp tục
                    </Button>
                </div>
            </div>
        
        </>
    )

}

export default RegistrationForm;


