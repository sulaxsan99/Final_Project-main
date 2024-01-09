

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './User.css';
import UserNavbar from './UserNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

// ** Thuva ** //
const User = ({ setIsLoggedIn }) => {
  const [bookingDate, setBookingDate] = useState(null);
  const [available, setAvailable] = useState(true)
  const [message,setMessage]= useState("")
  const bookedDates = [new Date(2023, 10, 10), new Date(2023, 10, 15)]; // Sample booked dates
  console.log(localStorage.getItem('token'))

  const handleDateSelect = async (date) => {
    // Logic to check if the date is available for booking
    // If available, set the booking date
    // Otherwise, show a message indicating that the date is not available
    setBookingDate(date);
    console.log(bookingDate)
    CheckAvailable(date)
  };

  const CheckAvailable = async (date) => {
    try {
      const response = await axios.get('http://localhost:5001/v1/bookDate',{ params: { date: date } })
      console.log(response)
      if (response.status === 200) {
        setAvailable(true)
        setMessage("Date is Available ")
    
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setAvailable(false);
        setMessage("Date is not Available Find a New Date");
      }
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('valid');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    window.location.href = '/';
  };



  const navigate = useNavigate();
  const handleNotificationClick = () => {
    // Use the navigate function to redirect to the /notification route
    navigate('/notification');
  };

  return (

    <div>

      <UserNavbar handleLogout={handleLogout} />

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src="/image/hall.jpg" className="img-fluid custom-image" alt="Hall" />
          </div>

          <div className="col-md-5">
            <p className="custom-text">
              <b>Welcome to our user-friendly design platform! </b>
              <br />
              Our interface offers a seamless and intuitive experience to bring your creative ideas to life. With an elegant and modern design, you'll find all the tools you need to craft stunning visuals and concepts
            </p>
            <p className="custom-text">
              Whether you're a seasoned designer or a newbie, our platform is designed to cater to your needs. Ready to unleash your imagination? Click the "Try Design" button and let your creativity flow!
            </p>

            <div style={{ marginBottom: "20px", }}>
              <p className='date'>Book a Date:</p>
              <DatePicker
                selected={bookingDate}
                onChange={handleDateSelect}
                minDate={new Date()}
                filterDate={(date) => {
                  // Logic to check if the date is available for booking
                  return !bookedDates.some((bookedDate) => new Date(bookedDate).toDateString() === date.toDateString());
                }}
                dateFormat="MM/dd/yyyy"
              />
            </div>
            <div>
              {

              }
              <p></p>
            </div>

            {bookingDate && available === true ? (
            <button className="btn btn-primary custom-button" onClick={() => {
              navigate('/layout', { state: { bookingDate } });
            }

            } >Try Design</button>
            ) : <h1 className='AvailableDate'> {message}</h1>}
            {/* Add a link to handle the notification click event */}

          </div>

        </div>

      </div>


    </div>


  );
};

export default User;
