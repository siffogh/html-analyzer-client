import React from 'react';
import './App.scss';

export default class AppPage extends React.Component {
  render() {
    return (
      <div className="app-div">
        <h1>Welcome to HTML Analyzer</h1>
        {this.props.children}
      </div>
    );
  }
}
