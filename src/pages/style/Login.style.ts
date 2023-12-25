import styled from 'styled-components';

// export const AccountContainer = styled.div`
//     margin-top: var(--nav-height);
//     padding: 20px;
//     /* border: 2px solid blue; */
//     box-shadow: 0 100px 100px rgb(0 0 0 / 10%);

//     > h2 {
//         letter-spacing: 2px;
//         margin: 20px 0;
//     }

//     > footer {
//         margin: 20px 0;
//     }
// `;

// export const AccountForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border: 2px solid yellow;

//     > input {
//         font-size: 16px;
//     }
// `;

export const AccountContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    min-height: calc(100vh - 9rem);
    box-shadow: 0 50px 50px 50px rgb(0 0 0 / 5%);
    border-radius: 1.25rem;

    @media (min-width: 768px) {
        width: 70%;
    }
`;

export const AccountForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 18px 10px;

    > input {
        width: 70%;
        margin: 1rem;
        padding: 1rem;
        padding-left: 2rem;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        outline: none;
        &:focus {
            border-bottom: 2px solid var(--black);
        }
    }
    > button {
        margin: 1rem;
        padding: 8px 16px;
        background-color: var(--black);
        color: #fff;
        font-size: 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    > div {
        margin: 1rem 0;
    }
`;
