import { HeroBackground, HeroContainer, HeroImg, HeroImgContainer, HeroP, HeroTitle, TextContainer } from "./HeroStyle"

import HeroImgPic from '../../../../images/image-mockups.png'
import HeroBack from '../../../../images/bg-intro-desktop.svg'
import { RequestInvite2 } from "./HeroStyle"

function Hero() {
    return(
        <HeroContainer>
            <TextContainer>
                <HeroTitle>Next generation digital banking</HeroTitle>
                <HeroP>
                    Take your financial life online. Your Easybank account
                    will be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </HeroP>
                <RequestInvite2>Request Invite</RequestInvite2>
            </TextContainer>
            <HeroImgContainer>
                <HeroBackground src={HeroBack}/>
                <HeroImg src={HeroImgPic}/>
            </HeroImgContainer>
        </HeroContainer>
    )
}


export default Hero