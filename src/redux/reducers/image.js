import { DOWNLOAD_IMAGE } from "./../action/image";
const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case DOWNLOAD_IMAGE:{
            return {...state, ...action.payload};
        }
        default :
            return state;
    }
}