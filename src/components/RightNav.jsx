import styled from 'styled-components'

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    color: red;

    li{
        padding: 18px 50px;
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: navy;
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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Login</li>
                <li>Register</li>
            </Ul>
        </div>
    )
}

export default RightNav