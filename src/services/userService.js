import axiosInstance from '../utils/axios';

const ApiGetUserById = async (userId) => {
    try {
        // const response = await axiosInstance.get('/user/', {
        //     params: {
        //         id: userId,
        //     },
        // });
        const response = await axiosInstance.get(`/user/${userId}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};

const ApiUpdateUser = async (data) => {
    console.log(data);
    try {
        await axiosInstance.patch(`/User/${data.id}`, {
            // userId: 6,
            // email: "bca@gmail.com",
            // phone: "0987654321",
            // cardIdentification: "1234567890"
            userId: data.id,
            email: data.email,
            fullName: data.name,
            phone: data.phone_number,
            sex: data.gender,
            dateOfBirth: data.birthday,
            cardIdentification: data.cardID,
        });
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

const ApiRegister =  async (data) => {
    try {
        const response =  await axiosInstance.post('/User/register', {
            email: data.email,
            password: data.password,
            fullName: data.name,
            phone: data.phone_number,
            sex: data.gender,
            dateOfBirth: data.birthday,
            cardIdentification: data.id,
        });
        return response

    } catch (error) {
        console.log(error);
    }
}
export { ApiGetUserById, ApiUpdateUser, ApiSendEmail, ApiVerifiOTP ,ApiResetPassword ,  ApiRegister};
