// ** Madhu** //
import React from 'react';
import './Admin.css'
import AdminNavbar from './AdminNavbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Bookings from './pages/Bookings';

import Settings from './pages/Settings';


const Admin = ({ setIsLoggedIn }) => {
    const handleLogout = () => {
        // Implement your logout logic here
        localStorage.removeItem('valid');
        localStorage.removeItem('email');
        // Update the authentication status to false
        setIsLoggedIn(false);
        // Redirect to the login page after logout
        // Replace '/login' with the actual route for your login page
        window.location.href = '/login';
    };

    return (
        
        <div>
            <AdminNavbar/>
            <Routes>
                <Route path='/bookings' Component={Bookings}/>
                <Route path='/settings' Component={Settings}/>
                {/* <Route path='/messages' Component={Messages}/> */}
         </Routes>
         
        
        </div>
        
        

    );
}

export default Admin;
