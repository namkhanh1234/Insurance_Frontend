import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectGroup, SelectContent, SelectItem } from '@/components/ui/select';
import styles from './Insurances.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import data from './data.json';

const cx = classNames.bind(styles);

function Insurances() {
    const [gender, setGender] = useState(true);
    function handleRadio() {
        setGender(!gender);
    }
    const [selectedRange, setSelectedRange] = useState(0);
    const [packageArray, setPackageArray] = useState([]);

    const LabelCus = ({ title, id }) => {
        const handleClick = (e) => {
            setSelectedRange(e.target.id);
        };
        const classNameCX = ['ranges', 'rounded-2xl border-2 mr-2 ml-2'];
        return (
            <div
                key={id}
                className={cx('ranges', id == selectedRange ? 'selected' : '', 'rounded-2xl border-2 mr-2 ml-2')}
                id={id}
                onClick={handleClick}
            >
                {title}
            </div>
        );
    };
    const PackageItem = ({ type, fee, discount }) => {
        return (
            <div className={cx('product')}>
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
            </div>
        );
    };

    const [profit, setProfit] = useState(false);
    function handleProfit() {
        setProfit(!profit);
    }

    function renderPakage() {
        let tmp = [];
        for (let i = selectedRange * 5 + 1; i <= selectedRange * 5 + 5; i++) {
            const type = data[i - 1].nameInsurance.toString();
            const price = data[i - 1].price.toString();
            const discount = data[i - 1].discount.toString();
            tmp.push(<PackageItem type={type} fee={price} discount={discount} />);
        }
        setPackageArray(tmp);
    }
    useEffect(() => {
        renderPakage();
        // console.log(packageArray);
    }, [selectedRange]);
    return (
        <div className="mx-6">
            <div className="text-3xl font-semibold text-[#3e8bcc] uppercase pb-4 pt-4">CHỌN SẢN PHẨM BẢO HIỂM</div>
            <div className="age-ranges">
                <p className="font-semibold mb-2">Chọn độ tuổi</p>
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
            </div>
            <div classnName="gender">
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
            </div>
            <div className="insurance grid grid-cols-5 gap-6 sm:gap-4 mt-10 pb-20">{packageArray}</div>
        </div>
    );
}

export default Insurances;
