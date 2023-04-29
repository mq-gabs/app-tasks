import styled from "styled-components"
import { StyledBox, StyledText } from "../../../../layouts"
import { styleVariables, textSize } from "../../../../layouts"

type TProps = {
    isDragging: boolean;
}

type TStyledColumnBody = {
    isLast: boolean;
}

export const StyledBoard = styled(StyledBox)`
    flex-direction: column;
    border-radius: 5px;
    background-color: ${styleVariables.primaryColor};
`

export const StyledBoardOptions = styled(StyledBox)`
    width: 100%;
    justify-content: flex-start;
`

export const StyledColumnHeader = styled(StyledBox)`
    height: 80px;
    width: 100%;
    border-top: 1px solid ${styleVariables.textPrimaryColor};
    border-bottom: 1px solid ${styleVariables.textPrimaryColor};
`
export const StyledTextHeader = styled(StyledText)`
    font-size: ${textSize.xlg};
    font-weight: bold;
`

export const StyledColumnsWrap = styled(StyledBox)`
    align-items: stretch;
`

export const StyledColumn = styled(StyledBox)`
    flex-direction: column;
    align-items: stretch;
`

export const StyledColumnBody = styled(StyledBox)<TStyledColumnBody>`
    ${props => !props.isLast && `border-right: 1px dashed ${styleVariables.textPrimaryColor};`}
    height: 100%;
    align-items: stretch;
    overflow-y: auto;
    max-height: 800px;
`
    
export const StyledColumnBodyInner = styled(StyledBox)<TProps>`
    flex-wrap: wrap;
    width: 216px;
    min-height: 216px;
    margin: 1rem;
    gap: .5rem;
    align-content: start;

    ${props => props.isDragging && `border: 1px dashed ${styleVariables.textPrimaryColor}`};
`
export const StyledWarning = styled(StyledText)`
    font-size: ${textSize.xxlg};
    font-weight: bold;
    color: ${styleVariables.baseColor};
    margin: 2rem 2rem;
`