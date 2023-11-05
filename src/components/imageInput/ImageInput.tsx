import { TiImage } from "react-icons/ti";
import { ImageInputProps } from "./types";
import styles from "./styles";

export default function ImageInput({ handleImageChange }: ImageInputProps): JSX.Element {
    return (
        <>
            <label htmlFor="image" className={styles.lablelContainer} >
                <TiImage size={32} />
                <span className={styles.addImagesText}>Add Images</span>
            </label>
            <input
                id="image"
                type="file"
                accept="image/*"
                className={styles.imageInput}
                onChange={handleImageChange}
            />
        </>
    );
}