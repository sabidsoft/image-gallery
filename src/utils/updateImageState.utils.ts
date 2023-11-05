import { Dispatch, SetStateAction } from "react";
import { ImagesTypes } from "../components/imageGallery/types";

/**
 * Updates a specific property of an image in the image collection.
 * @param {string} imageId - The unique identifier of the image to get specific image.
 * @param {string} propertyName - The name of the property to be updated.
 * @param {boolean|string} propertyValue - The new value for the property (can be a boolean or string).
 * @param {Dispatch<SetStateAction<ImagesTypes[]>>} setImages - State setter function for the image collection.
 * @returns {void}
 */
const updateImageState = (
    imageId: string,
    propertyName: string,
    propertyValue: boolean | string,
    setImages: Dispatch<SetStateAction<ImagesTypes[]>>
): void => {
    setImages(prevImages =>
        prevImages.map(image =>
            // Replace the specific property and update the value of the target image
            image.id === imageId ? { ...image, [propertyName]: propertyValue } : image
        )
    );
};

export default updateImageState;