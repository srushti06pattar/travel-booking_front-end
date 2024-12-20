import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import Navbar from './Components/Navbar'; // Adjust path if needed
import Homepage from './Pages/Homepage';// Adjust path if needed
import SearchPage from './Pages/SearchPage'; // Adjust path if needed
import ContactPage from './Pages/ContactPage'; // Adjust path if needed
import Footer from './Components/Footer';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';


const App = () => {
  return (
  
      <Router>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="'/footer'" element={<Footer/>}/>
        <Route path='/signupPage' element={<SignupPage/>}/>
        <Route path="/loginPage" element={<LoginPage/>}/>
        <Route path='/profilePage' element={<ProfilePage/>}/>

      </Routes>
    </Router>
   
  );
};

export default App;
