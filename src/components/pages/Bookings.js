import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import './Booking.css'; // Import your CSS file for the Bookings component
import AdminNavbar from '../AdminNavbar'
import './Popup'
import { ToastContainer, toast } from 'react-toastify';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch booked dates from the server
    axios.get('http://localhost:5001/v1/images') // Replace with the actual endpoint
      .then(response => {
        setBookings(response.data);
        // const firstImage = response.data[0]; // Assuming you want to display the first image
        // setImageData(firstImage.image)
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setError('An error occurred while fetching boozkings');
      });
  }, [])
    ;
  const handleViewImage = (imageSrc) => {
    // Handle logic for displaying the image
    // For example, you can open a modal with the image
    setSelectedImage(imageSrc);
  };
  const handleCloseImage = () => {
    setSelectedImage(null);
  };


  const DeleteBooking = async (id) => {
    axios.delete(`http://localhost:5001/v1/${id}`).then((response) => {
      console.log(response)
      toast.success(response.data.message, { autoClose: 3000 });
      setBookings(prevBookings => prevBookings.filter(booking => booking._id !== id));

    }).catch((error) => {
      console.log(error)
      toast.error(error.message)
    })
  }

  return (
    <div>
      <AdminNavbar />
      <div className="bookings-container">
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {
                  selectedImage && (
                    <div className='ShowImage'>
                      <img src={selectedImage} alt="Selected" className='' />
                      {/* <button onClick={handleCloseImage}>Close</button> */}
                    </div>
                  )
                }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Approved </button>
              </div>
            </div>
          </div>
        </div>




        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={bookings.map(booking => ({
                title: 'Booked',
                User: "knfkdjs",
                date: new Date(booking.date).toISOString().split('T')[0],
                extendedProps: { imageSrc: booking.image, userEmail: booking.user, id: booking._id }, // Store image source in extendedProps  
              }))}
              eventContent={(eventInfo) => {
                // Customize the event content
                return (
                  <>
                    <div>{eventInfo.event.title}</div>
                    {/* <button onClick={() => handleViewImage(eventInfo.event.extendedProps.imageSrc)} className='ViewButton'>
                      View Image
                    </button> */}
                    <div>Email: {eventInfo.event.extendedProps.userEmail}</div>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleViewImage(eventInfo.event.extendedProps.imageSrc)} data-bs-whatever="@mdo">Open</button>
                    <button type="button" className="btn btn-danger" onClick={()=>{ DeleteBooking(eventInfo.event.extendedProps.id)}

                   } >Delete</button>

                  </>
                );
              }}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default Bookings;
