import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Hospital from "./Pages/Hospital/Hospital";
import Session from "./Pages/Hospital/Session";
import ReferencePage from "./Pages/Hospital/ReferencePage"
import DetailsPage from './Pages/Hospital/DetailsPage';
import ManageQuota from './Pages/ManageQuota'

import VaccineCenter from './Pages/VaccineCenter/vaccineCenter';
import ManageZone from './Pages/ManageZone/manageZone';
import VaccineCenterDetail from './Pages/VaccineCenterDetail/vaccineCenterDetail';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={Hospital} />

            <Route exact path="/session/:phone" component={Session} />
            <Route exact path='/manage-quota/:zone_id' component={ManageQuota} />
            <Route exact path='/reference' component={ReferencePage} />
            <Route exact path='/details/:ref_id' component={DetailsPage} />
            {/* <PrivateRoute exact path="/session" component={Session} /> */}
            <Route exact path='/vaccine-center' component={VaccineCenter} />
            <Route exact path='/manage-zone' component={ManageZone} />
            <Route exact path='/vaccine-center/:zoneId/detail/:centerId' component={VaccineCenterDetail} />

        </Switch>
    );
}

export default AppRouter;
