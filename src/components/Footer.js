// ** Disho ** //

import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer>
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container9">
          <div className="row">
            <div className="col-lg-5 col-xs-12">
              <h4>Company name</h4>
              <p className="pr-5 text-white-50">
                Some updated information about your company.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Quick links</h4>
              <ul className="m-0 p-0">
                <li>
                  <a href="#">
                    <i className="fas fa-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-info"></i> About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-contact"></i> contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Main Street, City
              </p>
              <p>
                <i className="fas fa-phone"></i> (123) 456-7890
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@company.com
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright text-center">
              <p className='right'>
                <small className="text-white-50">
                  All Rights Reserved &copy; Company Name 2023
                </small>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
