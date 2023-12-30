import axiosInstance from '../utils/axios';
import axios from 'axios';

const ApiInsertRequest = async (formData) => {
    console.log(formData);
    console.log(formData.has('ImageIdentification'));
    try {
        const response = await axios.post('https://localhost:7162/api/PaymentRequest',formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        return response

    } catch (error) {
        console.log(error);
    }
};

export { ApiInsertRequest};