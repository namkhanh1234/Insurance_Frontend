const ParseCurrencyToNumber = (formattedCurrency) => {
    // Loại bỏ ký tự không phải số từ chuỗi định dạng tiền
    const numericString = formattedCurrency.replace(/[^\d]/g, '');

    // Chuyển đổi chuỗi số thành số nguyên
    const integerValue = parseInt(numericString, 10);

    return integerValue;
};

export default ParseCurrencyToNumber;