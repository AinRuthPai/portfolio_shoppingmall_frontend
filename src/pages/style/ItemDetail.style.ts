import styled from 'styled-components';
import { Menu } from './MainPage.style';
import { BtnTamplate } from './Cart.style';

export const DetailContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
`;

export const DetailItemBox = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 60%;
        margin: 0 auto;
    }

    > div {
        margin-top: 1rem;
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 2rem;
    }

    div:nth-child(3) {
        display: flex;
        justify-content: flex-end;
        margin: 1rem 2rem 0 0;
        font-size: 18px;

        span {
            padding: 0.5rem;
            font-size: 14px;
        }

        button {
            border: none;
            padding: 0.3rem 1rem;
            font-size: 18px;
        }
    }

    h3 {
        font-size: 16px;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.7rem 0;
        color: rgba(0, 0, 0, 0.5);
    }

    span {
        font-weight: 800;
    }
`;

export const DetailImg = styled.img`
    width: 90%;
    margin: 2rem auto 0;
    object-fit: contain;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const MobileDetailFooter = styled.nav`
    position: fixed;
    z-index: 95;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px -2px 2px 1px rgba(0, 0, 0, 0.5);

    span {
        padding-left: 2rem;
    }
`;

export const ItemDetailContent = styled.div`
    margin: 2rem auto 0;
    text-align: center;
    min-height: 100vh;

    img {
        width: 80%;
        margin: 0 auto;
        margin-top: 1.5rem;
    }
`;

export const CartBtn = styled(BtnTamplate)`
    width: 50%;
    padding: 1.2rem 1.7rem;
`;

export const MenuLine = styled(Menu)`
    margin: 1rem auto 0;
`;

export const ItemDetailImg = styled.img`
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 50%;
    }
`;
