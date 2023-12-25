import styled from 'styled-components';

export const CartContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 14rem);
    margin: 4rem auto 0;
    background-color: rgba(238, 239, 243, 0.5);
`;

export const CartCheckWrapper = styled.div`
    width: 100%;
    height: 4rem;
    margin: 1rem auto;
    padding: 0.7rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;

    span:last-child {
        position: absolute;
        right: 0;
        margin-right: 1rem;
    }
`;

export const CartPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    padding: 0 2rem;
    background-color: white;

    > span {
        font-size: 14px;
    }

    > p {
        font-size: 18px;
        font-weight: bold;
    }
`;

export const BtnTamplate = styled.button`
    margin: 5%;
    padding: 1rem 2rem;
    background-color: rgb(117, 50, 249);
    color: var(--white);
    border: none;
    cursor: pointer;
    border-radius: 6px;

    > span:first-child {
        font-size: 1rem;
        font-weight: 600;
        margin-right: 1.5rem;
        letter-spacing: 1px;
    }
`;

export const CartItemWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    background-color: white;
    padding: 0.7rem;

    > div:first-child {
        display: flex;
    }

    > div:nth-child(2),
    div:nth-child(3) {
        display: flex;
        flex-direction: column;
    }

    > div:nth-child(3) {
        align-items: flex-end;
        position: absolute;
        right: 0;
        margin-right: 1rem;
    }
`;

export const CountWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
`;

export const CountBtn = styled.button`
    margin: 0 0.5rem;
    padding: 2px 4px;
    background-color: var(--gray);
    border: none;
    cursor: pointer;

    span {
        font-size: 1.2rem;
    }
`;

export const CartImg = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
`;

export const DeleteIcon = styled.button`
    padding: 0;
    margin-bottom: 1rem;
    background-color: inherit;
    font-size: 20px;
    border: none;
    cursor: pointer;
`;
