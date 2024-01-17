import axiosInstance from '../utils/axios';

const ApiPaymentContractByVnPay = async ({ data }) => {
    console.log('>> Check input call api: ', data);
    try {
        const response = await axiosInstance.post('paymentcontracts', {
            contractId: data.contractId,
            paymentAmount: data.paymentAmount,
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiPaymentContractByVnPay };
