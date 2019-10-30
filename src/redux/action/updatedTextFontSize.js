export const ADD_FONT_SIZE = "ADD_FONT_SIZE";

export const addFontSize = ({fontSize = 0} = {}) => {
    return{
        type: ADD_FONT_SIZE,
        payload:{ fontSize }
    }
}