/**
 * 
 * 
 */

interface Image {
    id: string;
    name: string;
    src: string;
    onClick: React.MouseEventHandler<HTMLImageElement> | undefined; 
    style: React.CSSProperties; 
}

export default Image;