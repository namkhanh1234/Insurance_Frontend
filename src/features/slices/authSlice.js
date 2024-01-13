import { createSlice } from '@reduxjs/toolkit';
import { loginAction, refreshAction, loginGoogleAction, logoutAction } from '../actions/authAction';

// Initial state
const initialState = {
    loading: false,
    access_token: null,
    refresh_token: null,
    email: null,
    userId: null,
    auth: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // Code logic xử lý async action
    extraReducers: (builder) => {
        builder
            // login backend
            .addCase(loginAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.loading = false;
                state.email = action.payload?.email;
                state.userId = action.payload?.userId;
                state.auth = true;
                state.access_token = action.payload?.access;
                state.refresh_token = action.payload?.refresh;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.loading = false;
                state.auth = false;
                state.error = action.error.message;
            })
            // login google
            .addCase(loginGoogleAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginGoogleAction.fulfilled, (state, action) => {
                state.loading = false;
                state.email = action.payload?.email;
                state.userId = action.payload?.userId;
                state.auth = true;
                state.access_token = action.payload?.access;
                state.refresh_token = action.payload?.refresh;
            })
            .addCase(loginGoogleAction.rejected, (state, action) => {
                state.loading = false;
                state.auth = false;
                state.error = action.error.message;
            })
            //
            .addCase(refreshAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(refreshAction.fulfilled, (state, action) => {
                state.loading = false;
                state.access_token = action.payload?.access;
            })
            .addCase(refreshAction.rejected, (state, action) => {
                state.loading = false;
                state.auth = false;
                state.error = action.error.message;
            })
            // LogoutAction
            .addCase(logoutAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAction.fulfilled, (state) => {
                state.loading = false;
                state.access_token = null;
                state.refresh_token = null;
                state.email = null;
                state.userId = null;
                state.auth = false;
                state.error = null;
            })
            .addCase(logoutAction.rejected, (state, action) => {
                state.loading = false;
                state.auth = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
