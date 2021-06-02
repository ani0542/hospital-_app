
import axios from 'axios';
const baseUrl = "https://api.spacemonk.io/integration/cowinka";

const axiosInstance = axios.create({ baseURL: baseUrl });
axiosInstance.interceptors.request.use(
    function (config) {
        const token = '35e54318-c93b-44f8-8e0e-862c81962f57';
        if (token) {
            config.headers['session-token'] = token;
        }
        return config;
    },
    function (error) {
        console.log(
            `axiosInstance -> interceptors -> request -> error`,
            error
        );
        return Promise.reject(error);
    }
);

export {
    axiosInstance
};