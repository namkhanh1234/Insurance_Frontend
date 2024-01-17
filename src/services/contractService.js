import axiosInstance from '../utils/axios';

const ApiPostContract = async (registrationId) => {
    try {
        const response = await axiosInstance.post('/contracts', {
            registration_id: registrationId,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiGetContractById = async (id) => {
    try {
        const response = await axiosInstance.get(`/contracts/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiPostContract, ApiGetContractById };
