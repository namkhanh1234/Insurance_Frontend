import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    // Cần có thêm middleware
});

export default store;
