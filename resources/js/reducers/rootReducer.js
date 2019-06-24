import { combineReducers } from "redux";

import  {
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
}from './gallery/galleryList'

import {
	fetchExamples
} from "./examples/examples";

import {
	emailChanging,
} from "./subscribe/email";

import {
	notifications
} from "./notifications/notifications";

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
	fetchExamples,
	emailChanging,
	notifications,
});
