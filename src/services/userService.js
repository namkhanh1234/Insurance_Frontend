import axiosInstance from '../utils/axios';

const ApiGetUserById = async (userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiUpdateUser = async (data) => {
    console.log(data);
    try {
        const response = await axiosInstance.patch(`/users/${data.id}`, {
            userId: data.id,
            email: data.email,
            fullName: data.name,
            phone: data.phone_number,
            sex: data.gender,
            dateOfBirth: data.birthday,
            cardIdentification: data.cardID,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiRegister = async (data) => {
    try {
        const response = await axiosInstance.post('/users', {
            email: data.email,
            password: data.password,
            fullName: data.name,
            phone: data.phone_number,
            sex: data.gender,
            dateOfBirth: data.birthday,
            cardIdentification: data.id,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiSendEmail = async (data) => {
    console.log(data);
    try {
        const response = await axiosInstance.post('/verificationPassword/forgot-password', {
            email: data,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiVerifiOTP = async (data) => {
    console.log(data);
    try {
        const response = await axiosInstance.post('/verificationPassword/verify-password', {
            email: data.email,
            message: data.otp,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiResetPassword = async (data) => {
    console.log(data);
    try {
        const response = await axiosInstance.post('/verificationPassword/reset-password', {
            email: data.email,
            message: data.newPassword,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { ApiGetUserById, ApiUpdateUser, ApiSendEmail, ApiVerifiOTP, ApiResetPassword, ApiRegister };
