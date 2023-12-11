import images from '../../assets/images';

function Footer() {
    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {/* <div className="w-full p-4 py-6 lg:py-8"> */}
                <div className="md:flex md:justify-between">
                    <div className="hidden lg:inline-flex mb-6 md:mb-0">
                        <a href="https://tailwindui.com/" className="flex items-center">
                            <img src={images.logo} className="w-[84px] h-[84px] rounded-lg me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Bảo hiểm KNH
                            </span>
                        </a>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                    Chăm sóc khách hàng
                                </h2>
                                <ul className="text-gray-500 font-medium space-y-2">
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Quy tắc bảo hiểm
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Chính sách bảo mật thông tin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Quyền lợi bảo hiểm
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Thông tin ưu đãi dịch vụ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Về chúng tôi</h2>
                                <ul className="text-gray-500 font-medium space-y-2">
                                    <li className="">
                                        <a href="https://tailwindui.com/" className="hover:underline ">
                                            Mai Nhật Nam
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Nguyễn Đặng Nam Khánh
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Phạm Nhật Anh Khoa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Nguyễn Đoàn Vân Nhi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" className="hover:underline">
                                            Phạm Quốc Hùng
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Liên hệ</h2>
                                <span className="text-gray-500 dark:text-gray-400 font-medium">
                                    Trường Đại học Khoa Học Tự Nhiên
                                    <br />
                                    227 Nguyễn Văn Cừ, phường 4, Quận 5,
                                    <br />
                                    Thành phố Hồ Chí Minh
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
