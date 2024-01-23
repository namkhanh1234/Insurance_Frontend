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

const ApiListPaymentRequest = async (index,size) => {
    try {
     const response = await axiosInstance.get('/paymentrequests',{params:{
         page: index,
         pageSize: size,
     }});
     return response;
    } catch (error) {
          console.log(error);
    }
};

const ApiApprovePaymentRequest = async (id,payment) => {
    try {
     const response = await axiosInstance.put(`/paymentrequests/${id}`,{
        payment: payment,
     });
     return response;
    } catch (error) {
          console.log(error);
    }
};

const ApiSearchUser = async (email,page,pageSize) => {
    try {
     const response = await axiosInstance.get('/users/search',{params:{
         email: email,
         page: page,
         pageSize: pageSize,
     }});
     return response;
    } catch (error) {
          console.log(error);
    }
};



export { ApiListUser,ApiListPaymentRequest, ApiApprovePaymentRequest, ApiSearchUser};
