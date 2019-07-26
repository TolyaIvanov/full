import axios from 'axios';

import {fetchExample} from "./actionCreators";

export const fetchExamplesList = url => {
	return (dispatch) => {
		axios.get(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				return response;
			})
			.then(response => response.json())
			.then(data => dispatch(fetchExample(data)))
			.catch(rejected => {
				console.log(rejected);
			});
	}
};
