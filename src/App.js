import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css'
import { Provider } from "react-redux";
import store from './store';
import AppRouter from './AppRouter';

import Hospital from './Pages/Hospital/Hospital';
import Session from './Pages/Hospital/Session';
export const hashHistory = createBrowserHistory();



function App() {
  //jsx----------------------------
  return (
    <>
 <Provider store={store}>
      <Router history={hashHistory}>
        {/* <Switch>
          <Route exact path='/' component={Hospital} />
          <Route exact path='/session' component={Session} />
          <Route exact path='/dummy' component={ManageQuota} />
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

