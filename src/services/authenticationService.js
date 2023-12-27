import axiosInstance from '../utils/axios';

const ApiLogin = async ({ email, password }) => {
    return axiosInstance.post('/token/login', {
        email: email,
        password: password,
    });
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

const ApiRefreshToken = async ({ refreshtoken }) => {
    return await axiosInstance.post('/token/refresh', {
        refreshtoken: refreshtoken,
    });
};

export { ApiLogin, ApiLogout, ApiSendAccessTokenToBackend, ApiRefreshToken };
