import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';
import {
    ApiLogin,
    ApiRefreshToken,
    ApiSendAccessTokenToBackend,
    ApiLogout,
    ApiLoginAdmin,
} from '../../services/authenticationService';

export const loginAction = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        const response = await ApiLogin({ email, password });

        if (response && response.data) {
            // console.log('>> Check response: ', response.data);

            // Do thiết lập axios cuối project nên vẫn phải set LocalStorage ở đây
            localStorage.setItem('access_token', response.data?.access);
            localStorage.setItem('refresh_token', response.data?.refresh);
            localStorage.setItem('user_id', response.data?.userId);
            localStorage.setItem('email', response.data?.email);
            localStorage.setItem('is_admin', response.data?.isAdmin);

            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;

            return response.data;
        }
    } catch (error) {
        throw error;
    }
});

export const loginAdminAction = createAsyncThunk('auth/login-admin', async ({ email, password }) => {
    try {
        const response = await ApiLoginAdmin({ email, password });

        if (response && response.data) {
            // console.log('>> Check response: ', response.data);

            // Do thiết lập axios cuối project nên vẫn phải set LocalStorage ở đây
            localStorage.setItem('access_token', response.data?.access);
            localStorage.setItem('refresh_token', response.data?.refresh);
            localStorage.setItem('user_id', response.data?.userId);
            localStorage.setItem('email', response.data?.email);
            localStorage.setItem('is_admin', response.data?.isAdmin);

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
            localStorage.setItem('is_admin', response.data?.isAdmin);

            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

            return response.data;
        }
    } catch (error) {
        throw error;
    }
});

export const refreshAction = createAsyncThunk('auth/refresh', async ({ refresh }) => {
    try {
        const response = await ApiRefreshToken({ refresh });

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

export const logoutAction = createAsyncThunk('auth/logout', async ({ refresh }) => {
    try {
        const response = await ApiLogout({ refresh });
        // console.log('>> Check response: ', response.data);

        if (response && response.data) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('email');
            localStorage.removeItem('is_admin');
            localStorage.removeItem('registrationId');
            localStorage.removeItem('beneficiaryId');
            localStorage.removeItem('contractId');

            axiosInstance.defaults.headers['Authorization'] = null;
        }
    } catch (error) {
        throw error;
    }
});
