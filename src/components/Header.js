import Logo from "./Logo";
import styled from 'styled-components'
import Burger from "./Burger";

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding:  0, 20px;
    display: flex;
    justify-content: space-between;

    Logo{
        text-align: left;
    }
    .Logo{
        width: 100%;
        height: 55px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        text-align: left;

    }
`

const Header = () => {
    const logo = Logo
    return (
        <Nav>
            <div className="Logo">
                <p>Header</p>
                <p>Header</p>
            </div>
            <Burger />
        </Nav>
    )
}

export default Header;