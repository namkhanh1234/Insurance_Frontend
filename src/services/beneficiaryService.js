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
        const response = await axiosInstance.get(`/Beneficiaries/${id}`);
        //console.log(response.data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiCreateBeneficiary, ApiGetBeneficiaryById };
