import axiosInstance from '../utils/axios';

const ApiInsertRequest = async (formData) => {
    try {
        const response = await axiosInstance.post('/paymentrequests', formData);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiInsertRequest };
