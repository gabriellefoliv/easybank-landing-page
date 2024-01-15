import { LatestCardContainer, LatestContainer, LatestTitle } from "./LatestArticlesStyle"
import ArticleCard from "./template/LatestCard"

import confetti from '../../images/image-confetti.jpg'
import currency from '../../images/image-currency.jpg'
import restaurant from '../../images/image-restaurant.jpg'
import plane from '../../images/image-plane.jpg'

function LatestArticles() {
    return(
        <LatestContainer>
            <LatestTitle>Latest Articles</LatestTitle>
            <LatestCardContainer>
                <ArticleCard 
                    ArticleIcon={currency} 
                    Author="By Claire Robinson" 
                    Title="Receive money in any currency with no fees"
                    Summary="The world is getting smaller and we're becoming 
                    more mobile. So why should you be forced to only receive 
                    money in a single..."
                />
                <ArticleCard 
                    ArticleIcon={restaurant} 
                    Author="By Wilson Hutton" 
                    Title="Treat yourself without worrying about money" 
                    Summary="Our simple budgeting feature allows you to separate 
                    out your spending and set realistic limits each month. That means you..."
                />
                <ArticleCard 
                    ArticleIcon={plane} 
                    Author="By Daredevil" 
                    Title="Take your Easybank card wherever you go" 
                    Summary="We want you to enjoy your travels. This is why 
                    we don't charge any fees on purchases while you're abroad. 
                    We'll even show you..."
                />
                <ArticleCard 
                    ArticleIcon={confetti} 
                    Author="by Matthew Murdock" 
                    Title="Our invite-only Beta accounts are now live!"
                    Summary="After a lot of hard work by the whole team, 
                    we're excited to launch our closed beta. It's easy to 
                    request an invite through the site..."
                />
            </LatestCardContainer>
        </LatestContainer>
    )
}

export default LatestArticles