/**
 * 
 * 
 */

import Badge from "./badge";
import Button from "./button";
import Image from "./image";

type Card =  {
    id: string;
    img: Image;
    cardTitle: string;
    cardContent: string;
    classes: string;
    style: React.CSSProperties;
    badges: ReadonlyArray<Badge>;
    buttons: ReadonlyArray<Button>;
}

export default Card;