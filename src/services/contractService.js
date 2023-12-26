import axiosInstance from "../utils/axios";
import axios from "axios";

const ApiPostContract = async (registrationId = 1) => {
    try {
        const formData = new FormData();
        formData.append('registration_id', registrationId)

        const response = await axios.post('https://localhost:7162/api/Contracts', formData,
        {
            headers: {
                Authorization: localStorage.getItem('access_token')
                    ? 'JWT ' + localStorage.getItem('access_token')
                    : null,
            },
        });
        console.log(response.data);

        //return response;
    }
    catch (error) {
        console.log(error);
    }
};

const ApiSendBeneficiarysId = async (data) => {
    console.log(data);
    try {
        await axiosInstance.post(`/Beneficiary/${data.id}`, {
            userId: data.id,
            beneficiaryId: data.beneficiaryId,
        });

    } catch (error) {
        console.log(error);
    }
};

export { ApiPostContract, ApiSendBeneficiarysId };
