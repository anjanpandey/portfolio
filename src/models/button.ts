/**
 * 
 * 
 */

import { Attributes } from "react";
import Icon from "./icon";

interface Button {
    id: string;
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; 
    classes: string; 
    btnIcon: Icon | undefined;
    style: React.CSSProperties;
}

export default Button;