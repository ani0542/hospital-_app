import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./Components/PrivateRoute";
import Hospital from "./Pages/Hospital/Hospital";
import Session from "./Pages/Hospital/Session";
import ReferencePage from "./Pages/Hospital/ReferencePage"
import DetailsPage from './Pages/Hospital/DetailsPage';
import ManageQuota from './Pages/ManageQuota'

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={Hospital} />

            <Route exact path="/session" component={Session} />
            <Route exact path='/dummy' component={ManageQuota} />
          <Route exact path='/login' component={ReferencePage} />
          <Route exact path='/details' component={DetailsPage} />
            {/* <PrivateRoute exact path="/session" component={Session} /> */}
             
        </Switch>
    );
}

export default AppRouter;
