import React from "react";
import Image from "../../models/image";


const ImageComponent: React.FC<Image> = (props) => {

    return (
        <img id={props.id} src={props.src} style={props.style} onClick={props.onClick} alt={props.name} />
    );
}


export default ImageComponent;