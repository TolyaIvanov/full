import {
	OPEN_HEADER_MENU
} from "../../constants/defaultConstants";

const initialState = {
	isOpened: false
};

export const menu = (state = initialState, {type}) => {
	switch (type) {
		case OPEN_HEADER_MENU:
			return {
				isOpened: !state.isOpened,
			};
		default:
			return state;
	}
};