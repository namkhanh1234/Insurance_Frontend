import axiosInstance from '../utils/axios';

const ApiCreateBeneficiary = async (data = {}) => {
    try {
        const response = await axiosInstance.post('/beneficiary', data);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiGetBenefitsDetail = async (id) =>{
    try {
        const response = await axiosInstance.get('/BenefitDetail', {
            params: {
            insuranceId: id
        }});

        return response

    } catch (error) {
        console.log(error);
    }
}

export {ApiGetBenefitsDetail,ApiCreateBeneficiary}