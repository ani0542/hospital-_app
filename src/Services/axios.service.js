
import axios from 'axios';
const baseUrl = "https://api.spacemonk.io/integration/cowinka";

const axiosInstance = axios.create({ baseURL: baseUrl });
axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('session-token');
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

const authCaseUrl = "https://api.spacemonk.io/integration/auth";

const unAuthAxiosInstance = axios.create({ baseURL: authCaseUrl });
axiosInstance.interceptors.request.use(
    function (config) {
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
    axiosInstance,
    unAuthAxiosInstance
};