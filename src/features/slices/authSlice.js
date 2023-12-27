import { createSlice } from '@reduxjs/toolkit';
import { loginAction, refreshAction } from '../actions/authAction';

// Initial state
const initialState = {
    loading: false,
    access_token: null,
    refresh_token: null,
    email: null,
    user_id: null,
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
            .addCase(loginAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.loading = false;
                state.email = action.payload?.email;
                state.user_id = action.payload?.user_id;
                state.auth = true;
                state.access_token = action.payload?.access;
                state.refresh_token = action.payload?.refresh;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.loading = false;
                state.auth = false;
                state.error = action.error.message;
            })
            .addCase(refreshAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(refreshAction.fulfilled, (state, action) => {
                state.loading = false;
                state.access_token = action.payload?.access;
            })
            .addCase(refreshAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
