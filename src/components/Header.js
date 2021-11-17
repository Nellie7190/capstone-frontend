import Logo from "./Logo";
import styled from 'styled-components'
import Burger from "./Burger";

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding:  0 20px;
    display: fex;
    justify-content: space-between;

    .logo{
        padding: 15px
    }
`

const Header = () => {
    const logo = Logo
    return (
        <Nav>
            <div className="Logo">
                Header
            </div>
            <Burger />
        </Nav>
    )
}

export default Header;