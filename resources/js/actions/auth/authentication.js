import axios from 'axios';
import store from './../../store/store';
import history from './../../history/history';
import setAuthToken from './../../setAuthToken';

import {
	getErrors,
	setCurrentUser,
	clearInputs,
} from './actionCreator';

export const registerUser = (event) => {
	event.preventDefault();

	return dispatch => {
		let user = store.getState().inputsValues;

		axios.post('/api/register', user)
			.then(res => {
				const {token} = res.data;

				localStorage.setItem('token', token);
				setAuthToken(token);
				dispatch(setCurrentUser({username: res.username, token}));
			})
			.then(() => history.push('/'))
			.catch(err => {
				dispatch(getErrors(err.response));
			});
	}
};

export const loginUser = (event) => {
	event.preventDefault();

	return dispatch => {
		let user = {
			email: store.getState().inputsValues.login_email,
			password: store.getState().inputsValues.login_password
		};

		axios.post('/api/login', user)
			.then(res => {
				const {token} = res.data;

				dispatch(setCurrentUser({username: res.username, token}));

				localStorage.setItem('token', token);
				setAuthToken(token);
			})
			.then((res) => {
				history.push('/')
			})
			.catch(err => {
				dispatch(getErrors(err.response));
			});
	};
};

export const logoutUser = () => dispatch => {
	localStorage.removeItem('token');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
	dispatch(clearInputs());

	history.push('/');
};