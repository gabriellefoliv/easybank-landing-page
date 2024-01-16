import styled from "styled-components";

export const WhyContainer = styled.div`
    background-color:hsl(220, 16%, 96%); 
    padding: 70px 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WhyText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 50px;

    @media (min-width: 1024px) {
        max-width: 450px;
    }
`;

export const WhyTitle = styled.h1`
    font-size: 32px;
    text-align: center;
    font-weight: 500;
`;

export const WhySubs = styled.p`
    font-size: 0.825rem;
    line-height: 1.5rem;
    color: hsl(233, 8%, 62%);
`;

export const WhyCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
