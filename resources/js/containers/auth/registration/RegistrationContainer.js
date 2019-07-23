import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import Registration from './../../../components/auth/registration/Registration';

import {
	getErrors,
	registerInputsValue,
} from "../../../actions/auth/actionCreator";

import {
	registerUser,
} from "../../../actions/auth/authentication";

class RegistrationContainer extends Component {
	render() {
		return (
			<Registration
				onInput={this.props.change}
				onSubmit={this.props.register}
				username={this.props.values['username']}
				email={this.props.values['email']}
				password={this.props.values['password']}
				password_confirm={this.props.values['c_password']}
				errors={this.props.errors.data}
			>
			</Registration>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.authErrors,
	values: state.inputsValues,
});

const mapDispatchToProps = dispatch => ({
	register: (event) => dispatch(registerUser(event)),
	change: (key, value) => dispatch(registerInputsValue(key, value)),
	handleErrors: (data) => dispatch(getErrors(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrationContainer));