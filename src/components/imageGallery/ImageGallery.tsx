import { useState, ChangeEvent, DragEvent } from "react";
import initialImages from "../../utils/initialImages.utils";
import updateImageState from "../../utils/updateImageState.utils";
import { ImagesTypes } from "./types";
import styles from "./styles";
import Header from "../header/Header";
import ImageItems from "../imageItems/ImageItems";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ImageGallery() {
    const [images, setImages] = useState<ImagesTypes[]>(initialImages);
    const [checkedImageIds, setCheckedImageIds] = useState<string[]>([]);

    /**
     * Handles checking/unchecking of images.
     * @param {ChangeEvent<HTMLInputElement>} e - The event object.
     * @param {string} checkedImageId - The ID of the checked image.
     */
    const handleCheckedImage = (e: ChangeEvent<HTMLInputElement>, checkedImageId: string): void => {
        const isChecked = e.target.checked;

        if (isChecked) {
            // Add the checked image ID to the checkedImageIds state
            setCheckedImageIds(prevCheckedImageIds =>
                [...prevCheckedImageIds, checkedImageId]
            );

            // Update the isChecked property value to true 
            updateImageState(checkedImageId, "isChecked", true, setImages);
        }

        else {
            // Remove the checked image ID from the checkedImageIds state
            setCheckedImageIds(prevCheckedImageIds =>
                prevCheckedImageIds.filter(prevCheckedImageId =>
                    prevCheckedImageId !== checkedImageId
                )
            );

            // Update the isChecked property value to false
            updateImageState(checkedImageId, "isChecked", false, setImages);
        }
    };

    /**
     * Handles the deletion of checked images.
     */
    const handleDeleteImage = () => {
        // Delete image from images state based on checkedImageIds
        setImages(prevImages =>
            prevImages.filter(image =>
                !checkedImageIds.includes(image.id)
            )
        );

        // Calculate the quantity of images deleted for toast message
        const imageQuantity = checkedImageIds.length;
        const toastMessage =
            // Display appropriate message based on the number of images deleted
            `${imageQuantity === 1 ? "An image" : `${imageQuantity} images`} deleted successfully!`;

        // Display a success toast message for the deletion
        toast.success(toastMessage, {
            position: "top-center",
            autoClose: 3000,
            theme: "colored"
        });

        // Reset checkedImageIds to empty array after deletion
        setCheckedImageIds([]);
    };

    /**
     * Handles hovering over an image on mouse enter.
     * @param {string} hoveredImageId - The ID of the hovered image.
     */
    const handleMouseEnter = (hoveredImageId: string): void => {
        // Update the 'isHovered' property value to true for the hovered image
        updateImageState(hoveredImageId, "isHovered", true, setImages);
    };

    /**
     * Handles leaving the hover state of an image.
     * @param {string} hoveredImageId - The ID of the hovered image.
     */
    const handleMouseLeave = (hoveredImageId: string): void => {
        // Update the 'isHovered' property value to false for the hovered image
        updateImageState(hoveredImageId, "isHovered", false, setImages);
    };

    /**
     * Handles the change of images.
     * @param {ChangeEvent<HTMLInputElement>} e - The event object for file input.
     */
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length > 0) {
            // Retrieve the selected image file and calculate its size
            const imgFileObj = e.target.files[0];
            const fileSizeInMB = imgFileObj.size / (1024 * 1024); // Convert file size to megabytes

            if (fileSizeInMB <= 2) {
                // Add new image into images state
                setImages(prevImages =>
                    [
                        ...prevImages,
                        {
                            id: Date.now().toString(),
                            image: URL.createObjectURL(imgFileObj),
                            isChecked: false,
                            isHovered: false
                        }
                    ]
                );

                // Display success toast message for a successfully added image
                toast.success("Image added successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored"
                });
            } else {
                // Display error toast message for file size exceeding the limit
                toast.error(`File size exceeds. Maximum ${2} MB allowed!`, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored"
                });
            }
        } else {
            // Display error toast message when no files are selected
            toast.error("No files selected!", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored"
            });
        }
    };

    /**
     * Handles the start of dragging an image.
     * @param {DragEvent<HTMLDivElement>} e - The drag event object.
     * @param {string} imageId - The ID of the dragged image.
     */
    const handleDragStart = (e: DragEvent<HTMLDivElement>, imageId: string): void => {
        // Set the data to be transferred during the drag operation
        e.dataTransfer.setData("id", imageId);
    };

    /**
     * Handles the dropping of an image.
     * @param {DragEvent<HTMLDivElement>} e - The drag event object.
     * @param {number} droppedIndex - The index where the image is dropped.
     */
    const handleDrop = (e: DragEvent<HTMLDivElement>, droppedIndex: number): void => {
        e.preventDefault();

        // Getting the ID of the dragged image
        const draggedImageId = e.dataTransfer.getData("id");

        // Find the dragged image from the images array
        const draggedImage = images.find(image => image.id === draggedImageId);

        // Filter out the dragged image from the images array
        const newImages = images.filter(image => image.id !== draggedImageId);

        // If the dragged image exists, insert it at the droppedIndex in the newImages array
        if (draggedImage)
            newImages.splice(droppedIndex, 0, draggedImage);

        // Update the images state with the new order after the drop
        setImages(newImages);
    };

    /**
     * Handles the drag over an area.
     * @param {DragEvent<HTMLDivElement>} e - The drag event object.
     */
    const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
        // Prevent default behavior to allow dropping
        e.preventDefault();
    };

    return (
        <div className={styles.imageGalleryContainer}>
            <Header
                checkedImageIds={checkedImageIds}
                handleDeleteImage={handleDeleteImage}
            />
            <ImageItems
                images={images}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleDragStart={handleDragStart}
                handleDrop={handleDrop}
                handleDragOver={handleDragOver}
                handleCheckedImage={handleCheckedImage}
                handleImageChange={handleImageChange}
            />
            <ToastContainer />
        </div>
    );
}