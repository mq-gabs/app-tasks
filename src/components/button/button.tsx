import { MouseEventHandler, ReactNode } from "react";
import { StyledButton, StyledButtonContent, StyledButtonIconSection, StyledButtonText, StyledButtonTextSection } from "./button-styles";

type TButton = {
    text?: string;
    icon?: ReactNode;
    onClick: MouseEventHandler;
    buttonType?: "warning" | "confirm" | "info" | "cancel" | "transparent";
    smallText?: boolean;
    noPadding?: boolean;
}

export const Button = ({
    text,
    icon,
    onClick,
    buttonType='info',
    smallText=false,
    noPadding=false
}: TButton) => {
    return(
        <StyledButton onClick={onClick} buttonType={buttonType} smallText={smallText} >
            <StyledButtonContent>
                {
                    icon && (
                        <StyledButtonIconSection
                            buttonType={buttonType}
                        >
                            {icon}
                        </StyledButtonIconSection>
                    )
                }
                {
                    text && (
                        <StyledButtonTextSection>
                            <StyledButtonText buttonType={buttonType} smallText={smallText}  >
                                {text}
                            </StyledButtonText>
                        </StyledButtonTextSection>
                    )
                }
            </StyledButtonContent>
        </StyledButton>
    );
}