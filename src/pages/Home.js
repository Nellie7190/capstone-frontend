import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Home = (props) => {
    console.log(props)

    // const params = useParams();
    // const id = params.id;
    // console.log(id)

    // const place = props.places.find(p => p.id == id);
    // console.log('placessss', place)

    // const handleDeletePlace = () => {
    //     // console.log(id)
    //     props.deletePlace(place.id);
    //     console.log("it really happened!")
    // };

    const handleDeletePlace = (ele) => {
        console.log(ele)
        props.deletePlace(ele.id);
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
                    <Link to={`/edit-place/${ele.id}`}>
                        <button> ✏️ </button>
                    </Link>
                    <button onClick={()=> handleDeletePlace(ele)}>🗑</button>
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