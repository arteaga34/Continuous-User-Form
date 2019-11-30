import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
	continue = e => {
		e.preventDefault();
		// you would process the form in the backend at this step
		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm User Data" />
					<h1>Thank You For Your Submission!</h1>
					<h4>
						You Will Get an Email With Further Instructions Shortly.
					</h4>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
