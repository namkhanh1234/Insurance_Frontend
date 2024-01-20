import axiosInstance from '../utils/axios';

const ApiPaymentContractByVnPay = async ({ data }) => {
    console.log('>> Check input call api: ', data);
    try {
        const response = await axiosInstance.post('c', {
            contractId: data.contractId,
            paymentAmount: data.paymentAmount,
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiGetPaymentContractHistory = async ({ year }) => {
    try {
        const response = await axiosInstance.get('paymentcontracts/summary', {
            params: {
                year: year,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiPaymentContractByVnPay, ApiGetPaymentContractHistory };
