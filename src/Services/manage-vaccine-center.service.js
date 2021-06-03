import { axiosInstance } from "./axios.service";

export const getCVCByZone = async (id) => {
    return await axiosInstance.get(`/karwin_zones/${id}/karwin_cvcs`);
}

export const getAllCVCByZone = async (id) => {
    return await axiosInstance.get(`/karwin_zones/${id}/cvcs`);
}


export const addCVC = async (data, id) => {
    return await axiosInstance.post(`/karwin_zones/${id}/karwin_cvcs`, data);
}

export const deleteCVC = async (id, cvcId) => {
    return await axiosInstance.delete(`/karwin_zones/${id}/karwin_cvcs/${cvcId}`);
}

export const getCVCDetail = async (zoneId, cvcId) => {
    return await axiosInstance.get(`/karwin_zones/${zoneId}/karwin_cvcs/${cvcId}`);
}

export const addCVCSession = async (zoneId, cvcId, data) => {
    return await axiosInstance.post(`/karwin_zones/${zoneId}/karwin_cvcs/${cvcId}/new`, data);
}


export const modifyCVCSession = async (zoneId, cvcId, data) => {
    return await axiosInstance.post(`/karwin_zones/${zoneId}/karwin_cvcs/${cvcId}/modify`, data);
}

export const deleteCVCSession = async (zoneId, cvcId, data) => {
    return await axiosInstance.post(`/karwin_zones/${zoneId}/karwin_cvcs/${cvcId}/delete`, data);
}
