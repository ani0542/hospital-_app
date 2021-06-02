import { hashHistory } from "../../App";
import {login} from "../../Services/login.service";
import { setError } from "./error.actions";

export const LOGINAUTH = {
    LOGIN_SUCCESS: "login/fulfilled",
};

const logins = ({ mobile }) => async dispatch => {
    // console.log(mobile)
    try {
        const data = await login({ mobile });
        // console.log(data)
        dispatch({
            type: LOGINAUTH.LOGIN_SUCCESS,
            payload: data,
        });
        // hashHistory.push("/session");
    } catch (error) {
        dispatch(setError(error));
    }
};

export { logins };
