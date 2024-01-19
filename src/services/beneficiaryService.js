import axiosInstance from '../utils/axios';

const ApiCreateBeneficiary = async (data = {}) => {
    try {
        const response = await axiosInstance.post('/beneficiaries', data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiGetBeneficiaryById = async (id) => {
    try {
        const response = await axiosInstance.get(`/beneficiaries/${id}`);
        //console.log(response.data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiSummaryBeneficiary = async () => {
    try {
        const response = await axiosInstance.get('/beneficiaries/summary');

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiCreateBeneficiary, ApiGetBeneficiaryById, ApiSummaryBeneficiary };
