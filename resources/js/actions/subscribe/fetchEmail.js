import {
	isEmailFetchSuccess,
} from './actionCreators';

export const fetchEmail = url => {
	return dispatch => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				return response;
			})
			.then(response => response.json())
			.then(info => dispatch(isEmailFetchSuccess(info)));
	}
};
