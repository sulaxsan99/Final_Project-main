// ** Madhu ** //

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar';
import * as Yup from 'yup';


function Settings() {
  const [activeMainTab, setActiveMainTab] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newEmail, setNewEmail] = useState('');
 
  const [data, setData] = useState({
    Email: Yup.string().email('Invalid email').required('Email is required'),
    currentPassword: "",
    newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    )
    .required('Password is required'),
  })

  const handleMainTabClick = (mainTab) => {
    setActiveMainTab(mainTab);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value })
  };

  

  // ***********change password*************
  const handlePasswordChange = () => {
    console.log(data);
    const url = 'http://localhost:5001/v2/change-password'
    axios.post(url, data).then((Response) => {
      window.alert(Response.data);
    })
    // Handle change password logic here
    console.log('Changing password...');
  };

  //  ***********change contact details*****************
  const handleContactDetailsChange = () => {
    const updatedData = {
      newPhoneNumber: newPhoneNumber,
      newEmail: newEmail
    };
    axios.post('http://localhost:5001/v2/update-contact-details', updatedData)
      .then((response) => {
        window.alert(response.data);
      })
      .catch((error) => {
        console.error('Error updating contact details:', error);
        window.alert('Failed to update contact details. Please try again.');
      });

    console.log('Changing contact details...');
  };

  return (
    <div>
      <AdminNavbar />

      <div className="container mt-5">

        <h2>Settings</h2>
        <ul className="nav nav-tabs" id="settingsTabs">
          <li className="nav-item">
            <a
              className={`nav-link ${activeMainTab === 'changePassword' ? 'active' : ''
                }`}
              onClick={() => handleMainTabClick('changePassword')}
            >
              Change Password
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeMainTab === 'changePicture' ? 'active' : ''
                }`}
              onClick={() => handleMainTabClick('changePicture')}
            >
              Change Picture
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeMainTab === 'changeContactDetails' ? 'active' : ''
                }`}
              onClick={() => handleMainTabClick('changeContactDetails')}
            >
              Change Contact Details
            </a>
          </li>
        </ul>

        <div className="tab-content" id="settingsContent">
          {activeMainTab === 'changePassword' && (
            <div className="tab-pane fade show active" id="changePassword">
              <div className="form-group">
                <label htmlFor="newEmail">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  value={data.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  value={data.currentPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  value={data.newPassword}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary" onClick={handlePasswordChange}>
                Change Password
              </button>
            </div>
          )}

          {activeMainTab === 'changePicture' && (
            <div className="tab-pane fade show active" id="changePicture">
              <div className="form-group">
                <label htmlFor="changecoverphoto">Change Cover Photo</label>
                <input
                  className="form-control"
                  id="changecoverphoto"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="changeuserphoto">Change User Photo</label>
                <input
                  className="form-control"
                  id="changeuserphoto"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" onClick={handleChange}>
                Save changes
              </button>
            </div>
          )}

          {activeMainTab === 'changeContactDetails' && (
            <div className="tab-pane fade show active" id="changeContactDetails">
              <div className="form-group">
                <label htmlFor="newEmail"> Change Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="newEmail"
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newphonenumber">New Number</label>
                <input
                  type="int"
                  className="form-control"
                  id="newPhoneNumber"
                  
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleContactDetailsChange}>
                save changes
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Settings;
