// **content: Janoja **CSS:Dishoban ** //
   

import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div><Navbar />
      <div className="about">

        <div className='about1'><h2>About Us</h2>
          <p>MY HALL VISSION is more than just a company; we're a group of creative minds, tech enthusiasts, and event management experts. Our team is comprised of individuals with backgrounds in event planning,furniture arrangement and design, and project management. Together, we have a shared vision of redefining event experiences.</p>
        </div>

        <div class="box">
          <div class="card">
            <h5> 2D view</h5>
            <img src='./image/2D.jpg' className='applogo' alt="logo" width="80px" height="100px" />
            <div class="pra">
              <p> Add, edit and see furniture, décor and manufacturer specific tents within the 2D view for arrange furniture in floor plan
              </p>
            </div>
          </div>
          <div class="card">
            <h5>3D view</h5>
            <img src='./image/images.jpg' className='applogo' alt="logo" width="80px" height="100px" />
            <div class="pra">
              <p>Walk through the floor plan from eye level or see an aerial view for EVERY floor plan regardless of your account type.</p>
            </div>
          </div>
          <div class="card">
            <h5>all devices</h5>
            <img src='./image/responsive.png' className='applogo' alt="logo" width="80px" height="100px" />
            <div class="pra">
              <p>Experience EVERY floor plan on ANY device with internet connection - computers</p>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src="/image/customer.jpg" className="customer" />
            </div>
            <div className="col-md-7">
              <p className="custom-text1">
                <b>Custom Solutions </b><br />
                We understand that every event is unique. That's why we tailor our 3D simulations to suit your specific needs, whether it's a corporate conference, product launch, trade show, or virtual training          </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <p className="custom-text2">
                <b>Eliminating Stress With Passion & Determination</b><br />
                We understand that every event is unique. That's why we tailor our 3D simulations to suit your specific needs, whether it's a corporate conference, product launch, trade show, or virtual training          </p>
            </div>
            <div className="col-md-5">
              <img src="/image/eliminateimage.jpg" className="passion1" />
            </div>
          </div>
        </div>

        <div className="align1">
          <div className="row">
            <div className="col-md-5">
              <img src="/image/transparancy.jpg" className="passion" />
            </div>
            <div className="col-md-7">
              <p className="custom-text3">
                <b>Promoting Transparency & Honesty</b><br />
                We understand that every event is unique. That's why we tailor our 3D simulations to suit your specific needs, whether it's a corporate conference, product launch, trade show, or virtual training          </p>
            </div>
          </div>
        </div>



        <p>you're choosing a partner dedicated to transforming your event into a remarkable experience. We believe in the power of innovation, and we're committed to helping you stand out in a competitive market.
          Join us on this exciting journey to explore the endless possibilities of 3D simulation in event management. Contact us today to discuss how we can make your next event truly unforgettable!</p>
      </div>
    </div>

  );
}
export default About;


