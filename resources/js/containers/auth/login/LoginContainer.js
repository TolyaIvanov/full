import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom'

import Login from './../../../components/auth/login/Login';

import {
	getErrors,
	loginInputsValue,
} from "../../../actions/auth/actionCreator";

import {
	loginUser,
} from "../../../actions/auth/authentication";

class LoginContainer extends Component {
	render() {
	    if (this.props.auth.isAuthenticated) {
	        return <Redirect to="/" />
        }

		return (
			<Login
				onInput={this.props.change}
				onSubmit={this.props.login}
				email={this.props.values.login_email}
				password={this.props.values.login_password}
				errors={this.props.errors.data}
			>
			</Login>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.authErrors,
	values: state.inputsValues,
});

const mapDispatchToProps = dispatch => ({
	login: (event) => dispatch(loginUser(event)),
	change: (key, value) => dispatch(loginInputsValue(key, value)),
	handleErrors: (data) => dispatch(getErrors(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
