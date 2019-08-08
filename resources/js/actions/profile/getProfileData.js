import axios from 'axios'
import {
    addNotification
} from "../notifications/notifications";

import {
    BASE_PATH
} from "../../constants/defaultConstants";

import {
    userData,
    userPhotos,
    userDataIsLoading
} from "./actionCreator";

export const getUserData = (username) => dispatch => {
    dispatch(userDataIsLoading(true));

    axios.get(`${BASE_PATH}user/${username}`)
        .then(res => {
            let data = {
                ...res.data,
                isExist: true
            };

            dispatch(userData(data));
            dispatch(userDataIsLoading(false));
        })
        .catch(err => {
            let data = {
                isExist: false
            };

            dispatch(userData(data));
            dispatch(addNotification(err));
            dispatch(userDataIsLoading(false));
        })
};

export const getUserPhotos = (username) => dispatch => {
    axios.get(`${BASE_PATH}user/${username}/pictures`)
        .then(res => {
            dispatch(userPhotos(res.data))
        })
        .catch(err => {
            dispatch(addNotification(err))
        })
};
