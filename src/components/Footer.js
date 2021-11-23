import styled from 'styled-components'

const Nav = styled.nav`
    // background-color: rgba(35, 159, 190, 0.863);
    background-color: rgba(35, 159, 590, 0.663);
    font-weight: bold;
    // position: fixed;
    margin: 0 auto;
    // bottom: 0;
    // right: 0;
    // left: 0;
    // height: 5px;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Footer = () => {
    return (
        <Nav>
            <p>This is the Footer</p>
            <p>This is the Footer</p>
            <p>This is the Footer</p>
        </Nav>

    )
}

export default Footer;