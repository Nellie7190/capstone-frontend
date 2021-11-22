import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Div = styled.div`
    .container {
        text-align: center;
        border: 2px solid #444;
        border-radius: 5px;
        padding: 4px auto;
        margin: 50px;
        justify-content: space-around
        // list-style-type: none;
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
    console.log(props.places)
    const [searchTerm, setSearchTerm] = useState('')
    // const [editForm, setEditForm] = useState('');

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
                        //if the searched item includes the search tearms (i put by name)
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <>
                            <br />
                            <div className='container' key={key}>
                                <Link to={`/${val.name}/${val.id}`}>
                                    <h1>{val.name}</h1>
                                </Link>
                                <img src={val.image} alt="no image to display" />
                                <h4>{val.address}</h4>
                                <h5>Hours open: {val.hoursOpen}</h5>
                                <p>{val.isBlackOwned}</p>
                                <Link to={`/edit/${val.name}/${val.id}`}>
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