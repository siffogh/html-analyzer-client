import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../App/appActions';
import './Signup.scss';
import Loader from '../common/Loader';
import TextInput from '../common/TextInput';
import Footer from '../common/AuthFooter';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.submitSignup = this.submitSignup.bind(this);
    this.changeField = this.changeField.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  submitSignup(e) {
    e.preventDefault();
    this.props.actions.signupUser(this.state);
  }

  changeField(key, value) {
    const newState = Object.assign({}, this.state, { [key]: value });
    this.setState(newState);
  }
  changeUsername(el) {
    this.changeField('username', el.target.value);
  }

  changeEmail(el) {
    this.changeField('email', el.target.value);
  }

  changePassword(el) {
    this.changeField('password', el.target.value);
  }

  render() {
    let panel = '';
    if(!this.props.app.loader){
      panel = (
        <div className="panel panel-default">
          <div className="panel-heading">Signup</div>
          <div className="panel-body">
            <form onSubmit={this.submitSignup}>
              <TextInput name="username" placeholder="Username" onChange={this.changeUsername} />
              <TextInput name="email" placeholder="Email" onChange={this.changeEmail} />
              <TextInput name="password" placeholder="Password" type="password" onChange={this.changePassword} error={this.props.app.authError}/>
              <button type="submit" className="btn btn-primary">Signup</button>
            </form>
          </div>
          <div className="panel-footer">
            <Footer message="Already Registered?" target="login" />
          </div>
        </div>
      );
    }
    return (
      <div className="signup-div">
        <Loader color="#428bca" size="16px" margin="10px" display={this.props.app.loader} />
        { panel }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(appActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
