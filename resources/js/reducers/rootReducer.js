import { combineReducers } from "redux";
import  {fetchGalleryList, galleryIsLoading, fetchGalleryListHasErrored}from './gallery/galleryList'

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
});





