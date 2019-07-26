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

		axios.post('/api/signup', user)
			.then(res => {
				const {token, username} = res.data;

				localStorage.setItem('token', token);
				localStorage.setItem('username', username);
				setAuthToken(token);
				dispatch(setCurrentUser({username, token}));
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
				const {token, username} = res.data;

				localStorage.setItem('token', token);
				localStorage.setItem('username', username);
				setAuthToken(token);
				dispatch(setCurrentUser({username, token}));
			})
			.then(() => {
				history.push('/')
			})
			.catch(err => {
				dispatch(getErrors(err.response));
			});
	};
};

export const logoutUser = () => dispatch => {
	axios.get(`api/logout`)
		.then(res => {
			console.log(res);
			localStorage.removeItem('token');
			localStorage.removeItem('username');
			setAuthToken(false);
			dispatch(setCurrentUser({}));
			dispatch(clearInputs());
		})
		.then(history.push('/'));
};