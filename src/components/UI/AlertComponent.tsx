import React from "react";
import Alert from "../../models/alert";
import Button from "../../models/button";
import ButtonComponent from "./ButtonComponent";


const AlertComponent: React.FC<Alert> = (props) => {

    let dismissBtn : Button = {id: "btn-"+props.id, classes: "btn-close", name:"", btnIcon: undefined, onClick: props.onDismiss, style: {}}; 
    

    return (
       <div id={props.id} className={`alert alert-dismissible  ${props.classes}`} role="alert" style={props.style}>
            <p>{props.innerText}</p>
            <ButtonComponent id={dismissBtn!.id} name={dismissBtn!.name} classes={dismissBtn!.classes} onClick={dismissBtn!.onClick} btnIcon={dismissBtn!.btnIcon} style={dismissBtn!.style} />
       </div>
    );
}


export default AlertComponent;