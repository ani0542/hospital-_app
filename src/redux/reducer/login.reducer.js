import { LOGINAUTH } from "../action/login.actions";

const initialState = {
    configs: [],
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGINAUTH.LOGIN_SUCCESS:
            return {
                configs: action.payload,
            };

        default:
            return state;
    }
};

export { loginReducer, initialState as loginReducerInit };
