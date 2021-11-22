// import Logo from "./Logo";
import styled from 'styled-components'
import Burger from "./Burger";

const Nav = styled.nav`
    background-color: rgba(35, 159, 190, 0.863);
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding:  0, 20px;
    display: flex;
    justify-content: space-between;

    .Logo{
        width: 100%;
        height: 55px;
        // margin: 0 auto;
        // top: 0;
        display: flex;
        justify-content: space-between;
    }
`

const Header = () => {
    // const logo = Logo
    return (
        <Nav>
            <div className="Logo">
                <p>Header</p>
                <p>Header</p>
                <p>Header</p>
                <p>Header</p>
                <p>Header</p>
            <Burger />
            {/* <Logo /> */}
            </div>
        </Nav>
    )
}

export default Header;