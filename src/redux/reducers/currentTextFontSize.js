import { CURRENT_FONT_SIZE } from "./../action/currentTextFontSize";

const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case CURRENT_FONT_SIZE:{
            return state = action.payload.currentFontSize;
        }
        default :
            return state;
    }
}