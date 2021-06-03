import { axiosInstance } from "./axios.service";


export const getAllVaccines = async () => {
    return await axiosInstance.get("/vaccines");
}


