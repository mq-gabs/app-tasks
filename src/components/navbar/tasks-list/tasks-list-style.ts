import styled from "styled-components";
import { StyledBox, StyledText, styleVariables, textSize } from "../../../layouts";

export const StyledTasksList = styled(StyledBox)`
    width: 100%;
    flex-direction: column;
    padding: 0 1rem;
`

export const StyledUl = styled.ul`
    padding: .5rem .5rem;
    margin: 0;
    width: 100%;
    gap: .5rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 300px;
    background-color: ${styleVariables.baseColor};
    border-radius: 5px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb { 
        background: ${styleVariables.secondaryColor};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${styleVariables.baseContrastColor};
        border-radius: 5px;
    }
`

export const StyledLi = styled.li<{selected: boolean}>`
    list-style: none;
    padding: .5rem 0;
    background-color: ${props => props.selected ? `
        ${styleVariables.secondaryColor}
    `: `
        ${styleVariables.baseContrastColor}
    `};
    border-radius: 5px;

    :hover {
        cursor: pointer;
    }
`

export const StyledTaskTitle = styled(StyledText)`
    font-size: ${textSize.lg};
`

export const StyledNewTaskSection = styled(StyledBox)`
    flex-direction: column;
`

export const StyledNewTaskButtonSection = styled(StyledBox)`
    
`