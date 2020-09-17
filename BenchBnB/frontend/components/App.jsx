import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util'
import BenchIndexContainer from "./benches/bench_index_container";
import SearchContainer from './search/search_container'

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/signup' component={SignUpFormContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <Route exact path='/' component={SearchContainer} />
  </div>
);

export default App;