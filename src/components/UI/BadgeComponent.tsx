import React from "react";
import Badge from "../../models/badge";


const BadgeComponent: React.FC<Badge> = (props) => {

    return (
       <span id={props.id} className={props.classes} title={props.title} style={props.style}>{props.innerText}</span>
    );
}


export default BadgeComponent;