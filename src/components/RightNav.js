import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Ul = styled.ul`
    * {
    color: black;
    font-weight: bold;
    }
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    li{
        padding: 15px;
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: rgba(35, 159, 390, 0.663);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: ${({ open }) => open ? '200px' : '0'};
        padding-top: 3.5rem;
        padding-left: 0;
        transition: transform 0.3s ease-in-out;
    }
`
// width: ${({ open }) => open ? '200px' : '0'};

const RightNav = ({ open }) => {
    return (
        <div>
            <Ul open={open}>
                <Link to='/'>  
                    <li>Home</li>
                </Link>
                <li>About Us</li>
                <a href="mailto:chanel_803@hotmail.com">
                    <li>Contact Us</li>
                </a>
                <a target='#' href="https://pensive-knuth-7d02c1.netlify.app/">
                    <li>Find Other Supportive Sites</li>
                </a>
                <li>Login/Logout</li>
            </Ul>
        </div>
    )
}

export default RightNav