import axiosInstance from '../utils/axios';

const ApiGetBenefitsDetail = async (id) =>{
    try {
        const response = await axiosInstance.get(`/BenefitDetail/${id}`);
        return response

    } catch (error) {
        console.log(error);
    }
}

export {ApiGetBenefitsDetail }