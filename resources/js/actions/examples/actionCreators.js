import {
	LOAD_EXAMPLES_PHOTOS,
} from "../../constants/constants";

export const fetchExample = data => ({
	type: LOAD_EXAMPLES_PHOTOS,
	data: data,
});

