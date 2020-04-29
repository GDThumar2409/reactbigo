import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  NavLink,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <header className="site-header">
    <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand mr-4">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
          aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="navbar-nav mr-auto">
            <NavLink to="/CSVUpload" className="nav-item nav-link" activeClassName="hurray">
              Upload CSV
            </NavLink>

          </div>
          
          <div className="navbar-nav">
            {
                    this.props.isAuthenticated ?
    
                    <a className="nav-item nav-link" onClick={this.props.logout}>Logout</a>
    
                    :
    
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                }

          </div>
        </div>
      </div>
    </nav>
  </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.logout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);