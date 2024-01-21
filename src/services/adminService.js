import axiosInstance from "../utils/axios";
const ApiListUser = async (index,size) => {
   try {
    const response = await axiosInstance.get('/users',{params:{
        page: index,
        pageSize: size,
    }});
    return response;
   } catch (error) {
         console.log(error);
   }
};

export { ApiListUser };