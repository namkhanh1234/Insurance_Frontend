import axiosInstance from '../utils/axios';

const ApiCreateBeneficiary = async (data = {}) => {
    try {
        const response = await axiosInstance.post('/beneficiary', data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiReadBeneficiary = async (id) => {
    try {
        const response = await axiosInstance.get(`/Beneficiary/${id}`);
        //console.log(response.data);

        return response;
    } catch (error) {
        console.log(error);
    }
}

export { ApiCreateBeneficiary, ApiReadBeneficiary };
