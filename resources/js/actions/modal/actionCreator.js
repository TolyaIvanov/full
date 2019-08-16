import {
    SHOW_MODAL_WINDOW,
    HIDE_MODAL_WINDOW
} from "../../constants/defaultConstants";

export const showModal = (modalProps, modalType) => ({
    type: SHOW_MODAL_WINDOW,
    modalProps,
    modalType
});

export const hideModal = () => ({
    type: HIDE_MODAL_WINDOW
});
