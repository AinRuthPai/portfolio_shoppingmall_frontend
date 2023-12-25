import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    background-color: white;

    > div:last-child {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin-left: 0.5rem;

        h5 {
            margin-bottom: 1rem;
        }

        h5:first-child {
            color: rgba(0, 0, 0, 0.6);
        }

        p {
            font-size: 15px;
        }
    }
`;
