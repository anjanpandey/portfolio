/**
 * 
 * 
 */


import Icon from "./icon";

type Button = {
    id: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; 
    classes: string; 
    btnIcon: Icon | undefined;
    style: React.CSSProperties;
}

export default Button;