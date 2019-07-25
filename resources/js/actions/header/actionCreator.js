import {
	OPEN_HEADER_MENU,
	OPEN_HEADER_DROPDOWN,
} from "../../constants/defaultConstants";

export const toggleMenu = () => ({
	type: OPEN_HEADER_MENU,
});

export const toggleDropdown = () => ({
	type: OPEN_HEADER_DROPDOWN,
});