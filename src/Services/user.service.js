import { axiosInstance } from "./axios.service";


export const getAccessControl = async () => {
    return await axiosInstance.get("/landing_screen");
}


