import { SHOW_POPUP, HIDE_POPUP } from '../common/constants';

const initialState = {
    isPopupOpen: false,
    sectionName: ''
};

const reducer = (state = initialState, action : any) => {
    switch (action.type) {
        case SHOW_POPUP:
            return {
                ...state,
                isPopupOpen: true,
                sectionName: action.payload
            };
        case HIDE_POPUP:
            return {
                ...state,
                ...initialState
            };
        default: return state;
    }
}

export default reducer;