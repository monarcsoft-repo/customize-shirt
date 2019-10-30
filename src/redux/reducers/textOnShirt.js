import { SHIRT_TEXT } from "./../action/textOnShirt";

const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case SHIRT_TEXT:{
            return state = action.payload.shirtOnText;
        }
        default :
            return state;
    }
}