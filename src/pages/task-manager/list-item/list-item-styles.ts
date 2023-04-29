import styled from "styled-components";
import { StyledText, styleVariables } from "../../../layouts";

type TStatusProps = {
  status: string;
}

export const StyledListItem = styled.div<{active?: boolean, primaryColor?: boolean}>`
  padding: .7rem .7rem;
  border-bottom: .5px solid ${styleVariables.baseContrastColor};
  cursor: pointer;
  position: relative;
  
  &:hover {
    background-color:  ${props => props.primaryColor ? styleVariables.primaryColor : styleVariables.secondaryColor};

    p {
      color: white;
    }
  }

  ${props => props.active && (
    `
    p {
      color: white;
    }
    
    background-color: ${props.primaryColor ? styleVariables.secondaryColor : styleVariables.primaryColor};`
    
  )}

  &:nth-child(1) {
    border-radius: 5px 5px 0 0;
  }

  &:nth-last-child {
    border-radius: 0 0 5px 5px;
  }
`
  
export const StyledListText = styled(StyledText)`
  color: ${styleVariables.primaryColor};
  overflow: hidden;
  text-overflow: ellipsis;
  display: --webkit-box;
  line-clamp: 2;
  --webkit-line-clamp: 2;
`

export const StyledStatusText = styled(StyledText)<TStatusProps>`
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  padding: 2px 5px;
  width: fit-content;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 3px;
  ${props => props.status === 'Em andamento' && `background-color: blue`};
  ${props => props.status === 'Aberto' && `background-color: red`};
  ${props => props.status === 'Em análise' && `background-color: purple`};
  ${props => props.status === 'Concluído' && `background-color: green`};
`

export const StyledBallContainer = styled.div`
  border: 1px solid red;
  height: 100%;
  width: 90%;
  top: 0;
  left: 0;
  position: absolute;
`