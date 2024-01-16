import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 40px 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    background-color: hsl(233, 26%, 24%);

    @media (min-width: 1024px) {
        justify-content: space-between;
        flex-direction: row;
        gap: 150px;
    }
`;

export const FirstPart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        gap: 10vw;
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1024px) {
        justify-content: center;
    }
`;

export const LogoImg = styled.img`
  
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (min-width: 1024px) {
        align-items: start;
        min-width: 120px;
    }

    &.col {
        padding: 0;
        flex-direction: column;
    }

    a {
        color: #fff;
    }

    .socialMediaImg {
        svg path {
            transition: fill 0.5s ease-in-out;
        }

        &:hover svg path {
        fill: var(--LimeGreen);
        }
    }
`

export const Item = styled.a`
  
`;

export const ListLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const Link = styled.a`
    transition: 0.5s ease-in-out;
    &:hover {
        color: hsl(136, 65%, 51%);
    }
`;

export const FooterParagraph = styled.p`
    font-size: 0.825rem;
    color: hsl(233, 8%, 62%);
    line-height: 1.5rem;
    text-align: center;
`;
