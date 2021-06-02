import { axiosInstance } from "./axios.service";

// export default {
export const getZones = async () => {
    return await axiosInstance.get("/karwin_zones");
}
// };

export const getChoiceZones = async () => {
    return await axiosInstance.get("/zones");
}




