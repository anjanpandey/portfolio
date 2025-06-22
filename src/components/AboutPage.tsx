import React from "react";

import ImageComponent from "./UI/ImageComponent";

import Image from "../models/image";
import ProfilePic from '../assets/images/ap.png';




const AboutPage : React.FC = () => {

    // define elements 
    const image : Image =  {id: "img-ap", name: "Anjan Pandey", src: ProfilePic, onClick: undefined, style: {maxHeight:"550px", maxWidth:"350px", width:"100%", height:"auto", borderRadius:"50%", position: "relative"}};
    const context = "founder & ceo of healcovery | AI | user experience | healthcare";
    // const icons: ReadonlyArray<Icon> = [{id: "icn-linkedin", title: "Visit my LinkedIn", styleClasses: "m-1", href: "https://www.linkedin.com/in/anjan-pandey"}, {id: "icn-github", title: "Visit My Github", styleClasses: "m-1", href: "https://github.com/anjanpandey"}];

    
    const sites = [{"name": "linkedin", "url": "https://www.linkedin.com/in/anjan-pandey"}, {"name": "github", "url": "https://github.com/anjanpandey"}, {"name": "x", "url": "https://www.x.com/theanjanpandey"}]

    return (
        <div className="flex text-center border p-5 rounded">
            <ImageComponent id={image.id} src={image.src} onClick={image.onClick} name={image.name} style={image.style} />
            <p className="mt-2"><b>{context}</b></p>
            <p><a href="https://healcovery.ai" title="healcovery" target="_blank" rel="noreferrer" style={{"textDecoration":"none", "color":"#6A9C89", "fontWeight":"bold"}}>visit healcovery</a></p>
            <p className="mt-2">{sites.map(site => <a key={site.name} href={site.url} target="_blank" rel="noreferrer" className="me-2" style={{"textDecoration": "none"}}>{site.name}</a>)}</p>
        </div>
    );
}


export default AboutPage;