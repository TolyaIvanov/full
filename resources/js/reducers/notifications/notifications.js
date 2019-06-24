import {
	MAKE_NOTIFICATIONS,
	REMOVE_NOTIFICATIONS,
} from "../../constants/defaultConstants";

export const notifications = (state = [], {data, id, type}) => {
	switch (type) {
		case MAKE_NOTIFICATIONS:
			return {
				...state,
				data
			};
		case REMOVE_NOTIFICATIONS:
			return {
				...state,
				id
			};
		default:
			return state;
	}
};

