import styled from 'styled-components';
import { useParams } from "react-router";

const Div = styled.div`
    text-align: center;

    .Place {
    text-align: center;

    }
    .Reviews {
        text-align: center;
        width: 500px;
        border: 1px solid #f1f1f1;
        margin: 20px;
        padding: 10px;
    }
`

const PlaceShow = (props) => {
    let { id, name } = useParams()
    
    // console.log(name)
    // console.log(props.places)
    // console.log(props.reviews)
    const place = props.places.find(place => place.name === name)
    // console.log(place)
    
    const review = props.reviews.filter(review => review.place_id === parseInt(id))
    console.log(review)
    
    // const user = props.users.find((user, place) => user.reviews.user_id === place.id)
    // console.log(user)

    const loaded = () => {
        return (
            <Div className='Place'>
                <h1> {place.name} </h1>
                <img src={place.image} alt="no image to display" />
                <h2>{place.address}</h2>
                Hours:
                <h2>{place.hoursOpen}</h2>
                {
                    review.map(review => (
                        <div className='Reviews'>
                            {/* <h2>Reviews:</h2> */}

                            {/* {user.map(user => (
                                <p>{user.userName}</p>
                            ))} */}
                            {/* <p>{user.userName}</p> */}
                            <h3>Rating: {review.rating}</h3>
                            <h3>{review.comment}</h3>
                        </div>

                    ))
                }
                
            </Div>
        )
    }

    return(
        props.places ? loaded() : <h1> Loading ...</h1>
    )
}

export default PlaceShow;