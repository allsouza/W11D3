import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import {login} from './actions/user_actions'

document.addEventListener("DOMContentLoaded", () => {
  let preLoadedState = {};
  if(window.currentUser){
    const user = window.currentUser;
    preLoadedState={
      entities: {users: {[user.id]: user}},
      session: { id: user.id }
    }
    delete window.currentUser;
  }
  const root = document.getElementById("root");
  const store = configureStore(preLoadedState);
  
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
});