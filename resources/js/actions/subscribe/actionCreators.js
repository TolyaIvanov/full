import {
	FETCH_EMAIL,
	EMAIL_INPUT_CHANGING
} from "../../constants/defaultConstants";

export const isEmailFetchSuccess = info => ({
	type: FETCH_EMAIL,
	info,
});

export const emailChanging = value => ({
	type: EMAIL_INPUT_CHANGING,
	value
});
