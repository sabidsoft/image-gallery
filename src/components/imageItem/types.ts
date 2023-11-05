export interface ImageItemProps {
    image: {
        id: string;
        image: string;
        isChecked: boolean;
        isHovered: boolean;
    };
    index: number;
    handleMouseEnter: (id: string) => void;
    handleMouseLeave: (id: string) => void;
    handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, droppedIndex: number) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleCheckedImage: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}