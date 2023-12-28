// ** Madhu ** //

import React, { useState } from 'react';
import './AdminNavbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { IconContext } from 'react-icons';
import companyLogo from './images/company-logo.png';

function AdminNavbar(){
  const [sidebar, setSidebar] = useState(false);
  const showSidebar =() => setSidebar(!sidebar);

  const handleLogout=()=> {
    // Perform any logout actions (e.g., clearing session data)
  
    // Redirect to the home page (change the URL to your home page's URL)
    window.location.href = '/'; // Replace '/home' with the actual URL of your home page
  }
  return(
    <>
    
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
      <Link className="navbar-brand" to="/">
          <img src={companyLogo} alt="Company Logo" />
        </Link>
      <div className='logout-btn'>
      <button id='logout-button' className='btn' onClick={handleLogout}>Logout</button>
      </div>
      
    </div>
    
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {Sidebar.map((item, index) => {
         return(
          <li key={index} className={item.className}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
         )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default AdminNavbar;
