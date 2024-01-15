import { HeaderContainer } from "./HeaderStyle"
import Hero from "./templates/Hero/Hero"
import Navigation from "./templates/Navigation/Nav"


function Header() {
    return(
        <>
            <HeaderContainer>
                <Navigation/>
                <Hero/>
            </HeaderContainer>
        </>
    )
}

export default Header