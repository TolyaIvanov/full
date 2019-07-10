import {combineReducers} from "redux";

import {
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
} from './gallery/galleryList'

import {
	fetchExamples
} from "./examples/examples";

import {
	emailChanging,
} from "./home/subscribe/email";

import {
	notifications
} from "./notifications/notifications";

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

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
	fetchExamples,
	emailChanging,
	notifications,
	missionInputs,
	auth,
	authErrors,
	inputsValues,
});
