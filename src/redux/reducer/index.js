import { combineReducers } from "redux";

// import { AuthReducer, AuthReducerInit } from "./auth.reducer";

import { loginReducer, loginReducerInit } from "./login.reducer";
import { ManageZoneReducer } from "./manage-zone.reducer";
import { ChoiceZoneReducer } from "./choice-zone.reducer";
import { UserReducer } from "./user.reducer";
import { CommonReducer } from "./common.reducer";
import { ManageVaccineCenterReducer, AllManageVaccineCenterReducer, ManageVaccineCenterDetailReducer } from "./manage-vaccine-center";
// import { LOGINAUTH } from "../action/login.actions";
// import { ErrorReducer, ErrorReducerInit } from "./error.reducer";

export const storeInitialState = {
    // auth: AuthReducerInit,

    // error: ErrorReducerInit,
    log: loginReducerInit,
};

const reducer = combineReducers({
    // auth: AuthReducer,
    // error: ErrorReducer,
    log: loginReducer,
    karwinZoneList: ManageZoneReducer,
    choiceZoneList: ChoiceZoneReducer,
    userAccess: UserReducer,
    vaccineCenterList: ManageVaccineCenterReducer,
    allVaccineCenterList: AllManageVaccineCenterReducer,
    commonData: CommonReducer,
    vaccineCenterDetail: ManageVaccineCenterDetailReducer
});

const rootReducer = (state, action) => {
    // if (action.type === LOGINAUTH.LOGOUT) {
    //     return storeInitialState;
    // }

    if (action.type === "abcd") {
        return storeInitialState;
    }

    return reducer(state, action);
};

export default rootReducer;
