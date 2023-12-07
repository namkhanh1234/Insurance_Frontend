import classNames from 'classnames/bind';
import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faCircleDollarToSlot, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '../../assets/images';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            {/* Image introduction */}
            <div className={cx('image-introduction')}>
                <img src="https://m.evbi.vn/Content/landingpage/InsuranceHeathCare/images/laptop.png" alt="" />
                {/* <img className="w-full" src={images.imageIntroduction} alt="" /> */}
            </div>
            {/* Bạn có biết */}
            <div className={cx('wrapper', 'pt-14 mx-4')}>
                {/* <div className="flex justify-center">
                    <header className="text-xl font-bold mb-4">Bạn có biết</header>
                </div> */}
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
                <header>Những </header>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Home;
