export const CURRENT_FONT_SIZE = "CURRENT_FONT_SIZE";

export const addCurrentFontSize = ({currentFontSize = 0} = {}) => {
    return{
        type: CURRENT_FONT_SIZE,
        payload:{ currentFontSize }
    }
}
    
