import {LOAD_EXAMPLES_PHOTOS} from "../../constants/constants";

export const fetchExamples = (state = [], {data, type}) => {
	switch (type) {
		case LOAD_EXAMPLES_PHOTOS:
			return {
				...state,
				data
			};
		default:
			return state;
	}
};
