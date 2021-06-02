
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
} from "react-router-dom";
import { createHashHistory } from "history";
// import Hospital from './Pages/Hospital/Hospital';
// import ReferencePage from "./Pages/Hospital/ReferencePage"
// import DetailsPage from './Pages/Hospital/DetailsPage';
// import Session from './Pages/Hospital/Session';
import { Provider } from "react-redux";
import store from './store';
import AppRouter from './AppRouter';

export const hashHistory = createHashHistory();



function App() {
  //jsx----------------------------
  return (
    <>
 <Provider store={store}>
      <Router history={hashHistory}>
        {/* <Switch>
          <Route exact path='/' component={Hospital} />
          <Route exact path='/session' component={Session} />
          <Route exact path='/dummy' component={Dummy} />
          <Route exact path='/login' component={ReferencePage} />
          <Route exact path='/details' component={DetailsPage} />
        </Switch> */}
        <AppRouter/>
      </Router>
   </Provider>
    </>
  )
}

export default App

