/**
 * Generates styles for an image item based on provided parameters.
 * @param {number} index - The index of the image item.
 * @param {boolean} isChecked - Indicates if the image is checked.
 * @param {boolean} isHovered - Indicates if the image is being hovered over.
 * @returns {Object} - An object containing Taiwind CSS classes for different parts of the image item.
 */
const imageItemStyles = (index: number, isChecked: boolean, isHovered: boolean): {
    gridItemContainer: string,
    overlayContainer: string,
    checkboxInput: string,
    image: string
} => {
    return {
        gridItemContainer: `relative cursor-pointer border-2 rounded-lg transition ease-in-out duration-500 ${index === 0 && "row-span-2 col-span-2"}`,
        overlayContainer: "absolute left-0 top-0 right-0 bottom-0 z-20 rounded-lg opacity-50 transition ease-in-out duration-500 hover:bg-[#000]",
        checkboxInput: `cursor-pointer h-6 w-6 mt-5 ml-5 ${isHovered || isChecked ? "block" : "hidden"}`,
        image: `rounded-lg w-full h-full ${isChecked && "opacity-25"}`
    };
};

export default imageItemStyles;