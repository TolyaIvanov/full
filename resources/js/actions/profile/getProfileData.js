import axios from 'axios'
import {
    addNotification
} from "../notifications/notifications";


import {
    BASE_PATH
} from "../../constants/defaultConstants";

import {
    userData,
    userPhotos
} from "./actionCreator";

export const getUserData = () => dispatch => {
    axios.get(`${BASE_PATH}user`)
        .then(res => {
            dispatch(userData);
        })
        .catch(err => {
            dispatch(addNotification(err))
        })
};

export const getUserPhotos = () => dispatch => {
    axios.get(`${BASE_PATH}user/pictures`)
        .then(res => {
            dispatch(userPhotos(res.data))
        })
        .catch(err => {
            dispatch(addNotification(err))
        })
};
