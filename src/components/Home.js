// ** Disho ** //

import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Caro from './Caro'
import Footer from './Footer'
const Home = () => {
  return (

    <div>
      <Navbar />

      <div className="home">

        <Caro />

        <div>
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default Home;
