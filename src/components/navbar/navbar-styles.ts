import { Link } from "react-router-dom";
import styled from "styled-components";
import {  styleVariables } from "../../layouts";

export const StyledNavbar = styled.nav`
    background: ${styleVariables.primaryColor};
    width: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;

    @media(max-width: 800px) {
        width: 100%;
        height: 80px;
        bottom: 0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem
    }
`

export const StyledTopSection = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;

    @media(max-width: 800px) {
        display: none;
    }
`

export const StyledMidSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 800px;
   width: 100%;

   @media(max-width: 800px) {
    height: fit-content;
    width: fit-content;
   }
`

export const StyledBottomSection = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledImage = styled.img`
    width: 50px;
`

export const StyledUl = styled.ul`
    padding: 0;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media(max-width: 800px) {
        flex-direction: row;
        gap: 1rem;
    }
`

export const StyledLi = styled.li`
    list-style: none;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: ${styleVariables.textSecondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    padding: .5rem .5rem;
    border-radius: 5px;
    cursor: pointer;

    p {
        color: ${styleVariables.textSecondaryColor};
    }

    &:hover {
        background-color: ${styleVariables.secondaryColor};
    }

    &:has(img) {
        background-color: rgba(0,0,0,0) !important;
    }
`