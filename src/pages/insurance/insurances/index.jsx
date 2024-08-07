import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import styles from './Insurances.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';

import FormatCurrency from '../../../components/FormatCurrency/FormatCurrency';
import { ApiGetAllAges, ApiGetAllInsurances } from '../../../services/insuranceService';

import { ApiGetBenefitsDetail } from '../../../services/benefitdetailService';

const cx = classNames.bind(styles);

function Insurances() {
    const [currentAge, setCurrentAge] = useState({
        fromAge: 1,
        toAge: 3,
    });
    const [ages, setAges] = useState([]);
    const [insurances, setInusurances] = useState([]);
    const [detail, setDetail] = useState([]);

    const GetAllAges = async () => {
        const res = await ApiGetAllAges();

        if (res && res.data) {
            setAges(res.data);
        }
    };

    const GetAllInsurancesByAge = async (currentAge) => {
        const res = await ApiGetAllInsurances(currentAge);

        if (res && res.data) {
            setInusurances(res.data);
        }
    };
    const callApi = async (id) => {
        console.log(id);
        try {
            const response = await ApiGetBenefitsDetail(id);
            if (response) {
                console.log(response.data);
                setDetail(response.data);
            } else {
                console.log('abc');
            }
        } catch (error) {
            console.log(error);
        }
    };

    // console.log('Checked >> ', currentAge);
    // console.log('Checked data >> ', insurances);

    useEffect(() => {
        GetAllAges();

        // console.log('call useffect');
        // console.log(currentAge);
        GetAllInsurancesByAge(currentAge);
    }, [currentAge]);

    return (
        <div className="mx-3 md:mx-6">
            <div className="text-2xl font-semibold text-[#3e8bcc] select-none uppercase pt-8 pb-3">
                CHỌN SẢN PHẨM BẢO HIỂM
            </div>
            <div className="mb-8"></div>
            <div className={cx('age-ranges', 'custom-scroll', 'py-3 flex')}>
                {ages.map((age) => (
                    <div key={`age-${age?.fromAge}`}>
                        <input
                            value={age}
                            type="radio"
                            name="age"
                            id={`range${age?.fromAge}`}
                            className={cx('age__item-input')}
                        />

                        <label
                            htmlFor={`range${age?.fromAge}`}
                            className={cx('age__item-label')}
                            onClick={() => setCurrentAge(age)}
                        >
                            {age?.fromAge === 0
                                ? `60 ngày tuổi < ${age?.toAge + 1} tuổi`
                                : `${age?.fromAge}-${age?.toAge} tuổi`}
                        </label>
                    </div>
                ))}
            </div>

            <div className="gender">
                <p className="font-semibold  mt-4 mb-2">Giới tính</p>
                <label htmlFor="m">
                    <input type="radio" id="m" className="mr-1" />
                    Nam
                </label>
                <label htmlFor="f">
                    <input type="radio" id="f" className="ml-2 mr-1" />
                    Nữ
                </label>
            </div>
            <div className="supplemental_benefits">
                <p className="font-semibold mt-4 mb-2">Quyền lợi bổ sung</p>
                <div className={cx('custom-scroll', 'flex space-x-8 py-3')}>
                    <div className="space-x-2 ">
                        <Checkbox id="pregnant" className="data-[state=checked]:bg-blue-500" />
                        <Label htmlFor="pregnant" className="font-normal">
                            Thai sản
                        </Label>
                    </div>
                    <div className="space-x-2 ">
                        <Checkbox id="outpatient" className="data-[state=checked]:bg-blue-500" />
                        <Label htmlFor="outpatient" className="font-normal">
                            Bảo hiểm ngoại trú
                        </Label>
                    </div>
                    <div className="space-x-2 ">
                        <Checkbox id="dentistry" className="data-[state=checked]:bg-blue-500" />
                        <Label htmlFor="dentistry" className="font-normal">
                            Nha khoa
                        </Label>
                    </div>
                    <div className="space-x-2 ">
                        <Checkbox id="inpatient" className="data-[state=checked]:bg-blue-500" />
                        <Label htmlFor="inpatient" className="font-normal">
                            Trợ cấp nằm viện
                        </Label>
                    </div>
                </div>
            </div>
            <div className="mt-10 xl:mx-[100px] grid gap-6 sm:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {insurances.map((insurance) => (
                    <div key={`insurance-${insurance.insuranceId}`} className={cx('product')}>
                        <h3 className="name_package mb-2 text-lg font-medium text-black-500 text-center">
                            {insurance?.nameInsurance}
                        </h3>
                        <div className="text-sm font-medium">Mức quyền lợi cao nhất</div>
                        <span className="text-sm font-medium">
                            Phí quyền lợi chính: {FormatCurrency(insurance?.price)}
                        </span>
                        <div className="text-sm font-normal text-emerald-500">{`Giảm giá: ${insurance?.discount}%`}</div>
                        <div className="my-3 border-b-2 border-dashed border-gray-500"></div>
                        {/* Tạm thời tính giá giảm ở front-end */}
                        <span className="text-sm font-medium">
                            Tổng số tiền: {FormatCurrency(insurance?.priceDiscount)}
                        </span>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Button style={{ backgroundColor: '#3e8bcc' }} className="text-center mt-4 w-full">
                                Mua ngay
                            </Button>
                        </div>
                        {/* <div className="text-center text-sm font-normal text-gray-500 mt-4 cursor-pointer">
                            Chi tiết quyền lợi
                        </div> */}
                        <div className="flex justify-center mt-2 text-gray-500">
                            {/* {callApi(insurance.insuranceId)} */}
                            <Dialog>
                                <DialogTrigger onClick={() => callApi(insurance.insuranceId)}>
                                    Chi tiết quyền lợi
                                </DialogTrigger>
                                <DialogContent className="overflow-y-auto max-h-[90vh]">
                                    {detail.map((data, index) => (
                                        <DialogHeader key={`benefit-${index}`}>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Insurances;
