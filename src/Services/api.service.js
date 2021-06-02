import { hashHistory } from "../App";
// import serializeError from "../utils/serializeError";

// const apiBase = "https://api.spacemonk.io/integration/auth";


import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.spacemonk.io/integration/'
    //baseURL: 'http://localhost:3000/prod/api/'
});

// class Api {
//     constructor(apiBase) {
//         this._apiBase = apiBase;
//     }

//     get(url, params = {}) {
//         return fetch(this._getUrl(url, params), {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Token " + localStorage.getItem("token"),
//             },
//         }).then(this._errorHandler);
//     }

//     post(url, data = {}, params = {}) {
//         return fetch(this._getUrl(url, params), {
//             body: this._getBody(data),
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Token " + localStorage.getItem("token"),
//             },
//         }).then(this._errorHandler);
//     }

//     put(url, data = {}, params = {}) {
//         return fetch(this._getUrl(url, params), {
//             body: this._getBody(data),
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Token " + localStorage.getItem("token"),
//             },
//         }).then(this._errorHandler);
//     }

//     delete(url, data = {}, params = {}) {
//         return fetch(this._getUrl(url, params), {
//             body: this._getBody(data),
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Token " + localStorage.getItem("token"),
//             },
//         }).then(this._errorHandler);
//     }

//     toJSON(response) {
//         return response.json();
//     }

//     toBlob(response) {
//         return response.blob();
//     }

//     async _errorHandler(response) {
//         if (response.ok) return response;

//         // checkForAuthenticationFailed
//         if (response.status === 401) {
//             localStorage.clear();
//             hashHistory.push("/");
//         }

//         const error = await response.clone().json();
//         throw new Error(serializeError(error, response.statusText));
//     }

//     _getBody(data) {
//         return data instanceof FormData ? data : JSON.stringify(data);
//     }

//     _getUrl(relativeUrl, params = {}) {
//         return `${this._apiBase}${relativeUrl}?${this._getParamsString(
//             params
//         )}`;
//     }

//     _getParamsString(params) {
//         return new URLSearchParams(params);
//     }
// }

// const API = new Api(apiBase);

// export default API;
