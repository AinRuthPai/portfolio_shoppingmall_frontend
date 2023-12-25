import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MainPageBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    height: calc(100vh - 4rem);

    margin: 5rem auto 0;
    padding-bottom: 16px;
    color: var(--black);
    font-size: 2.5rem;

    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }

    > span:first-child {
        margin-top: 4rem;
        margin-left: 10%;
        animation: fadeInDown 1s;
    }
    > span:nth-child(2) {
        margin-left: 15%;
        animation: fadeInDown 2s;
    }
    > span:nth-child(3) {
        margin-left: 20%;
        animation: fadeInDown 3s;
    }
    > span:last-child {
        font-size: 3rem;
        margin: 4rem auto 0;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        background-position: 10%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: calc(100vh - 4rem);
        margin-top: 4rem;
        background-position: 10%;
        font-size: 2rem;
        background-size: cover;

        > span:first-child {
            margin-top: 3rem;
        }
    }
`;

export const SortingItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    /* animation: fadeInDown 1s; */

    .swiper-wrapper,
    .swiper-slide {
        width: 350px;

        @media screen and (min-width: 768px) {
            width: 650px;
        }

        @media screen and (min-width: 1024px) {
            width: 1350px;
        }
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Menu = styled.div`
    position: relative;
    width: 80%;
    margin: 3rem auto;
    padding: 6px 16px;
    font-size: 24px;
    border-bottom: 2px solid var(--black);
    text-align: left;

    > span:last-child {
        position: absolute;
        right: 0;
    }

    @media screen and (max-width: 700px) {
        font-size: 18px;
    }
`;

export const LinkDefaultStyle = styled(Link)`
    text-decoration: none;
    color: blue;
`;

export const NewItemContainer = styled.div<any>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
    opacity: 0;
    transition: all 1.5s ease-in-out;

    &.opacity {
        opacity: 1;
    }
`;
