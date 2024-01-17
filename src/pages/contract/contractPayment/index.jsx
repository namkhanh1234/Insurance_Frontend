import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ContractPayment.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash, faFileContract } from '@fortawesome/free-solid-svg-icons';

import { ApiGetUserById } from '../../../services/userService';
import { ApiPostContract } from '../../../services/contractService';
import { ApiGetBeneficiaryById } from '../../../services/beneficiaryService';
import { ApiGetRegistrationById } from '../../../services/registrationService';
import { ApiPaymentContractByVnPay } from '../../../services/paymentContractService';
import { format, set } from 'date-fns';
import FormatCurrency from '../../../components/FormatCurrency/FormatCurrency';

const cx = classNames.bind(styles);

function ContractPayment() {
    const [isBuyerAdditionalInfoVisible, setBuyerAdditionalInfoVisible] = useState(false);
    const [isBuyeeAdditionalInfoVisible, setBuyeeAdditionalInfoVisible] = useState(false);

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [beneficiaryData, setBeneficiaryData] = useState({});
    const [registrationData, setRegistrationData] = useState({});
    const [contractData, setContractData] = useState({});

    const auth = useSelector((state) => state.auth);

    const userId = localStorage.getItem('user_id');
    const registrationId = localStorage.getItem('registrationId');
    const beneficiaryId = localStorage.getItem('beneficiaryId');

    // console.log('>> Check registrationId: ', registrationId);
    // console.log('>> Check beneficiaryId: ', beneficiaryId);

    const GetUserById = async (id) => {
        const response = await ApiGetUserById(id);

        if (response && response.data) {
            setUser(response.data);
        }
    };

    const GetBeneficiaryById = async (beneficiaryId) => {
        const response = await ApiGetBeneficiaryById(beneficiaryId);

        if (response && response.data) {
            // console.log('>> Check api beneficiary: ', response.data);
            setBeneficiaryData(response.data);
        }
    };

    const GetRegistrationById = async (registrationId) => {
        const response = await ApiGetRegistrationById(registrationId);

        if (response && response.data) {
            // console.log('>> Check api registration: ', response.data);
            setRegistrationData(response.data);
        }
    };

    useEffect(() => {
        // GetUserById(auth.userId);
        // Tạm thời localStorage
        GetUserById(userId);

        if (beneficiaryId != null || beneficiaryId != undefined) {
            GetBeneficiaryById(beneficiaryId);
        }

        if (registrationId != null || registrationId != undefined) {
            GetRegistrationById(registrationId);
        }
    }, [beneficiaryId]);

    const PostRegistrationId = async (registrationId) => {
        const res_contract = await ApiPostContract(registrationId);

        if (res_contract && res_contract.data) {
            console.log('>> Check api contract payment: ', res_contract.data);
            setContractData(res_contract.data);
            // navigate(config.routes.contractPaymentInfo);

            // Tạm thời
            localStorage.setItem('contractId', res_contract.data.contractId);

            // Gọi api thanh toán - Tạm thời
            PostPaymentContract({
                data: {
                    contractId: res_contract.data.contractId,
                    paymentAmount: res_contract.data.totalFee,
                },
            });
        }
    };

    const PostPaymentContract = async ({ data }) => {
        console.log('>> Check data: ', data);
        const res = await ApiPaymentContractByVnPay({ data: data });

        if (res && res.data) {
            console.log('>> Check api payment vnp: ', res.data);
            // navigate(config.routes.contractPaymentInfo);

            window.location.href = res.data;
        }
    };

    const formatingDated = (birthDay) => {
        if (!birthDay) return;
        const formattedDate = format(new Date(birthDay), 'yyyy-MM-dd');
        return formattedDate;
    };

    const toggleBuyerAdditionalInfo = () => {
        setBuyerAdditionalInfoVisible(!isBuyerAdditionalInfoVisible);
    };

    const toggleBuyeeAdditionalInfo = () => {
        setBuyeeAdditionalInfoVisible(!isBuyeeAdditionalInfoVisible);
    };

    const onSubmit = () => {
        PostRegistrationId(registrationId);
    };

    return (
        <>
            <div className="mx-4 grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 bg-white">
                <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
                    <div className="text-3xl font-semibold text-sky-500 uppercase pb-6 mt-6 ml-6">
                        Xác nhận đơn thanh toán
                    </div>

                    {/*Thông tin người mua*/}
                    <div className={cx('contractPayment_modal')}>
                        <div className={cx('personClass_modal', 'rounded-lg mr-20 mb-1')}>
                            <div className="Buyer__header flex">
                                <h2 className="text-sky-50 font-semibold uppercase ml-3">Bên mua bảo hiểm</h2>
                            </div>
                        </div>

                        <div className={cx('personInfo_modal', 'rounded-lg border-2 border-gray-200 mr-20 mb-6')}>
                            <div className="Buyer__info items-center">
                                <p className="info ml-3">Họ tên: {user?.fullName}</p>
                                <p className="info ml-3">Ngày sinh: {formatingDated(user?.dateOfBirth)}</p>
                            </div>

                            <FontAwesomeIcon
                                onClick={toggleBuyerAdditionalInfo}
                                className="absolute top-2 right-4 cursor-pointer"
                                icon={isBuyerAdditionalInfoVisible ? faEyeSlash : faEye}
                            />

                            {isBuyerAdditionalInfoVisible && (
                                <div>
                                    <p className="info ml-3">Giới tính: {user?.sex}</p>
                                    <p className="info ml-3">CMND/CCCD: {user?.cardIdentification}</p>
                                    <p className="info ml-3">Số điện thoại: {user?.phone}</p>
                                    <p className="info ml-3">Email: {user?.email}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Thông tin người được mua*/}
                    <div className={cx('contractPayment_modal')}>
                        <div className={cx('personClass_modal', 'rounded-lg mr-20 mb-1')}>
                            <div className="Buyer__header flex">
                                <h2 className="text-sky-50 font-semibold uppercase ml-3">Người được bảo hiểm</h2>
                            </div>
                        </div>

                        <div className={cx('personInfo_modal', 'rounded-lg border-2 mr-20 mb-6')}>
                            <div className="Buyee__info items-center">
                                <p className="info ml-3">Họ tên: {beneficiaryData?.fullName}</p>
                                {/* <p className="info ml-3">Phí bảo hiểm: {insuranceFee} </p> */}
                            </div>

                            <FontAwesomeIcon
                                onClick={toggleBuyeeAdditionalInfo}
                                className="absolute top-2 right-4 cursor-pointer"
                                icon={isBuyeeAdditionalInfoVisible ? faEyeSlash : faEye}
                            />

                            {isBuyeeAdditionalInfoVisible && (
                                <div>
                                    <p className="info ml-3">
                                        Mối quan hệ: {beneficiaryData?.relationshipPolicyholder}
                                    </p>
                                    <p className="info ml-3">
                                        Ngày sinh: {formatingDated(beneficiaryData?.dateOfBirth)}
                                    </p>
                                    <p className="info ml-3">Giới tính: {beneficiaryData?.sex}</p>
                                    <p className="info ml-3">CMND/CCCD: {beneficiaryData?.cardIdentification}</p>
                                    <p className="info ml-3">Số điện thoại: {beneficiaryData?.phone}</p>
                                    <p className="info ml-3">Email: {beneficiaryData?.email}</p>
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
                        <div className={cx('paymentMethod_modal', 'rounded-lg mr-20 mb-2')}>
                            <div>
                                <h2 className="text-sky-50 font-semibold uppercase ml-3">Phương thức thanh toán</h2>
                            </div>
                        </div>

                        <div className={cx('payments')}>
                            <RadioGroup defaultValue="MoMo" className="flex">
                                <div className="flex items-center space-x-2 ml-6">
                                    <RadioGroupItem value="MoMo" id="r1" className="" />
                                    <Label htmlFor="r1">Ví điện tử MoMo</Label>
                                </div>
                                <div className="flex items-center space-x-2 ml-6">
                                    <RadioGroupItem value="atStore" id="r2" />
                                    <Label htmlFor="r2">Trực tiếp tại điểm bán</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                    <div className="text-3xl font-semibold text-sky-500 uppercase pb-6 mt-6">Hóa đơn thanh toán</div>

                    {/*Nhập mã giảm giá*/}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            type="text"
                            placeholder="Nhập mã giảm giá"
                            style={{ marginRight: '5px', backgroundColor: '#d3d3d3' }}
                        />
                        <Button className="flex items-center justify-center bg-rose-500 hover:bg-rose-600">
                            Áp dụng
                        </Button>
                    </div>

                    <div className={cx('line')}></div>
                    <div>
                        <p>Tổng phí bảo hiểm: {FormatCurrency(registrationData?.basicInsuranceFee)}</p>
                    </div>

                    <div className={cx('line')}></div>
                    <div>
                        <p className="uppercase text-sky-700 font-semibold">
                            Tổng phí thanh toán: {FormatCurrency(registrationData?.totalFee)}
                        </p>
                    </div>

                    <div className={cx('line')}></div>
                    <div className="items-top flex space-x-2">
                        <Checkbox
                            id="contractTerm"
                            className="data-[state=checked]:bg-blue-500  dark:data-[state=checked]:bg-blue-100 dark:data-[state=checked]:text-blue-800"
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label
                                htmlFor="contractTerm"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Chấp nhận điều khoản hợp đồng
                            </Label>
                            <p className="text-sm text-muted-foreground mr-5 text-justify">
                                Tôi đồng ý cam kết rằng các thông tin đã khai báo trên đây là trung thực, đầy đủ, chính
                                xác và hoàn toàn chịu trách nhiệm về các thông tin đã khai báo này. Tôi đã đọc, hiểu rõ
                                và chấp nhận toàn bộ các điều khoản bảo hiểm, quy tắc bảo hiểm và các tài liệu đính kèm
                                khác và Thỏa thuận sử dụng ứng dụng.
                            </p>
                        </div>
                    </div>

                    {/**Thanh toán */}
                    <div className="mt-10" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <Button className="bg-sky-600 hover:bg-sky-700" onClick={onSubmit}>
                            Thanh toán
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContractPayment;
