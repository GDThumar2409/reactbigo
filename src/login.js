import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

class Login extends Component {
  handleSubmit(e) {
    var form = new FormData(document.getElementById("form"));
    console.log(form);
    e.preventDefault();
    this.props.onAuth(form.get('username'), form.get('password'));
  }
  constructor(props) {
    super(props);
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>Unable to log in with provided credentials.</p>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div>
              {errorMessage}
              {
                this.props.loading ?
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  :
                  <div className="content-section">
                    <form method="POST" id="form">

                      <fieldset className="form-group">
                        <legend className="border-bottom mb-4">Log In</legend>
                        <div id="div_id_username" className="form-group"> <label htmlFor="id_username" className=" requiredField">
                          Username<span className="asteriskField">*</span> </label>
                          <div className=""> <input type="text" name="username" autoFocus="" autoCapitalize="none"
                            autoComplete="username" maxLength="150" className="textinput textInput form-control" required=""
                            id="id_username" /> </div>
                        </div>
                        <div id="div_id_password" className="form-group"> <label htmlFor="id_password" className=" requiredField" >
                          Password<span className="asteriskField" >*</span> </label>
                          <div className=""> <input type="password" name="password" autoComplete="current-password"
                            className="textinput textInput form-control" required="" id="id_password" /> </div>
                        </div>

                      </fieldset>


                      <div className="form-group">
                        <button className="btn btn-outline-info" type="submit" onClick={(e) => this.handleSubmit(e)}>Login</button>
                      </div>

                    </form>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);