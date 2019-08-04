import {
    CHANGE_USER_STATUS,
    GET_PROFILE,
    GET_PROFILE_PHOTOS,
} from "../../constants/defaultConstants";

const initialState = {
    avatar: '',
    avatarPreview: '',
    status: '',
    isStatusChanged: false,
    photos: [],
    liked: [],
};

export const profileData = (state = initialState, {
    type,
    payload,
    photos,
    status,
    isStatusChanged
}) => {
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                ...payload
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
                status,
            };
        default:
            return state
    }
};
