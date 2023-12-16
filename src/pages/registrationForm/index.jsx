import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './RegistrationInsurance.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import config from '../../config';
import { ApiInsurancesByAgeCustomer } from '../../services/insuranceService';
import FormatCurrency from '../../components/FormatCurrency/FormatCurrency';

const cx = classNames.bind(styles);

function RegistrationForm() {
    const [relationship, setRelationship] = useState('');
    const [gender, setGender] = useState('');

    // Nam
    const [currentInsurance, setCurrentInsurance] = useState({});
    const [insurances, setInsurances] = useState([]);
    const [birthdate, setBirthdate] = useState('2023-01-01');
    const [age, setAge] = useState(0);

    // Khánh hứng dùm dữ liệu

    // Một form của beneficiary - dựa trên API
    // Một form của đơn đăng ký - mã insurance id lấy từ currentInsurance.inusranceId

    const GetInsurancesByAgeCustomer = async (age) => {
        const res = await ApiInsurancesByAgeCustomer(age);

        if (res && res.data) {
            setInsurances(res.data);
        }
    };

    useEffect(() => {
        GetInsurancesByAgeCustomer(age);
    }, [age]);

    // console.log(insurances);

    const handleBirthdateChange = (event) => {
        // console.log(event.target.value);
        const newBirthdate = event.target.value;

        // Tính tuổi ở đây luôn
        const today = new Date();
        const dateOfBirth = new Date(newBirthdate);
        let age = today.getFullYear() - dateOfBirth.getFullYear();
        const monthDiff = today.getMonth() - dateOfBirth.getMonth();

        // Nếu chưa đến đúng tháng || cùng tháng nhưng ngày chưa đủ
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
            age--;
        }

        setBirthdate(newBirthdate);
        setAge(age);
    };

    console.log(currentInsurance);

    return (
        <div className="mx-3 md:mx-6">
            <div className="bg-white">
                <div className="text-3xl font-semibold text-[#3e8bcc] uppercase pt-8 pb-8">Mua bảo hiểm KNH</div>

                <div className="font-semibold pb-3 border-b-4 border-[#005691]">Thông tin người được bảo hiểm</div>
                {/*  gap-x-10 sm:gap-2 */}
                {/* <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}> */}
                <div className="grid grid-cols-4 gap-2 md:gap-4">
                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="relationship">Mối quan hệ với người mua</Label>
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
                                        <SelectItem value="Anh/Chị/Em">Anh/Chị/Em</SelectItem>
                                        <SelectItem value="Vợ/Chồng">Vợ/Chồng</SelectItem>
                                        <SelectItem value="Con">Con</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="gender">Giới tính</Label>
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

                        <div className="pt-2">
                            <Label htmlFor="address">Địa chỉ</Label>
                            <Input type="text" placeholder="Địa chỉ"></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="name">Họ tên</Label>
                            <Input type="text" placeholder="Nhập họ tên"></Input>
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="phoneNumber">Số điện thoại</Label>
                            <Input type="number" placeholder="Nhập số điện thoại"></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="birthdate">Ngày sinh</Label>
                            <Input type="date" id="birthdate" value={birthdate} onChange={handleBirthdateChange} />
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="text" placeholder="Nhập địa chỉ email"></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="age">Tuổi</Label>
                            <Input type="text" value={age} readOnly />
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="citizenID">CMND/CCCD</Label>
                            <Input type="number" placeholder="CMND/CCCD"></Input>
                        </div>
                    </div>
                </div>

                <div className={cx('line', 'mb-6')}></div>

                <div className="font-semibold pb-3 border-b-4 border-[#005691]">Chọn gói bảo hiểm</div>

                <div className="grid grid-cols-4 gap-2 md:gap-4">
                    {/* <div className={cx('username__wrapper', 'col_span_1 ml-4 mr-4')}> */}
                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="startDate">Ngày hiệu lực</Label>
                            <Input
                                type="date"
                                id="start-date"
                                // value={startdate}
                                // onChange={handleBirthdateChange}
                            />
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="insurance">Gói bảo hiểm</Label>
                            <Select
                                onValueChange={(e) => {
                                    setCurrentInsurance(e);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Chọn gói bảo hiểm" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {insurances.map((ins) => (
                                            <SelectItem key={`insurance-${ins?.insuranceId}`} value={ins}>
                                                {ins?.nameInsurance}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="startTime">Thời gian bắt đầu</Label>
                            <Input type="time" id="start-time" name="start-time"></Input>
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="oldContract">Số hợp đồng cũ</Label>
                            <Input type="number" placeholder="Nhập số hợp đồng cũ"></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="endDate">Ngày kết thúc</Label>
                            <Input
                                type="date"
                                id="end-date"
                                // value={birthdate}
                                // onChange={handleBirthdateChange}
                            />
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="fee">Phí bảo hiểm</Label>
                            <Input
                                readOnly
                                type="text"
                                placeholder="Nhập phí bảo hiểm"
                                value={currentInsurance?.price ? FormatCurrency(currentInsurance?.price) : '0đ'}
                                className="bg-green-100 border-green-200 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                            ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="endTime">Thời gian kết thúc</Label>
                            <Input type="time" id="end-time" name="end-time"></Input>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Button
                        style={{
                            fontWeight: 'bold',
                            marginRight: '50px',
                            backgroundColor: '#bae6fd',
                            color: '#075985',
                        }}
                    >
                        Chi tiết quyền lợi
                    </Button>

                    <Button style={{ fontWeight: 'bold', marginLeft: '50px', backgroundColor: '#0369a1' }}>
                        <Link to={config.routes.contractPayment}>Tiếp tục</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
