import imageItemStyles from "./styles";
import { ImageItemProps } from "./types";

export default function ImageItem({
    image: { id, image, isChecked, isHovered },
    index,
    handleMouseEnter,
    handleMouseLeave,
    handleDragStart,
    handleDrop,
    handleDragOver,
    handleCheckedImage
}: ImageItemProps): JSX.Element {
    // Apply styles to the image item based on its properties
    const styles = imageItemStyles(index, isChecked, isHovered);

    return (
        <div
            draggable
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
            onDragStart={(e) => handleDragStart(e, id)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            className={styles.gridItemContainer}
        >
            <div className={styles.overlayContainer}>
                <input
                    type="checkbox"
                    className={styles.checkboxInput}
                    onChange={(e) => handleCheckedImage(e, id)}
                />
            </div>
            <img
                src={image}
                alt="gallery_image"
                className={styles.image}
            />
        </div>
    );
}