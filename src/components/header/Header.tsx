import { BiSolidCheckboxChecked } from "react-icons/bi";
import { HeaderProps } from "./types";
import styles from "./styles";

export default function Header({ checkedImageIds, handleDeleteImage }: HeaderProps): JSX.Element {
    // Checking if there are any selected image IDs
    const filesSelected = checkedImageIds.length > 0;

    return (
        <div className={styles.headerContainer}>
            {filesSelected && (
                <div className={styles.filesSelectedContainer}>
                    <BiSolidCheckboxChecked size={40} color="#005CC8" className={styles.checkedIcon} />
                    <h1 className={styles.filesSelectedHeader}>
                        {checkedImageIds.length} {checkedImageIds.length === 1 ? 'File' : 'Files'} Selected
                    </h1>
                </div>
            )}
            {!filesSelected && <h1 className={styles.galleryHeader}>Gallery</h1>}
            {filesSelected && (
                <button onClick={handleDeleteImage} className={styles.button}>
                    Delete {checkedImageIds.length === 1 ? 'File' : 'Files'}
                </button>
            )}
        </div>
    );
}
