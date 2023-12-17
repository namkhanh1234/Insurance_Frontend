import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import styles from './Insurances.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import data from './data.json';

import { ApiGetAllAges, ApiGetAllInsurances } from '../../../services/insuranceService';

const cx = classNames.bind(styles);

function Insurances() {
    // const [gender, setGender] = useState(true);
    // function handleRadio() {
    //     setGender(!gender);
    // }
    // const [selectedRange, setSelectedRange] = useState(0);
    // const [packageArray, setPackageArray] = useState([]);

    // const LabelCus = ({ title, id }) => {
    //     const handleClick = (e) => {
    //         setSelectedRange(e.target.id);
    //     };
    //     const classNameCX = ['ranges', 'rounded-2xl border-2 mr-2 ml-2'];
    //     return (
    //         <div
    //             key={id}
    //             className={cx('ranges', id == selectedRange ? 'selected' : '', 'rounded-2xl border-2 mr-2 ml-2')}
    //             id={id}
    //             onClick={handleClick}
    //         >
    //             {title}
    //         </div>
    //     );
    // };
    // const PackageItem = ({ type, fee, discount }) => {
    //     return (
    //         <div className={cx('product')}>
    //             <div className="name_package text-lg font-medium text-black-500 text-center">{type}</div>
    //             <div className="text-sm font-medium">Mức quyền lợi cao nhất</div>
    //             <div className="text-sm font-medium">{`Phí Q.Lợi Chính: ${fee} VND`}</div>
    //             <div className="text-sm font-normal text-emerald-500">{`Giảm giá: ${discount} VND`}</div>
    //             <div className="text-sm font-light text-gray-500">-------------------------------</div>
    //             <div className="text-sm font-medium">{`Tổng Phí: ${fee} VND`}</div>
    //             <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
    //                 <Button style={{ backgroundColor: '#3e8bcc' }} className="text-center mt-4 w-full">
    //                     Mua ngay
    //                 </Button>
    //             </div>
    //             <div className="text-center text-sm font-normal text-gray-500 mt-4">Chi tiết quyền lợi</div>
    //         </div>
    //     );
    // };

    // const [profit, setProfit] = useState(false);
    // function handleProfit() {
    //     setProfit(!profit);
    // }

    // function renderPakage() {
    //     let tmp = [];
    //     for (let i = selectedRange * 5 + 1; i <= selectedRange * 5 + 5; i++) {
    //         const type = data[i - 1].nameInsurance.toString();
    //         const price = data[i - 1].price.toString();
    //         const discount = data[i - 1].discount.toString();
    //         tmp.push(<PackageItem type={type} fee={price} discount={discount} />);
    //     }
    //     setPackageArray(tmp);
    // }
    // useEffect(() => {
    //     // renderPakage();
    //     // console.log(packageArray);
    // }, [selectedRange]);

    const [currentAge, setCurrentAge] = useState({
        fromAge: 1,
        toAge: 3,
    });
    const [ages, setAges] = useState([]);
    const [insurances, setInusurances] = useState([]);

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
            {/* <div className="text-2xl font-semibold text-[#3e8bcc] select-none uppercase pt-8 pb-3">
                CHỌN SẢN PHẨM BẢO HIỂM - KHOA
            </div>
            <div className="mb-8"></div>
            <div className="age-ranges pb-3 border-b-4 border-[#005691]">
                <LabelCus id={0} title={'60 ngày tuổi-1 tuổi'}></LabelCus>
                <LabelCus id={1} title={'1-3 tuổi'}></LabelCus>
                <LabelCus id={2} title={'4-6 tuổi'}></LabelCus>
                <LabelCus id={3} title={'7-9 tuổi'}></LabelCus>
                <LabelCus id={4} title={'10-18 tuổi'}></LabelCus>
                <LabelCus id={5} title={'19-30 tuổi'}></LabelCus>
                <LabelCus id={6} title={'31-40 tuổi'}></LabelCus>
                <LabelCus id={7} title={'41-50 tuổi'}></LabelCus>
                <LabelCus id={8} title={'51-60 tuổi'}></LabelCus>
                <LabelCus id={9} title={'61-65 tuổi'}></LabelCus>
            </div> */}

            <div className="text-2xl font-semibold text-[#3e8bcc] select-none uppercase pt-8 pb-3">
                CHỌN SẢN PHẨM BẢO HIỂM
            </div>
            <div className="mb-8"></div>
            <div className={cx('age-ranges', 'age-ranges flex pb-3 border-b-4 border-[#005691]')}>
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
                            {/* {age?.fromAge}-{age?.toAge} tuổi */}
                            {age?.fromAge === 0
                                ? `60 ngày tuổi < ${age?.toAge + 1} tuổi`
                                : `${age?.fromAge}-${age?.toAge} tuổi`}
                        </label>
                    </div>
                ))}
            </div>

            <div className="insurance grid grid-cols-5 gap-6 sm:gap-3 mt-10 pb-20">
                {/* <div className={cx('product')}>
                    <div className="name_package text-lg font-medium text-black-500 text-center">{type}</div>
                    <div className="text-sm font-medium">Mức quyền lợi cao nhất</div>
                    <div className="text-sm font-medium">{`Phí Q.Lợi Chính: ${fee} VND`}</div>
                    <div className="text-sm font-normal text-emerald-500">{`Giảm giá: ${discount} VND`}</div>
                    <div className="text-sm font-light text-gray-500">-------------------------------</div>
                    <div className="text-sm font-medium">{`Tổng Phí: ${fee} VND`}</div>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <Button style={{ backgroundColor: '#3e8bcc' }} className="text-center mt-4 w-full">
                            Mua ngay
                        </Button>
                    </div>
                    <div className="text-center text-sm font-normal text-gray-500 mt-4">Chi tiết quyền lợi</div>
                </div> */}
                {insurances.map((insurance) => (
                    <div key={`insurance-${insurance.insuranceId}`} className={cx('product')}>
                        <h3 className="name_package text-lg font-medium text-black-500 text-center">
                            {insurance?.nameInsurance}
                        </h3>
                        <div className="text-sm font-medium">Mức quyền lợi cao nhất</div>
                        <span className="text-sm font-medium">{`Phí Q.Lợi Chính: ${insurance?.price} VND`}</span>
                        <div className="text-sm font-normal text-emerald-500">{`Giảm giá: ${insurance?.discount}%`}</div>
                        <div className="text-sm font-light text-gray-500">-------------------------------</div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Button style={{ backgroundColor: '#3e8bcc' }} className="text-center mt-4 w-full">
                                Mua ngay
                            </Button>
                        </div>
                        <div className="text-center text-sm font-normal text-gray-500 mt-4">Chi tiết quyền lợi</div>
                    </div>
                ))}
            </div>

            {/* <div classnName="gender">
                <p className="font-semibold mt-5">Giới tính</p>
                <label htmlfor="m" onClick={() => handleRadio()}>
                    <input type="radio" id="m" checked={gender} className="mr-1" />
                    Nam
                </label>
                <label htmlfor="f" onClick={() => handleRadio()}>
                    <input type="radio" id="f" checked={!gender} className="ml-2 mr-1" />
                    Nữ
                </label>
            </div>
            <div className="supplemental_benefits">
                <p className="font-semibold mt-5 mb-2 flex">Quyền lợi bổ sung</p>
                <div className="items-center space-x-2 inline-flex mr-12">
                    <Checkbox
                        id="pregnant"
                        onClick={() => handleProfit()}
                        className="data-[state=checked]:bg-blue-500  dark:data-[state=checked]:bg-blue-100 dark:data-[state=checked]:text-blue-800"
                    />
                    <Label htmlFor="pregnant" className="font-normal">
                        Thai sản
                    </Label>
                </div>
                <div className="items-center space-x-2 inline-flex mr-12">
                    <Checkbox
                        id="outpatient"
                        onClick={() => handleProfit()}
                        className="data-[state=checked]:bg-blue-500  dark:data-[state=checked]:bg-blue-100 dark:data-[state=checked]:text-blue-800"
                    />
                    <Label htmlFor="outpatient" className="font-normal">
                        Bảo hiểm ngoại trú
                    </Label>
                </div>
                <div className="items-center space-x-2 inline-flex mr-12">
                    <Checkbox
                        id="dentistry"
                        onClick={() => handleProfit()}
                        className="data-[state=checked]:bg-blue-500  dark:data-[state=checked]:bg-blue-100 dark:data-[state=checked]:text-blue-800"
                    />
                    <Label htmlFor="dentistry" className="font-normal">
                        Nha khoa
                    </Label>
                </div>
                <div className="items-center space-x-2 inline-flex mr-12">
                    <Checkbox
                        id="inpatient"
                        onClick={() => handleProfit()}
                        className="data-[state=checked]:bg-blue-500  dark:data-[state=checked]:bg-blue-100 dark:data-[state=checked]:text-blue-800"
                    />
                    <Label htmlFor="inpatient" className="font-normal">
                        Trợ cấp nằm viện
                    </Label>
                </div>
            </div> */}
            {/* <div className="insurance grid grid-cols-5 gap-6 sm:gap-4 mt-10 pb-20">{packageArray}</div> */}
        </div>
    );
}

export default Insurances;
