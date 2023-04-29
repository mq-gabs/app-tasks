import styled from "styled-components";
import { StyledText, StyledBox, styleVariables, variable, textSize } from "../../layouts";


export const StyledModalBackground = styled(StyledBox)`
    position: fixed;
    background-color: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`

export const StyledModalWindow = styled(StyledBox)`
    position: fixed;
    top: 0;
    left: 0;
    width: 800px;
    height: 800px;
    flex-direction: column;
    z-index: 3;
    background-color: rgba(0,0,0,0);
`

export const StyledModalHeader = styled(StyledBox)`
    width: 100%;
    height: 80px;
    background-color: ${styleVariables.baseColor};
    justify-content: space-between;
    border-radius: 5px 5px 0 0;
`

export const StyledModalBody = styled(StyledBox)`
    height: 100%;
    width: 100%;
    background-color: ${styleVariables.baseColor};
    flex-direction: column;
    overflow-y: auto;
    display: block;
`

export const StyledModalFooter = styled(StyledBox)`
    width: 100%;
    height: 80px;
    border-radius: 0 0 5px 5px;
    background-color: ${styleVariables.baseColor};
    justify-content: space-around;
`

export const StyledModalTitle = styled(StyledText)`
    text-align: justify;
    width: 100%;
    padding: 0 1rem;
    font-weight: bold;
    font-size: ${textSize.xlg};
`