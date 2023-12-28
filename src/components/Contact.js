import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Contact.css"
import Navbar from './Navbar';

function Contact() {
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        email: '',
    });

    useEffect(() => {
        // Make an API call to fetch contact information from your backend
        axios.get('http://localhost:5001/v1/update-contact-details')
            .then(response => {
                // Assuming the response is an object with phone and email properties
                const { phone, email } = response.data;

                // Update the state with the retrieved values
                setContactInfo({
                    phone: phone,
                    email: email,
                });
            })
            .catch(error => {
                console.error('Error fetching contact information:', error);
            });
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="container4">
                <h1>Contact Us</h1>
                <p className='paragarph'>Get directions to our event center</p>

                <div className="address">
                    <h2>Address:</h2>
                    <p className='paragarph'>136 Pascale dso Apt. 339, DS City</p>
                    <p className='paragarph'>United States</p>
                </div>

                <div className="contact-info">
                    <h2>Contact Information:</h2>
                    <p className='paragarph'id="phonenumber">Phone: {contactInfo.phone}</p>
                    <p className='paragarph' id="contactemail">Email: {contactInfo.email}</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;
