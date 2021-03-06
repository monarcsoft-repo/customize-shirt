import { INCREASE_FONT_SIZE } from "../action/updatedTextFontSize";
import { REDUCE_FONT_SIZE } from "../action/updatedTextFontSize";

const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case INCREASE_FONT_SIZE:{
            return state = action.payload.fontSize;
        }
        case REDUCE_FONT_SIZE:{
            return state = action.payload.fontSize;
        }
        default :
            return state;
    }
}