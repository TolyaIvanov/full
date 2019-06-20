import {
	LOAD_EXAMPLES_PHOTOS,
} from "../../constants/defaultConstants";

export const fetchExample = data => ({
	type: LOAD_EXAMPLES_PHOTOS,
	data,
});

