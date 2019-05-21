import { combineReducers } from "redux";

import  {
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
}from './gallery/galleryList'

import {
	fetchExamples
} from "./examples/examples";

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
	fetchExamples,
});





