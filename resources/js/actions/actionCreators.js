import {LOAD_GALLERY_PHOTO, GALLERY_IS_LOADING, GALLERY_LOAD_HAS_ERROR} from './../constants/constants'

export function fetchGalleryListSuccess(data) {
	return {
		type: LOAD_GALLERY_PHOTO,
		data: data,
	}
}

export function galleryIsLoading(isLoading) {
	return {
		type: GALLERY_IS_LOADING,
		isLoading: isLoading,
	}
}

export function fetchGalleryListHasErrored(hasErrored) {
	return {
		type: GALLERY_LOAD_HAS_ERROR,
		hasErrored: hasErrored,
	}
}

