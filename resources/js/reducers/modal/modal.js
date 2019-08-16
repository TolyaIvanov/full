import {
    HIDE_MODAL_WINDOW,
    SHOW_MODAL_WINDOW
} from "../../constants/defaultConstants";

const initialState = {
    modalType: null,
    modalProps: {}
};

export const modal = (state = initialState, {type, modalProps, modalType}) => {
    switch (type) {
        case SHOW_MODAL_WINDOW:
            return {
                ...state,
                modalProps,
                modalType,
            };
        case HIDE_MODAL_WINDOW:
            return initialState;
        default:
            return state
    }
}
