import React from "react";
import ButtonComponent from "./UI/ButtonComponent";
import Button from "../models/button";
import Icon from "../models/icon";


const ScrollUp : React.FC = () => {

    const scrollUpHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    };

    const scrollUpIcon : Icon = {id: "icn-scroll-up", title: "Scroll Up", styleClasses: "fa-solid fa-angle-up", href: ""};
    const scrollUpBtn: Button = {id: "btn-scroll-up", name: "", onClick: scrollUpHandler, classes: "btn rounded-circle btn-primary", btnIcon: scrollUpIcon, style: {position:"fixed", right:"0", bottom: "0", margin: "1em", zIndex: 1444444}};

    return (
        <ButtonComponent id={scrollUpBtn.id} name={scrollUpBtn.name} onClick={scrollUpBtn.onClick} classes={scrollUpBtn.classes} btnIcon={scrollUpBtn.btnIcon} style={scrollUpBtn.style} /> 
    );
}


export default ScrollUp;
  