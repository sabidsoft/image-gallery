import ImageInput from "../imageInput/ImageInput";
import ImageItem from "../imageItem/ImageItem";
import styles from "./styles";
import { ImageItemsProps } from "./types";

export default function ImageItems({
    images,
    handleMouseEnter,
    handleMouseLeave,
    handleDragStart,
    handleDrop,
    handleDragOver,
    handleCheckedImage,
    handleImageChange
}: ImageItemsProps): JSX.Element {
    return (
        <div className={styles.gridContainer}>
            {images.map((image, index) => (
                <ImageItem
                    key={image.id}
                    image={image}
                    index={index}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    handleDragStart={handleDragStart}
                    handleDrop={handleDrop}
                    handleDragOver={handleDragOver}
                    handleCheckedImage={handleCheckedImage}
                />
            ))}
            <ImageInput handleImageChange={handleImageChange} />
        </div>
    );
}