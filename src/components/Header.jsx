import React from 'react';
import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (

    	<div className="header">
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							<img src="../images/logo.png" />
						</a>
					</div>
				</div>
			</nav>
		</div>

    );
  }
}
