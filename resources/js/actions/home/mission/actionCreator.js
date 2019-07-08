import {
	MISSION_INPUTS_CHANGING,
	SEND_MISSION_FORM
} from "../../../constants/defaultConstants";

export const changeMissionInput = (name, value) => {
	let values = [];

	values[name] = value;

	return {
		type: MISSION_INPUTS_CHANGING,
		values
	};
};

export const sendForm = () => ({

});
