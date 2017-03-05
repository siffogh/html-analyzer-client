import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../App/appActions';
import './Login.scss';
import Loader from '../common/Loader';
import TextInput from '../common/TextInput';
import Footer from '../common/AuthFooter';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.submitLogin = this.submitLogin.bind(this);
    this.changeField = this.changeField.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    this.props.actions.loginUser(this.state);
  }

  changeField(key, value) {
    const newState = Object.assign({}, this.state, { [key]: value });
    this.setState(newState);
  }
  changeUser(el) {
    this.changeField('user', el.target.value);
  }


  changePassword(el) {
    this.changeField('password', el.target.value);
  }

  render() {
    let panel = '';
    if(!this.props.app.loader){
      panel = (
        <div className="panel panel-default">
          <div className="panel-heading">Login</div>
          <div className="panel-body">
            <form onSubmit={this.submitLogin}>
              <TextInput name="user" placeholder="Username or Email" onChange={this.changeUser} />
              <TextInput name="password" placeholder="Password" type="password" onChange={this.changePassword} error={this.props.app.authError}/>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="panel-footer">
            <Footer message="Don't have an account? " target="signup" />
          </div>
        </div>
      );
    }
    return (
      <div className="login-div">
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
