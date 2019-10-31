export const INCREASE_FONT_SIZE = "INCREASE_FONT_SIZE";
export const REDUCE_FONT_SIZE = "REDUCE_FONT_SIZE";

export const increaseFontSize = ({fontSize = 0} = {}) => {
    return{
        type: INCREASE_FONT_SIZE,
        payload:{ fontSize }
    }
}

export const reduceFontSize = ({fontSize = 0} = {}) => {
    return{
        type: REDUCE_FONT_SIZE,
        payload:{ fontSize }
    }
}