import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegistrationInsurance.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import config from '../../config';
import images from '../../assets/images';
import { ApiInsurancesByAgeCustomer } from '../../services/insuranceService';
import FormatCurrency from '../../components/FormatCurrency/FormatCurrency';

import { ApiCreateBeneficiary } from '../../services/beneficiaryService';
import { ApiPostRegistration } from '../../services/registrationService';
import { ApiGetBenefitsDetail } from '../../services/benefitdetailService';

const cx = classNames.bind(styles);

function RegistrationForm() {
    const navigate = useNavigate();
    const initialBeneficiaryData = Object.freeze({
        email: '',
        fullName: '',
        phone: '',
        dateOfBirth: '',
        cardidentification: '',
        imageIdentification: '',
        address: '',
    });

    const initialRegistration = Object.freeze({
        startDate: '',
        endDate: '',
        basicInsuranceFee: '',
        totalSupplementBenefitFee: '',
        beneficiaryId: '',
        insuranceId: '',
    });

    const [relationship, setRelationship] = useState('');
    const [gender, setGender] = useState('');
    const [currentInsurance, setCurrentInsurance] = useState({});
    const [insurances, setInsurances] = useState([]);

    const [birthdate, setBirthdate] = useState('2023-01-01');
    const [age, setAge] = useState(0);
    const [imageSrc, setImageSrc] = useState(null);
    const [detail, setDetail] = useState([]);

    // Form - beneficiary  && registration + beneficiaryResult && registrationResult
    const [beneficiaryData, setBeneficiaryData] = useState(initialBeneficiaryData);
    const [beneficiaryResult, setBeneficiaryResult] = useState({});
    const [registration, setRegistration] = useState(initialRegistration);
    const [registrationResult, setRegistrationResult] = useState({});

    // Clean code
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let formDataBeneficiary = new FormData();

            formDataBeneficiary.append('email', beneficiaryData.email);
            formDataBeneficiary.append('fullName', beneficiaryData.fullName);
            formDataBeneficiary.append('phone', beneficiaryData.phone);
            formDataBeneficiary.append('sex', gender);
            formDataBeneficiary.append('dateOfBirth', beneficiaryData.dateOfBirth);
            formDataBeneficiary.append('cardidentification', beneficiaryData.cardidentification);
            formDataBeneficiary.append('imageIdentification', beneficiaryData.imageIdentification);
            formDataBeneficiary.append('address', beneficiaryData.address);
            formDataBeneficiary.append('RelationshipPolicyholder', relationship);

            // console.log('Check form data beneficiary >> ', formDataBeneficiary);
            // for (const pair of formDataBeneficiary.entries()) {
            //     console.log(`${pair[0]}: ${pair[1]}`);
            // }

            // Step 1: Post API beneficiary
            const res = await ApiCreateBeneficiary(formDataBeneficiary);

            // Get result from API beneficiary
            if (res && res.data) {
                console.log(res.data);

                setBeneficiaryResult(res.data);

                // Kiểm tra xem có ID người thụ hưởng không
                if (!res.data.id) {
                    throw new Error('Failed to get beneficiary ID.');
                }
                localStorage.setItem('beneficiaryId', res.data.id);

                // Step 2: Prepare data for beneficiary's registration
                if (currentInsurance.insuranceId != null && currentInsurance.insuranceId != undefined) {
                    registration.insuranceId = currentInsurance.insuranceId;
                    registration.basicInsuranceFee = currentInsurance.price;
                    registration.beneficiaryId = res.data.id;
                    registration.totalSupplementBenefitFee = 0; // chưa làm module này nên cho không

                    // Step 3: Post API registration
                    PostRegistration(registration);

                    // Step 4: Nếu thành công -> Navigate contracts
                    // Navigate ở đây diễn ra trước khi set -> chuyển vào hàm gọi api
                    // navigate(config.routes.contractPayment);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Call API
    const PostRegistration = async (data = {}) => {
        const res = await ApiPostRegistration(data);

        if (res && res.data) {
            // console.log('Result registration: ', res.data);
            // debugger;
            localStorage.setItem('registrationId', res.data.id);

            setRegistrationResult(res.data);
            navigate(config.routes.contractPayment);
        }
    };

    const GetInsurancesByAgeCustomer = async (age) => {
        const res = await ApiInsurancesByAgeCustomer(age);

        if (res && res.data) {
            setInsurances(res.data);
        }
    };

    useEffect(() => {
        GetInsurancesByAgeCustomer(age);
    }, [age]);

    // Handle Change
    const handleBirthdateChange = (event) => {
        // console.log(event.target.value);
        const newBirthdate = event.target.value;

        // Cập nhật datofBirth in form
        if ([event.target.name == 'dateOfBirth']) {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: newBirthdate,
            });
        }

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

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        setBeneficiaryData({
            ...beneficiaryData,
            imageIdentification: file,
        });

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
        }
    };

    const handleChangeBeneficiary = (event) => {
        if ([event.target.name] == 'fullName') {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: event.target.value.trim(),
            });
        } else if ([event.target.name] == 'phone') {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: event.target.value.trim(),
            });
        } else if ([event.target.name] == 'dateOfBirth') {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: event.target.value.trim(),
            });
        } else if ([event.target.name] == 'email') {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: event.target.value.trim(),
            });
        } else if ([event.target.name] == 'cardidentification') {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: event.target.value.trim(),
            });
        } else [event.target.name] == 'address';
        {
            setBeneficiaryData({
                ...beneficiaryData,
                [event.target.name]: event.target.value.trim(),
            });
        }
    };

    const handleChangeRegistration = (event) => {
        if ([event.target.name] == 'startDate') {
            setRegistration({
                ...registration,
                [event.target.name]: event.target.value + 'T00:00:00',
            });
        } else if ([event.target.name] == 'endDate') {
            setRegistration({
                ...registration,
                [event.target.name]: event.target.value + 'T00:00:00',
            });
        }
    };

    const handleDetail = async () => {
        console.log('abc');

        try {
            const response = await ApiGetBenefitsDetail(currentInsurance.insuranceId);
            if (response) {
                console.log('Check benefit detail: ', response.data);
                setDetail(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="mx-3 md:mx-6">
            <div className="bg-white">
                <div className="text-3xl font-semibold text-[#3e8bcc] uppercase pt-8 pb-8">Mua bảo hiểm KNH</div>

                <div className="font-semibold pb-3 border-b-4 border-[#005691]">
                    Thông tin người được bảo hiểm (NDBH)
                </div>
                {/* Image căn cước công dân */}
                <div className="my-6 flex flex-col items-center md:items-start ">
                    <label htmlFor="cccd_file" className="mb-3">
                        <img
                            src={imageSrc ? imageSrc : images.camera}
                            alt=""
                            className="h-[110px] w-auto object-contain"
                        />
                    </label>
                    <Input
                        name="image_file"
                        type="file"
                        id="cccd_file"
                        className="hidden"
                        onChange={handleImageChange}
                    ></Input>
                    <p>
                        Ảnh mặt trước CCCD/CMND
                        <i> (không bắt buộc)</i>
                    </p>
                </div>
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
                            <Input
                                name="address"
                                type="text"
                                placeholder="Địa chỉ"
                                onChange={handleChangeBeneficiary}
                            ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="name">Họ tên</Label>
                            <Input
                                name="fullName"
                                type="text"
                                placeholder="Nhập họ tên"
                                onChange={handleChangeBeneficiary}
                            ></Input>
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="phoneNumber">Số điện thoại</Label>
                            <Input
                                name="phone"
                                type="text"
                                placeholder="Nhập số điện thoại"
                                onChange={handleChangeBeneficiary}
                            ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="birthdate">Ngày sinh</Label>
                            <Input
                                name="dateOfBirth"
                                type="date"
                                id="birthdate"
                                value={birthdate}
                                onChange={handleBirthdateChange}
                            />
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Nhập địa chỉ email"
                                onChange={handleChangeBeneficiary}
                            ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="age">Tuổi</Label>
                            <Input type="text" value={age} readOnly />
                        </div>

                        <div className="pt-2">
                            <Label htmlFor="citizenID">CMND/CCCD</Label>
                            <Input
                                name="cardidentification"
                                type="text"
                                placeholder="CMND/CCCD"
                                onChange={handleChangeBeneficiary}
                            ></Input>
                        </div>
                    </div>
                </div>

                <div className={cx('line', 'mb-6')}></div>

                <div className="font-semibold pb-3 border-b-4 border-[#005691]">Chọn gói bảo hiểm</div>

                <div className="grid grid-cols-4 gap-2 md:gap-4">
                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="start-date">Ngày hiệu lực</Label>
                            <Input name="startDate" type="date" id="start-date" onChange={handleChangeRegistration} />
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
                            <Label htmlFor="start-time">Thời gian bắt đầu</Label>
                            <Input
                                readOnly
                                value="00:00"
                                type="time"
                                id="start-time"
                                className="focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                            ></Input>
                        </div>
                        <div className="pt-2">
                            <Label htmlFor="fee">Phí bảo hiểm</Label>
                            <Input
                                name="basicInsuranceFee"
                                readOnly
                                type="text"
                                placeholder="Nhập phí bảo hiểm"
                                onChange={handleChangeRegistration}
                                value={currentInsurance?.price ? FormatCurrency(currentInsurance?.priceDiscount) : '0đ'}
                                className="bg-green-100 border-green-200 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                            ></Input>
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="end-date">Ngày kết thúc</Label>
                            <Input name="endDate" type="date" id="end-date" onChange={handleChangeRegistration} />
                        </div>
                    </div>

                    <div className={cx('username__wrapper', 'col_span_1')}>
                        <div className="pt-2">
                            <Label htmlFor="end-time">Thời gian kết thúc</Label>
                            <Input
                                readOnly
                                value="00:00"
                                type="time"
                                id="end-time"
                                className="focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                            ></Input>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                style={{
                                    fontWeight: 'bold',
                                    marginRight: '50px',
                                    backgroundColor: '#bae6fd',
                                    color: '#075985',
                                }}
                                onClick={handleDetail}
                                type="button"
                            >
                                Chi tiết quyền lợi
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="overflow-y-auto max-h-[90vh]">
                            {detail.map((data) => (
                                <DialogHeader>
                                    <DialogDescription className="grid grid-cols-3">
                                        <div className="col-span-2 text-black"> {data.nameBenefit}</div>
                                        <div className="text-red-600 col-span-1 text-right">
                                            {FormatCurrency(data.claimSettlement)}
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            ))}
                        </DialogContent>
                    </Dialog>
                    <Button onSubmit={handleSubmit} onClick={handleSubmit} className="bg-[#3E8DCC] hover:bg-sky-700">
                        Tiếp tục
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
