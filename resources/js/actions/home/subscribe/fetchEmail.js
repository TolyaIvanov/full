import {
	emailChanging
} from './actionCreators';

import {
	addNotification
} from "../../notifications/notifications";

import store from '../../../store/store';

export const fetchEmail = (url) => {
	event.preventDefault();

	return dispatch => {
		let email = store.getState().emailChanging.value;

		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				'email': email,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				return response;
			})
			.then(response => response.json())
			.then(info => {
				dispatch(addNotification(info, 'success'));
				dispatch(emailChanging(''));
			})
			.then(() => dispatch(emailChanging('')))
			.catch(info => {
				dispatch(addNotification(info, 'fail'));
				dispatch(emailChanging(''));
			})
	}
};

