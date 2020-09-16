import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeBarContainer from './welcome_bar_container';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <button className="btn" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div><WelcomeBarContainer/></div>
      <div className="nav-bar-buttons">
        {currentUser ? <h4>Welcome { currentUser.username }!</h4> : null}
        {display}
      </div>
    </header>
  );
};
