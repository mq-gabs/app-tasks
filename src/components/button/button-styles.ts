import styled from "styled-components";
import { StyledText, styleVariables, textSize, variable } from "../../layouts";
import { StyledBox } from "../../layouts";

type TObjKey = {
    [k: string]: string
}

const BGColors : TObjKey = {
    confirm: styleVariables.primaryColor,
    cancel: "rgba(0,0,0,0)" 
}

const BGColorHover : TObjKey = {
    confirm: styleVariables.secondaryColor,
    cancel: styleVariables.baseContrastColor
}

const TextColor: TObjKey = {
    confirm: styleVariables.baseColor,
    cancel: styleVariables.baseContrastColor
}

const TextColorHover: TObjKey = {
    confirm: styleVariables.baseColor,
    cancel: styleVariables.baseColor
}

type TProps = {
    buttonType: string;
    smallText?: boolean;
}

export const StyledButton = styled.button<TProps>`
    margin: .5rem .5rem;
    padding: ${props => props.smallText ? ".5rem 1rem" : "1rem 2rem"};
    background-color: ${props => props.buttonType ? BGColors[props.buttonType] : styleVariables.baseColor};
    border: none;
    border-radius: 5px;
    transition: ${variable.transitionTime};
    
    p {
        color: ${props => props.buttonType ? TextColor[props.buttonType]: styleVariables.baseColor};
    }

    &:hover {
        cursor: pointer;
        background-color: ${props => props.buttonType ? BGColorHover[props.buttonType] : styleVariables.baseColor};

        p {
            color: ${props => props.buttonType ? TextColorHover[props.buttonType]: styleVariables.baseColor};
        }
    }
`

export const StyledButtonContent = styled(StyledBox)`
    gap: .5rem;
`

export const StyledButtonIconSection = styled(StyledBox)<TProps>`
    font-size: 25px;
    color: ${props => props.buttonType ? TextColorHover[props.buttonType]: styleVariables.baseColor}};
`

export const StyledButtonTextSection = styled(StyledBox)`
`

export const StyledButtonText = styled(StyledText)<TProps>`
    font-size: ${props => props.smallText ? textSize.md : textSize.lg};
`