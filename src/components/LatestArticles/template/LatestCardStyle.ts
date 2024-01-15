import styled from "styled-components";

export const ArticleCardContainer = styled.div`
    width: 300px;
    height: 400px;
    /* box-shadow:; */
    border-radius: 10px;
    
`;

export const ArticleImg = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
`;

export const ArticleAuthor = styled.p`
    font-size: 15px;
    padding: 5px 0px;
    color: gray;
`;

export const ArticleTitle = styled.h3`
    padding: 5px 0;
`;

export const ArticleSummary = styled.p`
    font-size: 18px;
`;