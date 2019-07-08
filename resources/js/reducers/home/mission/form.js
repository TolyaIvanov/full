import {
	MISSION_INPUTS_CHANGING
} from "../../../constants/defaultConstants";

const initialState = {
	'name': '',
	'email': '',
	'message': '',
};

export const missionInputs = (state = initialState, {type, values}) => {
	switch (type) {
		case MISSION_INPUTS_CHANGING:
			return {
				...state,
				...values
			};
		default:
			return state;
	}
};
