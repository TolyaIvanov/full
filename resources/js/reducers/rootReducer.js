import {combineReducers} from "redux";

import {
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
} from './gallery/galleryList'

import {
	emailChanging,
} from "./home/subscribe/email";

import {
	notifications
} from "./notifications/notifications";

import {
    modal
} from "./modal/modal";

import {
	missionInputs
} from "./home/mission/form";

import {
	auth,
	inputsValues
} from './auth/authentication';

import {
	authErrors
} from "./auth/authErrors";

import {
	menu
} from "./header/menu";

import {
    profileData
} from "./profile/profileData";

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
	emailChanging,
	notifications,
    modal,
	missionInputs,
	auth,
	authErrors,
	inputsValues,
	menu,
    profileData,
});
