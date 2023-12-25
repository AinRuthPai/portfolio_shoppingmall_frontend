import styled from 'styled-components';
import { Menu, SortingItemWrapper } from './MainPage.style';

export const ItemContainer = styled(SortingItemWrapper)`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    background-color: rgba(238, 239, 243, 0.5);

    @media screen and (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 80%;
        margin: 1rem auto;
    }
`;

export const MenuLine = styled(Menu)`
    margin-top: 5rem;
`;
