import axios from 'axios'

import {
    userStatus
} from "./actionCreator";
import {BASE_PATH} from "../../constants/defaultConstants";
import {addNotification} from "../notifications/notifications";

export const setUserStatus = (status) => dispatch => {
    axios.post(`${BASE_PATH}user/sittings/status`, {status: status})
        .then(res => {
            // dispatch(userStatus(res.data, false));
            // dispatch(addNotification('Status saved.'));
        })
        .catch(err => {
            // dispatch(addNotification(err));
        })
};
