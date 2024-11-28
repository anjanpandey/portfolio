import { PropsWithChildren } from "react";



interface Modal extends PropsWithChildren {
    id: string;
    modalTitle: string;
    modalSize: string;
    allowScrolling: boolean;
    isCentered: boolean;
    isDraggable: boolean;
    isLeftModal: boolean;
    isRightModal: boolean;
    onModalClose:  React.MouseEventHandler<HTMLButtonElement> | undefined;
    style: React.CSSProperties;
}

export default Modal;