import React from 'react';
import { Component } from 'react';
import SetFocus from '../containers/SetFocus.jsx';
import Header from './Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<div className="container">
        	<SetFocus />
        </div>
      </div>
    );
  }
}
