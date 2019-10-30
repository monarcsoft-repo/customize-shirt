export const SHIRT_TEXT = "SHIRT_TEXT";

export const addTextOnShirt = ({shirtOnText = "Your text goes here"} = {}) => {
    return{
        type:SHIRT_TEXT,
        payload:{ shirtOnText }
    }
}