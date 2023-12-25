import axiosInstance from "../utils/axios";

const ApiSendRegisId = async (data) => {
    console.log(data);
    try {
        await axiosInstance.post(`/Contracts/${data.id}`, {
            userId: data.id,
            registrationId: data.registrationId,
        });

    } catch (error) {
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

export { ApiSendRegisId, ApiSendBeneficiarysId };
