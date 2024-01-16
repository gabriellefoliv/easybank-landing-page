import { HeroContainer, HeroImg, HeroBg, HeroP, HeroTitle, TextContainer, HeroButton } from "./HeroStyle"
import Mockups from '../../../../images/image-mockups.png'

function Hero() {
    return(
        <HeroContainer>
            <HeroBg>
                <HeroImg src={Mockups}/>
            </HeroBg>
            <TextContainer>
                <HeroTitle>Next generation digital banking</HeroTitle>
                <HeroP>
                    Take your financial life online. Your Easybank account
                    will be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </HeroP>
                <HeroButton>Request Invite</HeroButton>
            </TextContainer>
        </HeroContainer>
    )
}


export default Hero