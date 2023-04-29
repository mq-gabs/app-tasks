import styled from "styled-components";
import { StyledText, styleVariables } from "../../layouts";

export const StyledTopBox = styled.div`
  width: 100%;
  background-color: ${styleVariables.primaryColor};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p, span {
    font-size: 30px;
    font-weight: bold;
    color: ${styleVariables.textSecondaryColor}
  }

  span {
    color: ${styleVariables.secondaryColor};
  }
`

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  margin: auto;
`

export const StyledSection = styled.section`
  text-align: center;
  width: 800px;
  p {
    margin-bottom: 80px;
    font-size: 25px;
  }
`

export const StyledMainText = styled(StyledText)`
  font-size: 50px !important;
  font-weight: bold;
`
export const StyledImage = styled.img`

`