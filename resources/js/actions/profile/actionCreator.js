import {
    GET_PROFILE,
    GET_PROFILE_PHOTOS,
    CHANGE_USER_STATUS,
    GET_PROFILE_IS_LOADING,
} from "../../constants/defaultConstants";

export const userData = (data) => ({
    type: GET_PROFILE,
    payload: data,
});

export const userDataIsLoading = (isLoading) => ({
    type: GET_PROFILE_IS_LOADING,
    isLoading
});

export const userPhotos = (photos) => ({
    type: GET_PROFILE_PHOTOS,
    photos: photos
});

export const userStatus = (status, isStatusChanged) => ({
    type: CHANGE_USER_STATUS,
    isStatusChanged: isStatusChanged,
    status
});

