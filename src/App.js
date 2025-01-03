import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Adjust path if needed
import Homepage from './Pages/Homepage'; // Adjust path if needed
import SearchPage from './Pages/SearchPage';
import ContactPage from './Pages/ContactPage'; // Adjust path if needed
import Footer from './Components/Footer'; // Adjust path if needed
import SignupPage from './Pages/SignupPage'; // Adjust path if needed
import LoginPage from './Pages/LoginPage'; // Adjust path if needed
import ProfilePage from './Pages/ProfilePage'; // Adjust path if needed
import BookingConfirmationPage from './Pages/BookingConfirmationPage';
import BookingHistoryPage from './Pages/BookingHistoryPage ';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/booking-history" element={<BookingHistoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
