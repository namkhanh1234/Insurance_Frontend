import axiosInstance from '../utils/axios';

const ApiPostRegistration = async (data = {}) => {
    try {
        const response = await axiosInstance.post('/registrations', data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiGetRegistrationById = async (id) => {
    try {
        const response = await axiosInstance.get(`/registrations/${id}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiPostRegistration, ApiGetRegistrationById };
