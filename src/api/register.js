import { errorToastLogger, setUserLocalStorage } from "utils/Util";
import axiosApiInstance from "utils/AxiosConfig";

export const submitUserRegisterDetails = async (details) => {
    try {
        const reqUrl = `/signup`;
        const response = await axiosApiInstance.post(reqUrl, details);
        if (response.data.success === true) {
            setUserLocalStorage(response.data);

            return response?.data?.data.user;
        }
        return false;
    } catch (error) {
        errorToastLogger("submitUserRegisterDetails", error);
        return false;
    }
};