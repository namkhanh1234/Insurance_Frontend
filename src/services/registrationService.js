import axiosInstance from '../utils/axios';

const ApiPostRegistration = async (data = {}) => {
    try {
        const response = await axiosInstance.post('/registration', data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiPostRegistration };
