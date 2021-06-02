import API from "./api.service";
import { unAuthAxiosInstance } from "./axios.service";
// export default {
export const login = async ({ mobile }) => {
    return await API.post("/generatewebotp", {
        mobile: mobile,
    });
}
// };

export const confirmOtp = async (data) => {
    return await unAuthAxiosInstance.post("/validate-web-otp", data);
}



