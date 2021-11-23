import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from 'react';

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
    img {
        height: 500px;
        width: 800px;
        contain: content;
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

const PlaceShow = (props) => {
    let { id, name } = useParams()
    // let navigate = useNavigate(-1);

    const handleDeleteReview = (ele) => {
        props.deleteReview(ele.id)
    }
    
    const place = props.places.find(place => place.name === name)
    
    const review = props.reviews.filter(review => review.place_id === parseInt(id))
    
    const loaded = () => {
        return (
            <Div className='Place'>
                <h1> {place.name} <Link to={`/edit-place/${name}/${id}`}><button>✏️</button></Link></h1>
                <img src={place.image} alt="no image to display" />
                <h2>{place.address}</h2>
                Hours:
                <h2>{place.hoursOpen}</h2>
                <Link to={`/${place.name}/create-review`}>
                    <h3> + Add A Review</h3>
                </Link>
                {
                    review.map(review => (
                        <div className='Reviews' key={review.id}>
                            {/* <h2>Reviews:</h2> */}

                            {/* {user.map(user => (
                                <p>{user.userName}</p>
                            ))} */}
                            {/* <p>{user.userName}</p> */}
                            <h3>Rating: {review.rating}</h3>
                            <h3>{review.comment}</h3>
                            <Link to={`/edit-review/${review.name}/${review.id}`}>
                                    <button> ✏️ </button>
                                </Link>
                                <button onClick={()=> handleDeleteReview(review)}>🗑</button>
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