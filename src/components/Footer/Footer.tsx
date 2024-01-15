import { Copyright, FooterContainer, LeftSide, LogoEasy, PartOne } from "./FooterStyle"

import LogoEasyPic from '../../images/logo.svg'

function Footer() {
    return(
        <FooterContainer>
            <LeftSide>
                <PartOne>
                    <LogoEasy src={LogoEasyPic} alt=""/>
                    <Copyright>Copyright - Footer</Copyright>
                </PartOne>
            </LeftSide>

        </FooterContainer>
    )
}

export default Footer