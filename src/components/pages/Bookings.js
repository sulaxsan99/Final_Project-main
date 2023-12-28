import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import './Booking.css'; // Import your CSS file for the Bookings component
import AdminNavbar from '../AdminNavbar'

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Fetch booked dates from the server
    axios.get('http://localhost:5001/v1/images') // Replace with the actual endpoint
      .then(response => {
        setBookings(response.data);
        console.log(response.data)
        const firstImage = response.data[0]; // Assuming you want to display the first image
console.log(firstImage.image.data)
        // Convert Binary to base64
        const base64Data = Buffer.from(firstImage.image.data).toString('base64');
        // Create Data URL
        console.log(base64Data)
        const dataUrl = `data:image/png;base64,${base64Data}`;
        setImageData(dataUrl);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setError('An error occurred while fetching boozkings');
      });
  }, []);
  return (
    <div>
      <AdminNavbar/>
    <div className="bookings-container">
      
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="calendar">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={bookings.map(booking => ({
              title: 'Booked',
              date: new Date(booking.date).toISOString().split('T')[0]
            }))}
          />
        </div>
      )}


      <div>
      <h2>Image Display</h2>
      {imageData && <img src={imageData} alt="Merged Image" />}
    </div>

    </div>
    </div>
  );
};

export default Bookings;
