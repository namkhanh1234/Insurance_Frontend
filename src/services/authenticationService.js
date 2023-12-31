import axiosInstance from '../utils/axios';

const ApiLogin = async ({ email, password }) => {
    return axiosInstance.post('/token/login', {
        email: email,
        password: password,
    });
};

const ApiSendAccessTokenToBackend = async ({ email, credential }) => {
    return await axiosInstance.post('/token/validate-google-token', {
        email: email,
        credentialToken: credential,
    });
};

const ApiLogout = async ({ refreshToken }) => {
    return axiosInstance.post('/token/logout', {
        refreshtoken: refreshToken,
    });
};

const ApiRefreshToken = async ({ refreshtoken }) => {
    return await axiosInstance.post('/token/refresh', {
        refreshtoken: refreshtoken,
    });
};

export { ApiLogin, ApiLogout, ApiSendAccessTokenToBackend, ApiRefreshToken };
