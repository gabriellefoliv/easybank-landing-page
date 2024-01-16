import { ArticleAuthor, ArticleCardContainer, ArticleImg, ArticleSummary, ArticleText, ArticleTitle } from "./LatestCardStyle";

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
            <ArticleText>
                <ArticleAuthor>{Author}</ArticleAuthor>
                <ArticleTitle>{Title}</ArticleTitle>
                <ArticleSummary>{Summary}</ArticleSummary>
            </ArticleText>
        </ArticleCardContainer>
    )
}

export default ArticleCard