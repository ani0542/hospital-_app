import API from "./api.service";

// export default {
   export const login  = async ({ mobile }) => {
        return  await API.post("/generatewebotp", {
            mobile: mobile,
        });
    }
// };





