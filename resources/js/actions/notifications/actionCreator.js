import {
	MAKE_NOTIFICATIONS,
	REMOVE_NOTIFICATIONS,
} from "../../constants/defaultConstants";

export const makeNotification = (info, notificationType) => ({
	type: MAKE_NOTIFICATIONS,
	info,
	notificationType,
});

export const hideNotification = (notification) => ({
	type: REMOVE_NOTIFICATIONS,
	notification,
});
