import { ADD_FONT_SIZE } from "../action/updatedTextFontSize";

const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case ADD_FONT_SIZE:{
            return state = action.payload.fontSize;
        }
        default :
            return state;
    }
}