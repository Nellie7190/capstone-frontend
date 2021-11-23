import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Div = styled.div`
    ul {
        list-style: none;
    }
    .container {
        background: linear-gradient(to bottom right, rgb(35, 159, 590, 0.663), white);
        text-align: center;
        border: 2px solid #444;
        border-radius: 5px;
        padding: 4px auto;
        margin: 50px;
        justify-content: space-around
        // display: flex;
        // list-style: none;
    }
    a:visited {
        color: black;
    }
    img {
        height: 300px;
        width: 600px;
        border: 2px solid #555;
    }
    @media (max-width: 768px) {
        img {
            height: 200px;
            width: 400px;
        }
    @media (max-width: 425px) {
        img {
            height: 100px;
            width: 200px;
        }
    }
`

const Home = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleDeletePlace = (ele) => {
        props.deletePlace(ele.id);
    };

    const loaded = () => {
        return (
            <Div> 
                <input 
                id='search' 
                type="text" 
                placeholder='search' 
                onChange={event=> {
                    setSearchTerm(event.target.value)
                }}/> 
                {props.places.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    // console.log(val.isBlackOwned)
                    const blackOwned = () => {
                        if(val.isBlackOwned === true){
                            return <li>Black Owned</li>
                        }
                    }
                    const womanOwned = () => {
                        if(val.isWomanOwned === true){
                            return <li>Woman Owned</li>
                        }
                    }
                    const lComOwned = () => {
                        if(val.isLComOwned === true){
                            return <li>LGBTQIA+ Owned</li>
                        }
                    }
                    const ENMOwned = () => {
                        if(val.isENMOwned === true){
                            return <li>Ethical Non-Monogamous Owned</li>
                        }
                    }
                    const allowsPets = () => {
                        if(val.allowsPets === true){
                            return <li>Allows Pets</li>
                        }
                    }
                    return (
                        <>
                        
                            {/* <br /> */}
                            <div className='container' key={key}>
                                    <h1>{val.name}</h1>
                                <img src={val.image} alt="no image to display" />
                                <div>

                                    <ul>
                                        {blackOwned()}
                                        {womanOwned()}
                                        {lComOwned()}
                                        {ENMOwned()}
                                        {allowsPets()}
                                    </ul>
                                </div>
                                <h4>{val.address}</h4>
                                <h5>Hours open: {val.hoursOpen}</h5>
                                <Link to={`/${val.name}/${val.id}`}>
                                    <p>Learn more..</p>
                                </Link>
                                <Link to={`/edit-place/${val.name}/${val.id}`}>
                                    <button> ✏️ </button>
                                </Link>
                                <button onClick={()=> handleDeletePlace(val)}>🗑</button>
                                <br />
                            </div>
                        </>
                    );
                })}
            </Div>
    )
}
    return(
        <>
            <div>
                <Link to='/create-place'>
                <button> + Add another place</button>
                </Link>
            </div>
            {props.places ? loaded() : <h1>Loading ...</h1>}
        </>
    )
}

export default Home;