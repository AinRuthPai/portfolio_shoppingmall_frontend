import styled from 'styled-components';

export const ItemCardContainer = styled.div`
    position: relative;
    margin: 1rem auto;
    padding: 0.7rem 0;
    transition: 0.1s ease;
    border-radius: 10px;

    &:hover {
        transform: translateY(-3px);
    }

    span {
        position: absolute;
        bottom: 5rem;
        right: 0;
        padding: 0.5rem;
        border-radius: 8px;
        background-color: var(--gray);
    }

    h5,
    p,
    span {
        cursor: pointer;
        margin-bottom: 0.3rem;
    }

    h5:nth-child(2) {
        color: rgba(0, 0, 0, 0.6);
    }

    p {
        font-size: 15px;
    }

    @media screen and (min-width: 700px) {
        width: 80%;
    }
`;

export const ItemImg = styled.img`
    width: 10rem;
    height: 13rem;
    object-fit: contain;
    cursor: pointer;

    @media screen and (min-width: 700px) {
        width: 11rem;
        height: 14rem;
    }
`;
