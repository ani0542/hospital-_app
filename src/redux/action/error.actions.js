import serializeError from "../../utils/serializeError";

export const ERROR = {
    SET: "error/set",
    RESET: "error/reset",
};

const setError = unserializedError => ({
    type: ERROR.SET,
    payload: serializeError(unserializedError),
});

const clearError = () => ({ type: ERROR.RESET });

export { setError, clearError };
