import {LOAD_GALLERY_PHOTO, GALLERY_IS_LOADING, GALLERY_LOAD_HAS_ERROR} from '../../constants/defaultConstants'


export const fetchGalleryList = (state = {list: []}, {data, type}) => {
	switch (type) {
		case LOAD_GALLERY_PHOTO:
			return {
				...state,
				list: data
			};
		default:
			return state;
	}
};

export const galleryIsLoading = (state = false, {isLoading, type}) => {
	switch (type) {
		case GALLERY_IS_LOADING :
			return {
				...state,
				isLoading
			};
		default:
			return state;
	}
};

export const fetchGalleryListHasErrored = (state = false, {hasErrored, type}) => {
	switch (type) {
		case GALLERY_LOAD_HAS_ERROR :
			return {
				...state,
				hasErrored
			};
		default:
			return state;
	}
};
