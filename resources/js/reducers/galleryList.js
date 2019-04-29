import {LOAD_GALLERY_PHOTO, GALLERY_IS_LOADING, GALLERY_LOAD_HAS_ERROR} from './../constants/constants'

export function fetchGalleryList(state = [], {data, type}) {
	switch (type) {
		case LOAD_GALLERY_PHOTO:
			return data;
		default:
			return state;
	}
}

export function galleryIsLoading(state = false, {isLoading, type}) {
	switch (type) {
		case GALLERY_IS_LOADING :
			return isLoading;

		default:
			return state;
	}
}

export function fetchGalleryListHasErrored(state = false, {hasErrored, type}) {
	switch (type) {
		case GALLERY_LOAD_HAS_ERROR :
			return hasErrored;

		default:
			return state;

	}
}
