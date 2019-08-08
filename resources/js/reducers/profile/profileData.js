import {
    CHANGE_USER_STATUS,
    GET_PROFILE,
    GET_PROFILE_PHOTOS,
    GET_PROFILE_IS_LOADING,
} from "../../constants/defaultConstants";

const initialState = {
    user: {
        username: '',
        avatar: '',
        status: '',
    },
    user_created_photos: [],
    user_liked_photos: [],
    isExist: false,
    isLoading: false,
    isStatusChanged: false,
};

export const profileData = (state = initialState, {
    type,
    payload,
    photos,
    status,
    isStatusChanged,
    isLoading
}) => {
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                ...payload
            };
        case GET_PROFILE_IS_LOADING:
            return {
                ...state,
                isLoading
            };
        case GET_PROFILE_PHOTOS:
            return {
                ...state,
                photos
            };
        case CHANGE_USER_STATUS:
            return {
                ...state,
                isStatusChanged,
                user: {status},
            };
        default:
            return state
    }
};
