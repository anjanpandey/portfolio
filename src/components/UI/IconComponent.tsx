import React from "react";
import Icon from "../../models/icon";

/**
 * 
 * @param props 
 * @returns 
 */
const IconComponent: React.FC<Icon> = (props) => {
    const isClickable = props.href.trim().length > 0;

    // make sure the icon is clickable 
    if(isClickable) {
        return (
            <a target="_blank" rel="noreferrer" href={props.href} title={props.title} style={{cursor:"pointer", textDecoration:"none", color:"inherit"}}>
                <i key={props.id} id={props.id} className={props.styleClasses} title={props.title} />
            </a>
        );
    }
    
    // render plain icon on the screen 
    return (
        <i key={props.id} id={props.id} className={props.styleClasses} title={props.title} />
    );
}


export default IconComponent;