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
	isEmailFetchSuccess
} from "./subscribe/email";

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
	fetchExamples,
	emailChanging,
	isEmailFetchSuccess,  //todo email notification
});
