import { NavBarContainer, NavContainer, NavLogo, NavLogoContainer, NavPages, RequestInvite } from "./NavStyle"
import NavLogoPic from '../../../../images/logo.svg'

function Navigation() {
    return (
        <NavContainer>
            <NavLogoContainer>
                <NavLogo src={NavLogoPic}/>
            </NavLogoContainer>
            <NavBarContainer>
                <NavPages>Home</NavPages>
                <NavPages>About</NavPages>
                <NavPages>Contact</NavPages>
                <NavPages>Blog</NavPages>
                <NavPages>Careers</NavPages>
            </NavBarContainer>
            <RequestInvite>Request Invite</RequestInvite>
        </NavContainer>
        
    )
}

export default Navigation