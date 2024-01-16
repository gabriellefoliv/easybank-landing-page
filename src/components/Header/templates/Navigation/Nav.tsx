import { Button, Li, LogoImg, Menu, NavContainer, Overlay, Ul } from "./NavStyle"
import LogoPic from '../../../../images/logo.svg'
import { useState } from "react";
import close from '../../../../images/icon-close.svg'
import hamburguer from '../../../../images/icon-hamburger.svg'

function Navigation() {
    const navBarItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenuActive = () => {
        setMenuActive(!menuActive);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Overlay className={menuActive ? 'active' : ''} />
                <NavContainer>
                    <LogoImg src={LogoPic} />
                        <Ul className={menuActive ? 'active' : 'list'}>
                            {navBarItems.map((item, key) => {
                                return (
                                    <Li key={key} className='navBarItem'>{item}</Li>
                                 )
                            })}
                        </Ul>
                        <Menu src={menuActive ? close : hamburguer} alt="menu" onClick={toggleMenuActive} className={menuActive ? 'close hamburguer' : 'hamburguer'} />
                        <Button className="headerButton">Request Invite</Button>
                </NavContainer>
        </>
        
    )
}

export default Navigation