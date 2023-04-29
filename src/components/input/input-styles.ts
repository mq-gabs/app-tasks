import styled from "styled-components";
import { textSize, variable } from "../../layouts";

export const StyledInput = styled.input`
    min-width: 20px;
    padding: 0 1rem;
    height: 40px;
    font-family: ${variable.fontFamily};
    font-size: ${textSize.md};
    border-radius: 5px;
`