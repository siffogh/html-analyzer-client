import React from 'react';
import './App.scss';

export default class AppPage extends React.Component {
  render() {
    return (
      <div className="app-div">
        {this.props.children}
      </div>
    );
  }
}
