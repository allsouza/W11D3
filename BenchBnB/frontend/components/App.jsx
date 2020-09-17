import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/signup' component={SignUpFormContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
  </div>
);

export default App;