import axiosInstance from '../utils/axios';

const ApiLogin = async ({ email, password }) => {
    return axiosInstance.post('/tokens/login', {
        email: email,
        password: password,
    });
};

const ApiSendAccessTokenToBackend = async ({ email, credential }) => {
    return await axiosInstance.post('/tokens/validate-google-token', {
        email: email,
        credentialToken: credential,
    });
};

const ApiLogout = async ({ refreshToken }) => {
    return await axiosInstance.post('/tokens/logout', {
        refresh: refreshToken,
    });
};

const ApiRefreshToken = async ({ refreshtoken }) => {
    return await axiosInstance.post('/tokens/refresh', {
        refresh: refreshtoken,
    });
};

export { ApiLogin, ApiLogout, ApiSendAccessTokenToBackend, ApiRefreshToken };
