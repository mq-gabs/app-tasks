import { StyledModalBackground, StyledModalTitle, StyledModalWindow, StyledModalHeader, StyledModalBody, StyledModalFooter } from "./modal-styles";
import { MouseEventHandler, ReactNode } from "react";
import { Button } from "../button";
import { IClose } from "../../utils/icons";

type TModal = {
    children?: ReactNode;
    open: boolean;
    onClose: MouseEventHandler;
    title: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: MouseEventHandler | false;
    onCancel?: MouseEventHandler | false;
    hideButtons?: boolean;
} 

export const Modal = ({
    children,
    open,
    onClose, 
    title,
    confirmText="Sim",
    cancelText="Não",
    onConfirm=()=>{},
    onCancel=()=>{},
    hideButtons=false
}: TModal) => {


    return(
        <>
        {
            open && 
                <>
                <StyledModalBackground onClick={onClose} />
                    <StyledModalWindow >
                        <StyledModalHeader>
                            <StyledModalTitle>
                                {title}
                            </StyledModalTitle>
                            <Button 
                                icon={<IClose />}
                                buttonType="cancel"  
                                onClick={onClose}
                            />
                        </StyledModalHeader>
        
                        <StyledModalBody>
                            {children}
                        </StyledModalBody>

                        <line></line>

                        <StyledModalFooter>
                        {
                            !hideButtons && 
                            <>
                                <Button text={cancelText} buttonType="cancel" onClick={onCancel ? onCancel : () => {}} />
                                <Button text={confirmText} buttonType="confirm" onClick={onConfirm ? onConfirm : () => {}} />
                            </>
                        }
                        </StyledModalFooter>
                    </StyledModalWindow>
                </>
        }
        </>
    );
}