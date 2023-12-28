// ** Madhu ** //

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Sidebar = [
    {
        title: 'Messages',
        path:'/messages',
        icon:<IoIcons.IoIosPaper/> ,
        className: 'nav-text'
    },
    {
        title: 'Bookings',
        path:'/bookings',
        icon:<AiIcons.AiFillHome/>, 
        className: 'nav-text'
    },
    {
        title: 'Settings',
        path:'/settings',
        icon:<FaIcons.FaEnvelopeOpenText/>, 
        className: 'nav-text'
    },
]