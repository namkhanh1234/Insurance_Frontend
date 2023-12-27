import axiosInstance from '../utils/axios';

const ApiLogin = async (email, password) => {
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

const ApiSendAccessTokenToBackend = async (email, credential) => {
    try {
        const response = await axiosInstance.post('/token/validate-google-token', {
            email: email,
            credentialToken: credential,
        });

        return response;
    } catch (error) {
        console.error('Error sending access token to backend:', error.message);
    }
};

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

// const ApiLogout = async (refreshToken) => {
//     try {
//         const reponse = await axiosInstance.post('/token/logout', {
//             refreshtoken: refreshToken,
//         });
//         return reponse;
//     } catch (error) {
//         console.log(error);
//     }
// };

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

export { ApiLogin, ApiLogout, ApiSendAccessTokenToBackend };
