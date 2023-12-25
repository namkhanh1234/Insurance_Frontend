import axiosInstance from '../utils/axios';
import axios from 'axios';

const ApiInsertRequest = async (data) => {
    console.log(data);
    // try {
    //     const response = await axiosInstance.post('VerificationPassword/reset-password',{
    //         email: data.email,  
    //         message: data.newPassword
    //     });
    //     return response

    // } catch (error) {
    //     console.log(error);
    // }
};

export { ApiInsertRequest};