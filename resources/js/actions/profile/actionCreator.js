import {
    GET_PROFILE,
    GET_PROFILE_PHOTOS,
    CHANGE_USER_STATUS,
} from "../../constants/defaultConstants";

export const userData = (data) => ({
    type: GET_PROFILE,
    payload: data,
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

