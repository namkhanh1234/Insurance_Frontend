const FormatCurrency = (amount) => {
    // Sử dụng đối tượng Intl.NumberFormat để định dạng số tiền
    const currencyFormatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    // Trả về số tiền đã được định dạng
    return currencyFormatter.format(amount);
};
export default FormatCurrency;
