import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = (props) => {
    console.log(props)
    const handleDeletePlace = () => {
        props.deletePlace(props.places[2].id);
        console.log("it really happened!")
    };

    const loaded = () => {
        return (
            props.places.map((ele) => (
                <div className='Container'>
                    <h2>{ele.name}</h2>
                    <h4>{ele.address}</h4>
                    <h5>Hours open: {ele.hoursOpen}</h5>
                    <p>{ele.isBlackOwned}</p>
                    {/* <ul>
                        <li>{ele.isBlackOwned}</li>
                        <li>{ele.isWomanOwned}</li>
                        <li>{ele.isENMOwned}</li>
                        <li>{ele.isLComOwned}</li>
                        <li>{ele.allowPets}</li>
                    </ul> */}
                    <button onClick=''>✏️</button> <button onClick={()=> handleDeletePlace()}>🗑</button>
                    <br />
                </div>
    )))
}

    return(
        <div>
            <div>
                <Link to='/create-place'>
                <button> + Add another place</button>
                </Link>
            </div>

            {props.places ? loaded() : <h1>Loading ...</h1>}
        </div>

    )

}

export default Home;