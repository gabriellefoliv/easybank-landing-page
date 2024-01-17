import styled from "styled-components";

export const ArticleCardContainer = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    cursor: pointer;

    &:hover {
        box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.7);
        transition: 0.3s;
    }
    
`;

export const ArticleImg = styled.img`
    width: 100%;
    min-height: 175px;
    max-height: 250px;
    height: 40vw;
    border-radius: 10px 10px 0 0;
`;

export const ArticleAuthor = styled.p`
    font-size: 14px;
    padding: 5px 0px;
    color: gray;
`;

export const ArticleTitle = styled.h3`
    padding: 5px 0;

    &:hover {
        color: green;
    }
`;

export const ArticleSummary = styled.p`
    font-size: 18px;
`;

export const ArticleText = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;