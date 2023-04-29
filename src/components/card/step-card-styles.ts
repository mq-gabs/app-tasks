import styled from "styled-components";
import { StyledBox, StyledText, styleVariables, textSize, variable } from "../../layouts";

type TProps = {
    isDragging: boolean;
    disabled?: boolean;
}

export const StyledCard = styled(StyledBox)<TProps>`
    background-color: ${props => props.disabled ? styleVariables.baseContrastColor : styleVariables.secondaryColor};
    padding: 1rem 1rem;
    border-radius: 5px;
    width: 180px;
    height: 180px;
    user-select: none;
    ${props => props.disabled ? `
        border: 1px dashed ${styleVariables.textPrimaryColor};
    ` : `
        border: 2px solid ${styleVariables.secondaryColor};
    `}
    flex-direction: column;
    
    ${props => props.isDragging && (
        `
        visibility: hidden;
        `
    )}
        
    ${props => props.disabled===false && `
        &:hover {
            cursor: pointer;
            border: 2px solid black;
            transform: scale(1.05);
        }
        &:active {
            cursor: move;
        }
    `}



`

export const StyledTitle = styled(StyledText)`
    font-weight: bold;
    font-size: ${textSize.xxlg}
`
export const StyledDescription = styled(StyledText)`
    font-size: ${textSize.sm};
`
export const StyledDate = styled(StyledText)`
    font-size: ${textSize.tn};
`