import { combineReducers } from "redux";
import  {fetchGalleryList, galleryIsLoading, fetchGalleryListHasErrored}from './galleryList'

export default combineReducers({
	fetchGalleryList,
	galleryIsLoading,
	fetchGalleryListHasErrored,
});





