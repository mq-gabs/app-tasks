import styled from "styled-components";

export const styleVariables = {
    primaryColor: "#304d63",
    secondaryColor: "#8fb9aa",
    baseColor: '#fff',
    baseContrastColor: '#969696',
    textPrimaryColor: "#969696",
    textSecondaryColor: "#fff"
}

export const textSize = {
    tn: '10px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xlg: '22px',
    xxlg: '28px'
}

export const variable = {
    transitionTime: ".25s",
    fontFamily: "Raleway, sans-serif"
}


export const StyledApp = styled.div`
    width: calc(100% - 100px);
    height: 100vh;
    margin: 0;
    padding: 0;
    top: 0;
    left: 100px;
    position: absolute;
    z-index: 1;
    background-color: ${styleVariables.baseColor};

    @media(max-width: 800px) {
        width: 100%;
        height: calc(100vh - 80px);
        left: 0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`

export const StyledBox = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const StyledText = styled.p`
    font-family: ${variable.fontFamily};
    color: ${styleVariables.textPrimaryColor};
    margin: 0;
    padding: 0;
    user-select: none;
`

export const StyledSpan = styled.span`
    font-family: ${variable.fontFamily};
    color: ${styleVariables.primaryColor};
    margin: 0;
    padding: 0;
    user-select: none;
    font-weight: bold;
`