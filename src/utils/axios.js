import axios from 'axios';
import config from '@/config';
import { API_BASE_URL } from '../utils/constant';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token') ? 'Bearer ' + localStorage.getItem('access_token') : null,
        // 'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        console.log('>> check reponse error', error.response);
        console.log('>> check original ', originalRequest);

        if (typeof error.response === 'undefined') {
            alert(
                'A server/network error occurred. ' +
                    'Looks like CORS might be the problem. ' +
                    'Sorry about this - we will get it fixed shortly.',
            );
            return Promise.reject(error);
        }

        // Check response khi gửi request mà authorize thì về login
        // if (error.response.status === 401 && originalRequest.url === baseURL + '/token/refresh') {
        if (error.response.status === 401 && originalRequest.baseURL === baseURL + '/token/refresh') {
            window.location.href = config.routes.login;
            return Promise.reject(error);
        }

        // if (
        //     error.response.data.code === 'token_not_valid' &&
        //     error.response.status === 401 &&
        //     error.response.statusText === 'Unauthorized'
        // ) {
        if (
            // error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.data.title === 'Unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh_token');
            console.log('Check refresh token from localstorgae >> ', refreshToken);
            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);
                // console.log('>> check now ', now);
                // console.log(">> check refresh'token exp ", tokenParts.exp);

                if (tokenParts.exp > now) {
                    return await axiosInstance
                        .post('/token/refresh', { refreshtoken: refreshToken })
                        .then((response) => {
                            console.log('Check access token from response >> ', response.data.access);
                            localStorage.setItem('access_token', response.data.access);
                            // If Backend "ROTATE_REFRESH_TOKENS": True,s
                            // localStorage.setItem('refresh_token', response.data.refresh);

                            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
                            originalRequest.headers['Authorization'] = 'JWT ' + response.data.access;

                            return axiosInstance(originalRequest);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    console.log('Refresh token is expired', tokenParts.exp, now);
                    window.location.href = config.routes.login;
                }
            } else {
                console.log('Refresh token not available.');

                // Trước khi về login - xóa access, refresh, user_id trước khi navigate về trang login
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user_id');
                axiosInstance.defaults.headers['Authorization'] = null;

                window.location.href = config.routes.login;
            }
        }

        // specific error handling done elsewhere
        return Promise.reject(error);
    },
);

export default axiosInstance;
