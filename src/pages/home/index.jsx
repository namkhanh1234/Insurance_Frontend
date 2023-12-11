import classNames from 'classnames/bind';
import { faHospital } from '@fortawesome/free-regular-svg-icons';
import {
    faCircleDollarToSlot,
    faPiggyBank,
    faHandshake,
    faClock,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Home.module.scss';
import images from '../../assets/images';

import { CheckSquare2 } from 'lucide-react';
import { ShieldPlus } from 'lucide-react';
import { Baby } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';
import config from '../../config';

import SlickSlider from '../../components/SlickSlider/SlickSlider';

const cx = classNames.bind(styles);

const news = [
    {
        image: images.card1,
        p1: '11/11/2023',
        p2: '[Tri ân] KNH tặng tour du lịch cho khách hàng lâu năm',
    },
    {
        image: images.card2,
        p1: '11/11/2023',
        p2: '[Tuyển dụng] KNH Care tuyển dụng vị trí Sale Lead',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
    {
        image: images.logo,
        p1: '11/11/2023',
        p2: '[Hoạt động] Kỉ niệm 5 năm thành lập KNH Care',
    },
];
function Home() {
    return (
        <div>
            <div className="flex justify-evenly max-w-full bg-sky-100 p-8 mt-0 items-center">
                <div className="">
                    <img src={images.logoTitle} alt="" className="w-3/4 mb-2" />
                    <h1 className="text-3xl mb-2">Bảo hiểm sức khỏe KNH</h1>
                    <div className="flex items-center">
                        <CheckSquare2 className="mr-2"></CheckSquare2>
                        <p className="text-lg">Kế hoạch bảo vệ và chăm sóc sức khỏe</p>
                    </div>
                    <div className="flex items-center">
                        <CheckSquare2 className="mr-2"></CheckSquare2>
                        <p className="text-lg">Kế hoạch tích lũy</p>
                    </div>
                    <div className="flex items-center">
                        <CheckSquare2 className="mr-2"></CheckSquare2>
                        <p className="text-lg">Kế hoạch đầu tư</p>
                    </div>
                    <div className="flex items-center">
                        <CheckSquare2 className="mr-2"></CheckSquare2>
                        <p className="text-lg">Sản phẩm bổ trợ khác</p>
                    </div>
                    <div className="my-6 ">
                        <Button className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700">
                            Tư vấn ngay
                        </Button>
                    </div>
                </div>
                {/* Image introduction */}
                <div className="max-w-full">
                    <img className="w-full" src={images.imageIntroduction} alt="" />
                </div>
            </div>

            {/* Bạn có biết */}
            <div className="py-10 mx-4">
                <div className="flex justify-center">
                    <header className="text-4xl font-bold mb-4">Bạn có biết</header>
                </div>
                {/* Body */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-between">
                    {/* Item - box */}
                    <div className={cx('box')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faHospital} />
                        <p className={cx('title')}>bạn có biết mỗi năm có</p>
                        <p className={cx('subtitle')}>200.000.000 lượt</p>
                        <p className={cx('description', 'text-gray-700 text-sm')}>
                            Là số lượt khám trung bình hằng năm của các cơ sở y tế Việt Nam
                        </p>
                    </div>
                    <div className={cx('box')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCircleDollarToSlot} />
                        <p className={cx('title')}>chi phí bình quân 1 lượt/khám</p>
                        <p className={cx('subtitle')}>1.300.000đ</p>
                        <p className={cx('description', 'text-gray-700 text-sm')}>
                            Là chi phí bình quân cho một lần khám
                        </p>
                    </div>
                    <div className={cx('box')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faPiggyBank} />
                        <p className={cx('title')}>bạn có muốn khám bệnh</p>
                        <p className={cx('subtitle')}>KHÔNG PHẢI BỎ RA CHI PHÍ</p>
                        <p className={cx('description', 'text-gray-700 text-sm')}>
                            Bảo hiểm sức khỏe hỗ trợ bạn và gia đình chi phí khám chữa bệnh và lựa chọn cơ sở y tế tốt
                            nhất
                        </p>
                    </div>
                </div>
            </div>
            {/* Điểm mạnh của KNH */}
            <div className={cx('wrapper')}>
                <h3 className="text-4xl font-bold text-sky-600 ml-10 mb-5">NHỮNG THẾ MẠNH CỦA KNH CARE </h3>
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-between h-[70vh]">
                        <div className="flex items-center">
                            <ShieldPlus className="mr-2 w-[3vw] h-auto" />
                            <p className="ml-3 text-2xl font-semibold">QUYỀN LỢI BẢO HIỂM TOÀN DIỆN</p>
                        </div>
                        <div className="flex items-center">
                            <Baby className="mr-2 w-[3vw] h-auto" />
                            <p className="ml-3 text-2xl font-semibold">TRẺ EM ĐƯỢC THAM GIA ĐỘC LẬP</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHospital} className="mr-2 w-[3vw] h-auto" />
                            <p className="ml-3 text-2xl font-semibold">HỆ THỐNG CƠ SỞ Y TẾ TOÀN QUỐC</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHandshake} className="mr-2 w-[3vw] h-auto" />
                            <p className="ml-3 text-2xl font-semibold">CHI PHÍ ƯU ĐÃI SO VỚI TẦM GIÁ</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="mr-2 w-[3vw] h-auto" />
                            <p className="ml-3 text-2xl font-semibold">GIẢI NGÂN NHANH CHÓNG</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-1/3">
                        <img src={images.family1} alt="" className="w-full ml-24" />
                        <img src={images.family2} alt="" className="w-full mr-20" />
                    </div>
                </div>
            </div>

            {/* sản phẩm của KNHCare */}
            <div className="py-10">
                <h3 className="text-4xl font-bold text-sky-600 ml-10 mb-5">SẢN PHẨM ĐƯỢC KNH CARE CUNG CẤP </h3>
                <div className="flex justify-evenly items-center w-full">
                    <img src={images.family3} alt="" className="w-1/3 h-auto" />
                    <div className="w-1/2">
                        <p className="font-bold text-xl leading-8">
                            KNH Care cam kết mang đến cho khách hàng những sản phẩm bảo hiểm
                            <br />
                            tốt nhất với giá cả cạnh tranh
                        </p>
                        <p className="text-xl leading-8">
                            Cung cấp giải pháp bảo hiểm, tài chính Tạo sự an tâm cho gia đình Việt
                        </p>
                        <div className="flex items-center mt-2">
                            <FontAwesomeIcon icon={faArrowRight} className="mr-4" />
                            <div className="flex text-lg">
                                <p>Xem chi tiết tại</p>
                                <Link to={config.routes.insurances} className="underline text-blue-600 ml-1">
                                    Sản phẩm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Thông tin cung cấp */}
            <div className="py-10 bg-sky-100 p-10">
                <h3 className="text-4xl font-bold mb-5">THÔNG TIN MỚI NHẤT </h3>
                <SlickSlider data={news} className="flex justify-between"></SlickSlider>
            </div>
        </div>
    );
}

export default Home;
