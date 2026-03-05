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
    onModalResize?:  React.MouseEventHandler<HTMLButtonElement> | undefined;
    onModalClose?:  React.MouseEventHandler<HTMLButtonElement> | undefined;
    style?: React.CSSProperties | undefined;
}

export default Modal;