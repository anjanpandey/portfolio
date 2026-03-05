/**
 * 
 * 
 */

interface Image {
    id: string;
    name: string;
    src: string;
    onClick?: React.MouseEventHandler<HTMLImageElement> | undefined; 
    style?: React.CSSProperties | undefined; 
}

export default Image;