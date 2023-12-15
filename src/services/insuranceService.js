import axiosInstance from '../utils/axios';

const ApiGetAllInsurances = async (query = {}) => {
    try {
        const response = await axiosInstance.get('/insurance', {
            params: {
                fromAge: query.fromAge,
                toAge: query.toAge,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiInsurancesByAgeCustomer = async (age = 0) => {
    try {
        console.log('call api');
        const response = await axiosInstance.get('insurance/filter', {
            params: {
                age: age,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiGetAllAges = async () => {
    try {
        const response = await axiosInstance.get('/insurance/ages');

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiGetAllInsurances, ApiInsurancesByAgeCustomer, ApiGetAllAges };
