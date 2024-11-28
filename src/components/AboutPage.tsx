import React from "react";

import ImageComponent from "./UI/ImageComponent";
import IconComponent from "./UI/IconComponent";

import Image from "../models/image";
import Icon from "../models/icon";
import ProfilePic from '../assets/images/ap.png';




const AboutPage : React.FC = () => {

    // define elements 
    const image : Image =  {id: "img-ap", name: "Anjan Pandey", src: ProfilePic, onClick: undefined, style: {maxHeight:"550px", maxWidth:"350px", width:"100%", height:"auto", borderRadius:"10%", position: "relative"}};
    const context = "Hey 👋, I'm Anjan. I am a founder of healcovery.";
    const icons: ReadonlyArray<Icon> = [{id: "icn-linkedin", title: "Visit my LinkedIn", styleClasses: "fa-brands fa-linkedin fa-2xl m-1", href: "https://www.linkedin.com/in/anjan-pandey"}, 
                           {id: "icn-github", title: "Visit My Github", styleClasses: "fa-brands fa-github fa-2xl m-1", href: "https://github.com/anjanpandey"}];

    return (
        <div>
            <ImageComponent id={image.id} src={image.src} onClick={image.onClick} name={image.name} style={image.style} />
            <p className="mt-2"><b>{context}</b></p>
            <p>At healcovery, our mission is to offer personalized paths to behavioral recovery through the power of AI. We take a holistic approach to support individuals throughout their entire journey—from discovery to recovery. Our vision is to empower people with a personalized AI Case Manager they can carry with them at all times, providing constant guidance and support on their path to lasting well-being.</p>
            <p>➡️ <a href="https://healcovery.ai" title="healcovery" target="_blank" rel="noreferrer" style={{"textDecoration":"none", "color":"#6A9C89", "fontWeight":"bold"}}>Visit healcovery</a></p>
            <p>➡️ <a href="https://apps.apple.com/app/healcovery/id6698894036" title="healcovery iOS App" target="_blank" rel="noreferrer" style={{"textDecoration":"none", "color":"#6A9C89", "fontWeight":"bold"}}>healcovery iOS App</a></p>
            <p className="mt-2">{icons.map(icon => (<IconComponent key={icon.id} id={icon.id} title={icon.title} href={icon.href} styleClasses={icon.styleClasses} />))}</p>
        </div>
    );
}


export default AboutPage;