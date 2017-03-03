import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from './homeActions';
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
    return (
      <div className="home-div">
        <form className="form-group" onSubmit={this.submitLink}>
          <TextInput
            name="url-input"
            placeholder="Input Page Url ..."
            onChange={this.changeLink}
          />
          <button type="submit" className="btn btn-primary btn-lg">Analyze</button>
          <div className="loader">
            <Loader color="#428bca" size="16px" margin="10px" display={this.props.home.loader} />
          </div>
        </form>
        <Table content={this.props.home.analysis}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home,
});

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(homeActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
