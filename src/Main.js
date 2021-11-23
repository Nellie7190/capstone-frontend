// import SubHeader from './components/SubHeader';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PlaceShow from './pages/PlaceShow';
import EditPlace from './pages/EditPlace';
import EditReview from './pages/EditReview';
import CreateReview from './pages/CreateReview';
import CreatePlace from './pages/CreatePlace';
import UserReviews from './pages/UserReviews'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
// import axios from 'axios';

const Main = () => {
    // const [places, setPlaces] = useState(null);
    // const URL = 'https://fierce-woodland-66018.herokuapp.com/'

    // const getPlaces = async () => {
    //     const response = await fetch(`${URL}places`);
    //     const data = await response.json();
    //     setPlaces(data);
    // };

    // useEffect(() => getPlaces(), []);
    // console.log(places)

    const URL = 'https://fierce-woodland-66018.herokuapp.com/'
    // const URL = 'http://127.0.0.1:8000/'

    const [users, setUsers] = useState(null);
    const [places, setPlaces] = useState(null);
    const [reviews, setReviews] = useState(null);

    const getUsers = async () => {
            const response = await fetch(`${URL}users`);
            const data = await response.json();
            setUsers(data);
        };

    const getPlaces = async () => {
            const response = await fetch(`${URL}places`);
            const data = await response.json();
            setPlaces(data);
        };

    const getReviews = async () => {
            const response = await fetch(`${URL}reviews`);
            const data = await response.json();
            setReviews(data);
        };
    
        useEffect(() => getUsers(), []);
        useEffect(() => getPlaces(), []);
        useEffect(() => getReviews(), []);

    const createUser = async(user) => {
        await fetch(`${URL}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(user),
        });
        getUsers();
    }
    
    const createPlace = async(place) => {
        //url/places/id? or //url/reviews
        await fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(place),
        });
        console.log(place)
        getPlaces();
    }
    
    // do I need an id for review to be attached to place/user?
    const createReview = async(review, id) => {
        await fetch(`${URL}reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(review),
        });
        getReviews();
    }
    console.log(reviews)
    // const createReview = async() => {
    //     axios.post(`${URL}reviews`, {
    //         isBlackOwned: isBlackOwned,
    //         isWomanOwned: isWomanOwned,
    //         isENMOwned: isENMOwned,
    //         isLComOwned: isLComOwned,
    //         allowsPets: allowsPets,
    //         hoursOpen: hoursOpen,
    //         rating: rating,
    //         comment: comment,
    //         place: places.id,
    //     })
    //     .then((res) => {
    //         axios.get(`${URL}/reviews`).then(res => {
    //             setReviews(res.data)
    //         })
    //     })
    // }
    
    const editPlace = async (place, id) => {
        await fetch(`${URL}places/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(place),
        });
        getPlaces();
    }
    const editReview = async (review, id) => {
        await fetch(`${URL}reviews/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(review),
        });
        getReviews();
    }

    // const deleteUser = async (user) => {
    //     await fetch(`${URL}users`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'Application/json',
    //         },
    //     });
    //     getUsers();
    // }

    const deletePlace = async (id) => {
        await fetch(`${URL}places/${id}`, {
            method: 'DELETE',
        });
        getPlaces();
    }

    const deleteReview = async (id) => {
        await fetch(`${URL}reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json',
            },
        });
        getReviews();
    }

    return ( 
        <main>
            <Routes>
                <Route path='/' element={<Home places={places} createPlace={createPlace} editPlace={editPlace} deletePlace={deletePlace}/>} />
                <Route path='/login' element={<Login users={users} createUser={createUser}/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/create-place' element={<CreatePlace {...places} places={places} createPlace={createPlace}/>} />
                <Route path='/:name/create-review' element={<CreateReview {...reviews} reviews={reviews} createReview={createReview} users={users}/>} />
                <Route path='/edit-place/:name/:id' element={<EditPlace places={places} editPlace={editPlace}{...places}/>} />
                <Route path='/edit-review/:name/:id' element={<EditReview places={places} reviews={reviews} editReview={editReview}/>} />
                <Route path='/:name/:id' element={<PlaceShow places={places} reviews={reviews} deleteReview={deleteReview}users={users}/>} />
                <Route path='/user-account-profile' element={<UserProfile />} />
                <Route path='/user-reviews' element={<UserReviews />} />
        </Routes>
        </main>
    )
}

export default Main;