import {
	SEND_MISSION_FORM
} from "../../../constants/defaultConstants";

import {
	addNotification
} from "../../notifications/notifications";

import {
	BASE_PATH
} from "../../../constants/defaultConstants";

import store from './../../../store/store'

export const fetchFeedback = () => {
	event.preventDefault();

	return dispatch => {
		let email = store.getState().missionInputs.email;
		let name = store.getState().missionInputs.name;
		let message = store.getState().missionInputs.message;

		fetch(`${BASE_PATH}send/email`, {
			method: 'POST',

		})
	};
};
