import images from '../../assets/images';

function Footer() {
    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="mb-6 hidden xl:inline-flex col-span-2">
                        <a href="https://tailwindui.com/" className="flex items-center">
                            <img src={images.logo} className="w-[84px] h-[84px] rounded-lg me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Bảo hiểm KNH
                            </span>
                        </a>
                    </div>
                    <div className="text-center">
                        <h2 className="mb-2 sm:mb-3 text-sm font-semibold text-gray-900 uppercase">
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
                        <h2 className="mb-2 sm:mb-3 text-sm font-semibold text-gray-900 uppercase">Về chúng tôi</h2>
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
                        <h2 className="mb-2 sm:mb-3 text-sm font-semibold text-gray-900 uppercase">Liên hệ</h2>
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
        </footer>
    );
}

export default Footer;
