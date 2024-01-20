import axiosInstance from '../utils/axios';

const ApiInsertRequest = async (formData) => {
    try {
        const response = await axiosInstance.post('/paymentrequests', formData);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiSummaryPaymentRequest = async ({ year }) => {
    try {
        const response = await axiosInstance.get('/paymentrequests/summary', {
            params: {
                year: year,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiInsertRequest, ApiSummaryPaymentRequest };
