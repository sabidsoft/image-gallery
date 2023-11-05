import { ImagesTypes } from "../components/imageGallery/types";

// Importing images
import image1 from "../assets/images/image-1.webp";
import image2 from "../assets/images/image-2.webp";
import image3 from "../assets/images/image-3.webp";
import image4 from "../assets/images/image-4.webp";
import image5 from "../assets/images/image-5.webp";
import image6 from "../assets/images/image-6.webp";
import image7 from "../assets/images/image-7.webp";
import image8 from "../assets/images/image-8.webp";
import image9 from "../assets/images/image-9.webp";
import image10 from "../assets/images/image-10.jpeg";
import image11 from "../assets/images/image-11.jpeg";

/**
 * Initial set of images for the image gallery.
 * @type {ImagesTypes[]}
 */
const initialImages: ImagesTypes[] = [
    { id: "1", image: image1, isChecked: false, isHovered: false },
    { id: "2", image: image2, isChecked: false, isHovered: false },
    { id: "3", image: image3, isChecked: false, isHovered: false },
    { id: "4", image: image4, isChecked: false, isHovered: false },
    { id: "5", image: image5, isChecked: false, isHovered: false },
    { id: "6", image: image6, isChecked: false, isHovered: false },
    { id: "7", image: image7, isChecked: false, isHovered: false },
    { id: "8", image: image8, isChecked: false, isHovered: false },
    { id: "9", image: image9, isChecked: false, isHovered: false },
    { id: "10", image: image10, isChecked: false, isHovered: false },
    { id: "11", image: image11, isChecked: false, isHovered: false }
];

export default initialImages;
