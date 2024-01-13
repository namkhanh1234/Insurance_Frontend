import axios from 'axios';

import config from '@/config';
import { API_BASE_URL } from '../utils/constant';

import store from '../app/store.js';
import { refreshAction } from '../features/actions/authAction';

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

        // console.log('>> check reponse error', error.response);
        // console.log('>> check original ', originalRequest);

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
        if (error.response.status === 401 && originalRequest.baseURL === API_BASE_URL + '/token/refresh') {
            window.location.href = config.routes.login;
            return Promise.reject(error);
        }

        if (error.response.status === 401 && error.response.data.title === 'Unauthorized') {
            const refreshToken = localStorage.getItem('refresh_token');
            // console.log('Check refresh token from localstorgae >> ', refreshToken);

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);
                // console.log('>> check now ', now);
                // console.log(">> check refresh'token exp ", tokenParts.exp);

                if (tokenParts.exp > now) {
                    // Redux
                    // Đang gặp lỗi chỗ này - Dùng redux thiếu originalRequest
                    // Cách fix tạm thời ở đây, getItem localstorage do bên action gắn vào để return về axiosInstance
                    // Nên chắc dựng một action - cập nhật refresh token

                    store.dispatch(
                        refreshAction({
                            refresh: refreshToken,
                        }),
                    );

                    axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
                    originalRequest.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
                    return axiosInstance(originalRequest);

                    // return await axiosInstance
                    //     .post('/token/refresh', { refreshtoken: refreshToken })
                    //     .then((response) => {
                    //         console.log('Check access token from response >> ', response.data.access);
                    //         localStorage.setItem('access_token', response.data.access);
                    //         axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
                    //         originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
                    //         return axiosInstance(originalRequest);
                    //     })
                    //     .catch((err) => {
                    //         console.log(err);
                    //     });
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
                localStorage.removeItem('email');
                axiosInstance.defaults.headers['Authorization'] = null;

                window.location.href = config.routes.login;
            }
        }

        // specific error handling done elsewhere
        return Promise.reject(error);
    },
);

export default axiosInstance;
