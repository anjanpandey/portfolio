import React, { useContext } from "react";
import Card from "../../models/card";
import ImageComponent from "./ImageComponent";
import BadgeComponent from "./BadgeComponent";
import ButtonComponent from "./ButtonComponent";

import {ThemeContext} from "../../store/theme-context";


const CardComponent: React.FC<Card> = (props) => {
    
    // check if card has image
    const hasImage = props.img.src.trim().length > 0; 
    const {primaryBackground, primaryColor} = useContext(ThemeContext);

    return (
        <div className={`card ${props.classes}`} id={props.id} style={{...props.style, backgroundColor: primaryBackground, color: primaryColor}}>
            {hasImage ? <ImageComponent id={props.img.id} src={props.img.src} name={props.img.name} onClick={props.img.onClick} style={props.img.style} /> : ""}
            <div id={`body-${props.id}`} className="card-body">
                <h5 id={`title-${props.id}`} className="card-title"><b>{props.cardTitle}</b></h5>
                <p id={`content-${props.id}`} className="card-text">{props.cardContent}</p>
                {props.badges.length > 0 ? props.badges.map(badge => (<BadgeComponent id={badge.id} key={badge.id} title={badge.title} classes={badge.classes} innerText={badge.innerText} style={badge.style} />)) : ""}
                <br /> <br />
                {props.buttons.length > 0 ? props.buttons.map(button => (<ButtonComponent id={button.id} key={button.id} name={button.name} onClick={button.onClick} classes={button.classes} btnIcon={button.btnIcon} style={button.style} />)) : ""}
            </div>
        </div>
    );
}


export default CardComponent;