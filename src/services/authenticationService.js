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

const ApiLogout = async ({ refresh }) => {
    // console.log('>> Check refresh: ', refresh);

    return await axiosInstance.post('/tokens/logout', {
        refresh: refresh,
    });
};

const ApiRefreshToken = async ({ refresh }) => {
    // console.log('>> Check refresh: ', refresh);

    return await axiosInstance.post('/tokens/refresh', {
        refresh: refresh,
    });
};

export { ApiLogin, ApiLogout, ApiSendAccessTokenToBackend, ApiRefreshToken };
