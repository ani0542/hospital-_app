import { axiosInstance } from "./axios.service";

// export default {
export const getZones = async () => {
    return await axiosInstance.get("/karwin_zones");
}
// };

export const getChoiceZones = async () => {
    return await axiosInstance.get("/zones");
}

export const addZone = async (data) => {
    return await axiosInstance.post("/karwin_zones", data);
}

export const deleteZone = async (id) => {
    return await axiosInstance.delete(`/karwin_zones/${id}`);
}

