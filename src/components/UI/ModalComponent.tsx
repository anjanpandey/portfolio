import {useContext} from 'react';
import Modal from "../../models/modal";
import Button from "../../models/button";
import ButtonComponent from "./ButtonComponent";

import {ThemeContext} from "../../store/theme-context";
import Backdrop from './Backdrop';
import { Color } from '../../store/constants';

const ModalComponent: React.FC<Modal> = (props) => {

    const {isDarkTheme, primaryBackground, primaryColor} = useContext(ThemeContext);

    const modalSize = props.modalSize.trim().length > 0 ? props.modalSize:"modal-sm"; 
    // define close button for the modal
    const closeBtn: Button = {id: `btn-close-${props.id}`, name: "", classes: "btn-close", onClick: props.onModalClose,  btnIcon: undefined, style: {backgroundColor: isDarkTheme ? Color.DarkModePrimaryColor: ""}};

    return (
        <div>
            <Backdrop />
            <div id={props.id} className="modal fade show" style={props.style}>
            <div className={`modal-dialog ${props.isCentered ? "modal-dialog-centered":""} ${modalSize} ${props.allowScrolling ? "modal-dialog-scrollable": ""}`}>
                <div className="modal-content" style={{backgroundColor: primaryBackground, color: primaryColor}}>
                    <div className="modal-header">
                        <h5>{props.modalTitle}</h5>
                        <ButtonComponent id={closeBtn.id} name={closeBtn.name} classes={closeBtn.classes} onClick={closeBtn.onClick} btnIcon={closeBtn.btnIcon} style={closeBtn.style} />
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}


export default ModalComponent;