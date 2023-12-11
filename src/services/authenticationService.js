import axiosInstance from '../utils/axios';

const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/token/login', {
            email: email,
            password: password,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

// const refresh = async (refreshToken) => {
//     try {
//         const res = await axiosInstance.post('/refresh', {
//             refreshtoken: refreshToken,
//         });
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };

const ApiLogout = async (refreshToken) => {
    try {
        const reponse = await axiosInstance.post('/token/logout', {
            refreshtoken: refreshToken,
        });
        return reponse;
    } catch (error) {
        console.log(error);
    }
};

export { login, ApiLogout };
