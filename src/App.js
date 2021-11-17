import { Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PlaceShow from './pages/PlaceShow';
import EditReview from './pages/EditReview';
import CreateReview from './pages/CreateReview';
import UserReviews from './pages/UserReviews'
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-review' element={<CreateReview />} />
          <Route path='/:id/edit-review' element={<EditReview />} />
          <Route path='/all' element={<PlaceShow />} />
          <Route path='/user-account-profile' element={<UserProfile />} />
          <Route path='/user-reviews' element={<UserReviews />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
