import {
	GET_ERRORS
} from "../../constants/defaultConstants";

const initialState = {};

export const authErrors = (state = initialState, {type, data}) => {
	switch (type) {
		case GET_ERRORS:
			return data;
		default:
			return state;
	}
};