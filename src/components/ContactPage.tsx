import { useState } from "react";

// import components 
import TextboxComponent from "./UI/TextboxComponent";
import TextareaComponent from "./UI/TextareaComponent";
import ButtonComponent from "./UI/ButtonComponent";

// import model
import Input from "../models/input";
import Textarea from "../models/textarea";
import Button from "../models/button";
import Modal from "../models/modal";
import ModalComponent from "./UI/ModalComponent";
import Alert from "../models/alert";
import AlertComponent from "./UI/AlertComponent";
import Icon from "../models/icon";

const ContactPage: React.FC = () => {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [subjectVal, setSubjectVal] = useState("");
    const [messageVal, setMessageVal] = useState("");


    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();

        // when submit button is clicked, ensure the success is set back to flase
        setSuccess(false);

        if(subjectVal.trim().length === 0 || messageVal.trim().length === 0) {
            setError(true);
            return;
        }

        // no error and success
        setError(false);
        setSuccess(true);
        window.open('mailto:anjanpandey81@yahoo.com?subject='+subjectVal+'&body='+messageVal);
        // reset state to clear fields to prevent spam
        setSubjectVal("");
        setMessageVal("");
    };

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectVal(event.currentTarget.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageVal(event.currentTarget.value);
    };

    let errorModal = null;

    if(error) {
        // remove this modal from the page
        // set the state 
        const removeErrorModal = () => {
            setError(false);
        };

        // define error 
        const errorVal: Modal = {id: "message-error", modalTitle: "Oops.", modalSize: "modal-sm", allowScrolling: false, isCentered: false, isDraggable: false, isLeftModal: false, isRightModal: false, onModalClose: removeErrorModal, style: {display:"block"}};
        const closeBtn : Button = {id: "close-btn", name:"Close", onClick:removeErrorModal, classes:"btn btn-danger", btnIcon:undefined, style:{}};
         errorModal = <ModalComponent id={errorVal.id} 
                                    modalTitle={errorVal.modalTitle} 
                                    modalSize={errorVal.modalSize} 
                                    allowScrolling={errorVal.allowScrolling}
                                    isCentered={errorVal.isCentered}
                                    isDraggable={errorVal.isDraggable}
                                    isLeftModal={errorVal.isLeftModal}
                                    isRightModal={errorVal.isRightModal}
                                    onModalClose={errorVal.onModalClose}
                                    style={errorVal.style}>
                            <p>Subject and Message are required.</p>
                            <ButtonComponent id={closeBtn.id} name={closeBtn.name} onClick={closeBtn.onClick} classes={closeBtn.classes} btnIcon={closeBtn.btnIcon} style={closeBtn.style} />
                        </ModalComponent>
    }

    let successAlert = null;

    if(success) {
        const onDismissAlert = () => {
            setSuccess(false);
        };

        const successVal : Alert = {id: "alert-success-message", innerText: "Please send message using your device's default mail app. Thank you!", classes: "alert-success", onDismiss: onDismissAlert, style:{}}
        successAlert = <AlertComponent id={successVal.id} innerText={successVal.innerText} classes={successVal.classes} onDismiss={successVal.onDismiss} style={successVal.style} />
    }

    // define textbox
    const textBox : Input = {id: "txt-subject",label: "Subject", inputType: "text", maxLength: 25, minLength: 0, value: subjectVal, placeholder: "Subject", onChange: handleSubjectChange}; 
    // define textarea
    const textArea : Textarea = {id: "txt-message", label: "Message", maxLength: 255, minLength: 0, value: messageVal, placeholder: "Message", onChange: handleMessageChange, style:{height:"130px"}}; 
    // icon 
    const sendIcon: Icon = {id: "icn-send", title: "Send", styleClasses: "fa-solid fa-paper-plane me-1", href: ""};
    // define button
    const submitButton : Button = {id: "btn-send-message", name: "Send", onClick: undefined, classes: "btn btn-success m-1", btnIcon: sendIcon, style: {}};
    
    return (
        <div>      
            { error ? errorModal : ""}
            { success ? successAlert : ""}
            <form onSubmit={submitHandler}>
                <TextboxComponent id={textBox.id} 
                                label={textBox.label}
                                inputType={textBox.inputType} 
                                maxLength={textBox.maxLength}
                                minLength={textBox.minLength}
                                value={textBox.value}
                                placeholder={textBox.placeholder}
                                onChange={textBox.onChange}
                                />
                <TextareaComponent id={textArea.id} 
                                    label={textArea.label}
                                    maxLength={textArea.maxLength}
                                    minLength={textArea.minLength}
                                    value={textArea.value}
                                    placeholder={textArea.placeholder}
                                    onChange={textArea.onChange}
                                    style={textArea.style}
                                />
                <ButtonComponent id={submitButton.id}
                                name={submitButton.name}
                                onClick={submitButton.onClick}
                                classes={submitButton.classes}
                                btnIcon={submitButton.btnIcon}
                                style={submitButton.style} />
                                
            </form>
        </div>  
     );
}


export default ContactPage;