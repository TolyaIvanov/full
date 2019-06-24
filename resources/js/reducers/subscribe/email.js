import {
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
