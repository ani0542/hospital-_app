import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./Components/PrivateRoute";
import Hospital from "./Pages/Hospital/Hospital";
import Session from "./Pages/Hospital/Session";

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={Hospital} />

            <Route exact path="/session" component={Session} />
            {/* <PrivateRoute exact path="/session" component={Session} /> */}
             
        </Switch>
    );
}

export default AppRouter;
