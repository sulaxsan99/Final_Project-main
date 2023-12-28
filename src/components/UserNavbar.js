// ** Madhu ** //

import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from './images/company-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Add this line


function UserNavbar2() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={companyLogo} alt="Company Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/notification">
                                Notification
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usermessage">
                                Messages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => {
                                localStorage.removeItem('valid');
                                localStorage.removeItem('email');
                                window.location.href = '/login';
                            }}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default UserNavbar2;
