import styled from "styled-components";
import { StyledBox, StyledText, styleVariables, variable } from "../../layouts";

type TProps = {
    state: boolean;
}

export const StyledDropdown = styled(StyledBox)`
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid black;
    width: fit-content;
`

export const StyledDropdownBar = styled(StyledBox)<TProps>`
    width: 100%;
    background-color: ${styleVariables.baseContrastColor};
    justify-content: flex-end;
    ${
        props => props.state ? `
            border-radius: 5px 5px 0 0;
        ` : `
            border-radius: 5px; 
        `
    }
    justify-content: space-between;
`

export const StyledTextBar = styled(StyledText)`
    margin: 0 1rem;
`

export const StyledDropdownContent = styled(StyledBox)<TProps>`
    width: 100%;
    height: 100%;
    background-color: ${styleVariables.baseColor};
    height: ${props => props.state ? "fit-content" : "0"};
    // transition: linear ${variable.transitionTime};
    border-radius: 0 0 5px 5px;

    ${props => !props.state && `visibility: hidden;`}
`