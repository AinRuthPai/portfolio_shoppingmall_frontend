import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
    position: fixed;
    z-index: 97;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: var(--nav-height);
    padding: 0 1rem;
    background-color: white;
    box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
    animation: fadein 0.5s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        position: absolute;
        font-size: 1.3rem;
        cursor: pointer;

        @media screen and (min-width: 700px) {
            position: static;
            display: block;
            font-size: 1.5rem;
        }
    }
`;

export const NavOverlay = styled.div<any>`
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 21, 21, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;

    ${(props: any) =>
        props.open &&
        css`
            visibility: visible;
            opacity: 1;
        `}

    @media screen and (min-width: 700px) {
        display: none;
    }
`;

export const NavMenu = styled.div<any>`
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    translate: 100% 0;
    width: 14rem;
    height: 100%;
    padding: 1.25rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    visibility: hidden;
    transition: 0.3s;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin: 1rem auto;

        span {
            font-size: 2rem;
        }
    }

    ${(props: any) =>
        props.open &&
        css`
            translate: 0 0;
            visibility: visible;
        `}

    @media screen and (min-width: 700px) {
        position: relative;
        top: 0;
        right: 0;
        translate: 0 0;
        width: auto;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        visibility: visible;
    }
`;

export const NavMobile = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 700px) {
        display: none;
    }

    span {
        cursor: pointer;
    }
`;

export const NavLink = styled(Link)`
    margin-top: 1rem;
    margin-left: 1rem;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;

    @media screen and (min-width: 700px) {
        margin-top: 0;
    }

    &:hover {
        color: gray;
    }

    span {
        font-size: 2rem;
        margin-right: 1rem;
    }

    &.loginButton {
        padding: 6px 9px;
        color: white;
        background-color: #3d3d3d;
        border-radius: 6px;
    }
`;
