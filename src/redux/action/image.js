export const DOWNLOAD_IMAGE = "DOWNLOAD_IMAGE";

export const downloadImage = ({imageUrl = ""} = {}) => {
    return{
        type: DOWNLOAD_IMAGE,
        payload: { imageUrl }
    }
}