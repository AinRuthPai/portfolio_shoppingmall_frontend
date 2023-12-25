import styled from 'styled-components';

export const FooterContainer = styled.div`
    margin-top: 20px;
`;

export const FooterBox = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: var(--footer-height);
    margin-bottom: 2rem;
    padding: 0.5rem;
    background-color: var(--black);
    color: var(--white);

    div {
        margin: 0.5rem;
    }

    > div:first-child {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        > h1 {
            margin-right: 0.5rem;
            font-size: 1.35rem;
        }

        > p {
            color: aqua;
        }
    }

    span {
        margin: 4px 6px;
        cursor: pointer;
    }

    > p {
        color: var(--white);
    }
`;

export const ToTopBtn = styled.button`
    position: fixed;
    z-index: 95;
    bottom: 0;
    right: 0;
    margin: 0 1rem 3rem 0;
    border: none;
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(238, 239, 243, 0.9);
    cursor: pointer;

    span {
        font-size: 2.5rem;
    }

    @media screen and (min-width: 700px) {
        display: none;
    }
`;
