import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeActions from './homeActions';
import { logoutUser } from '../App/appActions';
import TextInput from '../common/TextInput';
import Loader from '../common/Loader';
import Table from '../common/Table';
import './Home.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
    };
    this.changeLink = this.changeLink.bind(this);
    this.submitLink = this.submitLink.bind(this);
  }

  changeLink(e) {
    this.setState({ link: e.target.value });
  }

  submitLink(e) {
    e.preventDefault();
    this.props.actions.analyzeLink(this.state.link);
  }

  render() {
    let panelBody = '';
    if (!this.props.home.loader) {
      panelBody = (
        <div className="panel-body">
          <h1>Welcome to HTML Analyzer</h1>
          <form className="form-group" onSubmit={this.submitLink}>
            <TextInput
              name="url-input"
              placeholder="Input Page Url ..."
              onChange={this.changeLink}
              error={this.props.home.analysisFail}
            />
            <button type="submit" className="btn btn-primary btn-lg">Analyze</button>
          </form>
          <Table content={this.props.home.analysis} />
        </div>
      );
    }
    return (
      <div className="home-div panel panel-default">
        <Loader color="#428bca" size="16px" margin="10px" display={this.props.home.loader} />
        <div className="panel-heading">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="glyphicon glyphicon-user" />
              <strong>{this.props.app.user ? ` ${this.props.app.user.username} ` : ''}</strong>
              <span className="caret" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownBtn">
              <li><a onClick={this.props.actions.logoutUser}>Logout</a></li>
            </ul>
          </div>
        </div>
        {panelBody}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  home: state.home,
  app: state.app,
});

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Object.assign({}, homeActions, { logoutUser }), dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
