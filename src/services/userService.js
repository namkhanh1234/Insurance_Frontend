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

export { ApiGetUserById };
