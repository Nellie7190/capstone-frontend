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
    const createReview = async(review) => {
        await fetch(`${URL}reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(review),
        });
        getReviews();
    }
    
    const deleteUser = async (user) => {
        await fetch(`${URL}users`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json',
            },
        });
        getUsers();
    }

    const deletePlace = async (id) => {
        console.log(id)
        await fetch(`${URL}places/${id}`, {
            method: 'DELETE',
        });
        getPlaces();
    }

    const deleteReview = async (review) => {
        await fetch(`${URL}reviews`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json',
            },
        });
        getReviews();
    }

        useEffect(() => getUsers(), []);
        useEffect(() => getPlaces(), []);
        useEffect(() => getReviews(), []);

    return ( 
        <main>
            <Routes>
                <Route path='/' element={<Home places={places} createPlace={createPlace} deletePlace={deletePlace}/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create-place' element={<CreatePlace {...places} places={places} createPlace={createPlace}/>} />
                <Route path='/create-review' element={<CreateReview {...reviews} reviews={reviews} createReview={createReview}/>} />
                <Route path='/edit-place/:id' element={<EditPlace {...places} places={places}/>} />
                <Route path='/edit-review/:id' element={<EditReview />} />
                <Route path='/:id' element={<PlaceShow />} />
                <Route path='/user-account-profile' element={<UserProfile />} />
                <Route path='/user-reviews' element={<UserReviews />} />
        </Routes>
        </main>
    )
}

export default Main;