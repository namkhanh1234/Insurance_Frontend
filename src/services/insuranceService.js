import axiosInstance from '../utils/axios';

const ApiGetAllInsurances = async (query = {}) => {
    try {
        const response = await axiosInstance.get('/insurances', {
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
        const response = await axiosInstance.get('/insurances/filter', {
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
        const response = await axiosInstance.get('/insurances/ages');

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiGetAllInsurances, ApiInsurancesByAgeCustomer, ApiGetAllAges };
