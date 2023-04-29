import styled from "styled-components";
import { StyledText, styleVariables, textSize } from "../../layouts";

export const StyledTaskManager = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledTaskListBox = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${styleVariables.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  z-index: 1;
  left: 0;

  animation-name: show-up;
  animation-duration: .2s;

  @media(max-width: 800px) {
    height: calc(100% - 80px);
  }

  @keyframes show-up {
    0%{left: -300px}
    100%{left: 0px}
  }
`
export const StyledTaskListTopText = styled(StyledText)`
  color: ${styleVariables.primaryColor};
  text-align: center;
  font-size: ${textSize.xxlg};
  font-weight: bold;
`

export const StyledTaskList = styled.div`
  background-color: white;
  width: 280px;
  height: 70%;
  border-radius: 5px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`

export const StyledStepListBox = styled.div<{open: boolean}>`
  width: 300px;
  height: 100%;
  background-color: ${styleVariables.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  z-index: 0;
  left: 0;

  ${props => props.open && `left: 300px;`}
  transition: .2s;
  animation-name: show-behind;
  animation-duration: .2s;

  @media(max-width: 800px) {
    height: calc(100% - 80px);
  }

  @keyframes show-behind {
    0%{left: -300px}
    100%{left: 0px}
  }


  @keyframse show-up {
    0%{left:0px}
    100%{left: 600px}
  }
` 

export const StyledStepList = styled.div`
  background-color: white;
  width: 280px;
  height: 70%;
  border-radius: 5px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`

export const StyledStepListTopText = styled(StyledText)`
  color: ${styleVariables.secondaryColor};
  text-align: center;
  font-size: ${textSize.xxlg};
  font-weight: bold;
`