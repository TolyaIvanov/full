import axios from 'axios';
import store from './../../store/store';
import history from './../../history/history';
import setAuthToken from './../../setAuthToken';

import {
	getErrors,
	setCurrentUser,
	clearInputs,
	setCurrentUser
} from './actionCreator';

export const registerUser = (event) => {
	event.preventDefault();

	return dispatch => {
		let user = store.getState().inputsValues;

		axios.post('/api/register', user)
			.then(res => {
				const {token} = res.data;
				const decoded = jwt_decode(token);

				localStorage.setItem('token', token);
				setAuthToken(token);

				dispatch(setCurrentUser(decoded));
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
				const decoded = jwt_decode(token);

				localStorage.setItem('token', token);
				setAuthToken(token);

				dispatch(setCurrentUser(decoded));
			})
			.catch(err => {
				dispatch(getErrors(err.response));
			});
	};
};

export const logoutUser = () => dispatch => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
	dispatch(clearInputs());

	history.push('/');
};