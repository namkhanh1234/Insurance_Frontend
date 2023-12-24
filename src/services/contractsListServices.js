import axiosInstance from '../utils/axios';

const ApiGetUserInfo = async () => {
    try {
        const response = await axiosInstance.get('/contracts/user');
        return response;
    } catch (error) {
        console.log(error);
    }
}

const ApiGetContracts = async () => {
    try {
        const response = await axiosInstance.get('/contracts');
        return response;
    } catch (error) {
        console.log(error);
    }
}

const ApiGetBeneficiaryInfo = async () => {
    try {
        const response = await axiosInstance.get('/contracts/beneficiary');
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {ApiGetUserInfo, ApiGetContracts, ApiGetBeneficiaryInfo};