import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiLogin, ApiRefreshToken } from '../../services/authenticationService';
import axiosInstance from '../../utils/axios';

export const loginAction = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        const response = await ApiLogin({ email, password });

        if (response && response.data) {
            // Do thiết lập axios cuối project nên vẫn phải set LocalStorage ở đây
            localStorage.setItem('access_token', response.data?.access);
            localStorage.setItem('refresh_token', response.data?.refresh);
            localStorage.setItem('user_id', response.data?.user_id);
            localStorage.setItem('email', response.data?.email);
            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;

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
            localStorage.setItem('access_token', response.data.access);
            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;

            return response.data;
        }
    } catch (error) {
        throw error;
    }
});