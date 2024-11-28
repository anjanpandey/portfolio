import React from "react";
import Button from "../../models/button";
import IconComponent from "./IconComponent";


const ButtonComponent: React.FC<Button> = (props) => {
    const hasIcn = props.btnIcon !== undefined; 
    const hasName = props.name.trim().length > 0; 

    if(hasIcn && hasName) {
        return (
            <button id={props.id} className={props.classes} onClick={props.onClick} title={props.name} style={props.style}> 
                <IconComponent id={props.btnIcon!.id} styleClasses={props.btnIcon!.styleClasses} title={props.btnIcon!.title} href={props.btnIcon!.href} />
                {props.name}
            </button>
        );
    }

    if(hasIcn) {
        return (
            <button id={props.id} className={props.classes} onClick={props.onClick} title={props.name} style={props.style}>
                <IconComponent id={props.btnIcon!.id} styleClasses={props.btnIcon!.styleClasses} title={props.btnIcon!.title} href={props.btnIcon!.href} />
            </button>
        );
    }

    return (
        <button id={props.id} className={props.classes} onClick={props.onClick} title={props.name} style={props.style}>{props.name}</button>
    );
}


export default ButtonComponent;