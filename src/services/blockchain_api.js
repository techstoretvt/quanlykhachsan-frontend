import axios from './axios_blockchain';

export const getBalance = async (idAccount) => {
    try {
        return await axios.get("/");
    } catch (error) {
        return error?.response?.data || { errCode: -1, errMessage: "Error" };
    }
};