import { ArticleAuthor, ArticleCardContainer, ArticleImg, ArticleSummary, ArticleTitle } from "./LatestCardStyle";

interface ArticleCardProps {
    ArticleIcon: any,
    Author: string,
    Title: string,
    Summary: string
}

function ArticleCard({ArticleIcon, Author, Title, Summary}:ArticleCardProps) {
    return (
        <ArticleCardContainer>
            <ArticleImg src={ArticleIcon}/>
            <ArticleAuthor>{Author}</ArticleAuthor>
            <ArticleTitle>{Title}</ArticleTitle>
            <ArticleSummary>{Summary}</ArticleSummary>
        </ArticleCardContainer>
    )
}

export default ArticleCard