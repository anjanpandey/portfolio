import React from "react";

import ImageComponent from "./UI/ImageComponent";
import IconComponent from "./UI/IconComponent";

import Image from "../models/image";
import Icon from "../models/icon";
import ProfiePic from '../assets/images/ap.jpg';




const AboutPage : React.FC = () => {

    // define elements 
    const image : Image =  {id: "img-ap", name: "Anjan Pandey", src: ProfiePic, onClick: undefined, style: {maxHeight:"650px", maxWidth:"450px", width:"100%", height:"auto", borderRadius:"13%"}};
    const context = "Hey, I'm Anjan. I'm a Sr. Product Manager. I have a technical background, and I like to sing, sketch, and travel. Thanks for visiting.";
    const icons: ReadonlyArray<Icon> = [{id: "icn-linkedin", title: "Visit my LinkedIn", styleClasses: "fa-brands fa-linkedin fa-2xl m-1", href: "https://www.linkedin.com/in/anjan-pandey"}, 
                           {id: "icn-github", title: "Visit My Github", styleClasses: "fa-brands fa-github fa-2xl m-1", href: "https://github.com/anjanpandey"}];

    return (
        <div>
            <ImageComponent id={image.id} src={image.src} onClick={image.onClick} name={image.name} style={image.style} />
            <p className="p-2">{context}</p>
            {icons.map(icon => (<IconComponent key={icon.id} id={icon.id} title={icon.title} href={icon.href} styleClasses={icon.styleClasses} />))}
        </div>
    );
}


export default AboutPage;