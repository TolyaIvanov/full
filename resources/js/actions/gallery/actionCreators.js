import {GALLERY_IS_LOADING, GALLERY_LOAD_HAS_ERROR, LOAD_GALLERY_PHOTO} from "../../constants/constants";

export const fetchGalleryListSuccess = (data) => ({
	type: LOAD_GALLERY_PHOTO,
	data: data,
});

export const galleryIsLoading = (isLoading) => ({
	type: GALLERY_IS_LOADING,
	isLoading: isLoading,
});

export const fetchGalleryListHasErrored = (hasErrored) => ({
	type: GALLERY_LOAD_HAS_ERROR,
	hasErrored: hasErrored,
});