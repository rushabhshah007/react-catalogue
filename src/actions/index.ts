import { SHOW_POPUP, HIDE_POPUP } from "../common/constants";

export const showPopup = (sectionName: string) => ({
    type: SHOW_POPUP,
    payload: sectionName
});

export const hidePopup = () => ({
    type: HIDE_POPUP
});