// import Logo from "./Logo";
import styled from 'styled-components'
import Burger from "./Burger";

const Nav = styled.nav`
    background-color: rgba(35, 159, 590, 0.663);
    font-weight: bold;
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #f1f1f1;
    padding:  0, 20px;
    display: flex;
    justify-content: space-between;

    .Logo{
        width: 100%;
        height: 55px;
        // margin: 0 auto;
        // top: 0;
        text-align: center;
        display: flex;
        justify-content: space-around;
    }
`

const Header = () => {
    // const logo = Logo
    return (
        <Nav>
            <div className="Logo">
                <h1>safePlace</h1>
            <Burger />
            {/* <Logo /> */}
            </div>
        </Nav>
    )
}

export default Header;