
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Hospital from './Pages/Hospital/Hospital';
import ReferencePage from "./Pages/Hospital/ReferencePage"
import DetailsPage from './Pages/Hospital/DetailsPage';
import Dummy from './Pages/dummy'
// import MainQuataPage from './Pages/District/MainQuataPage';
// import AllocatequotaPage from './Pages/District/AllocatequotaPage';
import Session from './Pages/Hospital/Session';

import VaccineCenter from './Pages/VaccineCenter/vaccineCenter';
import ManageZone from './Pages/ManageZone/manageZone';
import VaccineCenterDetail from './Pages/VaccineCenterDetail/vaccineCenterDetail';

function App() {


  //jsx----------------------------
  return (
    <>

      <Router>
        <Switch>
          <Route exact path='/' component={Hospital} />
          <Route exact path='/session' component={Session} />
          <Route exact path='/dummy' component={Dummy} />
          <Route exact path='/login' component={ReferencePage} />
          <Route exact path='/details' component={DetailsPage} />
          {/* <Route exact path='/vaccine' component={MainQuataPage}/> 
                          <Route exact path='/quota' component={AllocatequotaPage}/>  */}
          <Route exact path='/vaccine-center' component={VaccineCenter} />
          <Route exact path='/manage-zone' component={ManageZone} />
          <Route exact path='/vaccine-center/:centerId' component={VaccineCenterDetail} />
        </Switch>
      </Router>

    </>
  )
}

export default App

