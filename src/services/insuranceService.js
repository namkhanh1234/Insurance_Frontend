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

const ApiGetAllAges = async () => {
    try {
        const response = await axiosInstance.get('/insurance/ages');

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiGetAllInsurances, ApiGetAllAges };
