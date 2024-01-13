import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';
import {
    ApiLogin,
    ApiRefreshToken,
    ApiSendAccessTokenToBackend,
    ApiLogout,
} from '../../services/authenticationService';




export const loginAction = createAsyncThunk('auth/login', async ({ email, password }) => {

    try {
        const response = await ApiLogin({ email, password });

        if (response && response.data) {
        
            console.log('>> Check response: ', response.data);

            // Do thiết lập axios cuối project nên vẫn phải set LocalStorage ở đây
            localStorage.setItem('access_token', response.data?.access);
            localStorage.setItem('refresh_token', response.data?.refresh);
            localStorage.setItem('user_id', response.data?.userId);
            localStorage.setItem('email', response.data?.email);

            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;

            return response.data;

       
        }
    } catch (error) {
   
        throw error;
    }
});

export const loginGoogleAction = createAsyncThunk('auth/login-google', async ({ email, credential }) => {
    try {
        const response = await ApiSendAccessTokenToBackend({ email, credential });

        if (response && response.data) {
            // console.log('>> Check response: ', response.data);

            localStorage.setItem('access_token', response.data?.access);
            localStorage.setItem('refresh_token', response.data?.refresh);
            localStorage.setItem('user_id', response.data?.userId);
            localStorage.setItem('email', response.data?.email);

            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

            return response.data;
        }
    } catch (error) {
        throw error;
    }
});

export const refreshAction = createAsyncThunk('auth/refresh', async ({ refreshtoken }) => {
    try {
        const response = await ApiRefreshToken({ refreshtoken });

        if (response && response.data) {
            // console.log('>> Check response: ', response.data);

            localStorage.setItem('access_token', response.data.access);
            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;

            return response.data;
        }
    } catch (error) {
        throw error;
    }
});

export const logoutAction = createAsyncThunk('auth/logout', async ({ refreshtoken }) => {
    try {
        //const refresh_token = localStorage.getItem('refresh_token');

        const response = await ApiLogout({ refreshtoken });
        console.log('>> Check response: ', response.data);

        if (response && response.data) {
          
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('email');

            axiosInstance.defaults.headers['Authorization'] = null;
        }
    } catch (error) {
        throw error;
    }
});
