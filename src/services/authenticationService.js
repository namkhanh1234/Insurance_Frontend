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
//         const res = await axiosInstance.post('refresh', {
//             refresh: refreshToken,
//         });
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };

// const logout = async (refreshToken) => {
//     try {
//         const res = await axiosInstance.post('logout', {
//             refresh: refreshToken,
//         });
//         return res;
//     } catch (error) {
//         console.log(error);
//     }
// };

export { login };
