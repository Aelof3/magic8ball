import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="nav-wrapper">
        <span className="username">{this.context.user.name}</span>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="nav-wrapper">
        <nav>
          <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
        </nav>
      </div>
    );
  }

  render() {
    return (
      <header className="Header">
        <h1>
          <Link to="/">Magic 8 ball</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;