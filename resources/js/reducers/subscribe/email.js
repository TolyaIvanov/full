import {
	FETCH_EMAIL,
	EMAIL_INPUT_CHANGING,
} from "../../constants/defaultConstants";

export const emailChanging = (state = '', {value, type}) => {
	switch (type) {
		case EMAIL_INPUT_CHANGING:
			return {
				...state,
				value
			};
		default:
			return state;
	}
};

export const isEmailFetchSuccess = (state = false, {info, type}) => {  //todo email notification
	switch (type) {
		case FETCH_EMAIL:
			return {
				...state,
				info
			};
		default:
			return state;
	}
};