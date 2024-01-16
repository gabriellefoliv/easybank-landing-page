import styled from "styled-components";

export const LatestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 6%;
`;

export const LatestTitle = styled.h2`
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 48px;

`;

export const LatestCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5vw;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 3vw;
    }
`;
