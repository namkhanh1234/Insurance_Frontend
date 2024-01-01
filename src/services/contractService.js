import axiosInstance from '../utils/axios';
import axios from 'axios';

// const ApiPostContract = async (registrationId = 1) => {
//     try {
//         const formData = new FormData();
//         formData.append('registration_id', registrationId)

//         const response = await axios.post('https://localhost:7162/api/Contracts', formData,
//         {
//             headers: {
//                 Authorization: localStorage.getItem('access_token')
//                     ? 'JWT ' + localStorage.getItem('access_token')
//                     : null,
//                 accept: 'application/json',
//             },
//         });
//         console.log(response.data);

//         //return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// };

const ApiPostContract = async (registrationId) => {
    try {
        // Chỗ này hùng đặt tên đường dẫn đúng chuẩn Restful
        console.log(registrationId);
        const response = await axiosInstance.post('/Contracts', {
            registration_id: registrationId,
        },
        {
            headers: {
                Authorization: localStorage.getItem('access_token')
                    ? 'JWT ' + localStorage.getItem('access_token')
                    : null,
                accept: 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiPostContract };
