import {fetchGalleryListHasErrored, galleryIsLoading, fetchGalleryListSuccess} from './actionCreators'

export const errorFetch = () => {
	return (dispatch) => {
		setTimeout(() => (
			dispatch(fetchGalleryListHasErrored(true))
		), 5000)
	}
};

export const fetchGalleryList = (url) => {
	return (dispatch) => {
		dispatch(galleryIsLoading(true));

		fetch(url)
			.then((response) => {

				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(galleryIsLoading(false));

				return response;
			})
			.then(response => response.json())
			.then(data => dispatch(fetchGalleryListSuccess(data)))
			.catch(() => dispatch(fetchGalleryListHasErrored(true)))
	}
};
