import { isArray, isObject, isString } from "lodash";

const serializeError = (error, fallback = "error") => {
    if (isArray(error)) return error[0];
    if (isObject(error)) return error.detail || error.message;
    if (isString(error)) return error;

    return fallback;
};

export default serializeError;
