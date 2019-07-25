import {
	OPEN_HEADER_MENU,
	OPEN_HEADER_DROPDOWN
} from "../../constants/defaultConstants";

const initialState = {
	headerIsOpened: false,
	headerDropdownIsOpened: false,
};

export const menu = (state = initialState, {type}) => {
	switch (type) {
		case OPEN_HEADER_MENU:
			return {
				...state,
				headerIsOpened: !state.headerIsOpened,
			};
		case OPEN_HEADER_DROPDOWN:
			return {
				...state,
				headerDropdownIsOpened: !state.headerDropdownIsOpened
			};
		default:
			return state;
	}
};