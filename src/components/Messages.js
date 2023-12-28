// ** Janoja ** //

import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import AdminNavbar from './AdminNavbar';


const NotificationPage = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, profile: "John Doe", message: "Liked your post", read: false },
        { id: 2, profile: "Jane Smith", message: "Commented on your photo", read: false },
        { id: 3, profile: "Alex Johnson", message: "Sent you a friend request", read: false }
    ]);

    const handleNotificationClick = (id) => {
        const updatedNotifications = notifications.map((notification) =>
            notification.id === id ? { ...notification, read: true } : notification
        );
        setNotifications(updatedNotifications);
    };

    const handleNotificationClose = (id) => {
        const updatedNotifications = notifications.filter((notification) => notification.id !== id);
        setNotifications(updatedNotifications);
    };

    return (
        <div>
            <div>
                <AdminNavbar/>
            </div>
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        margin: '10px',
                        border: '1px solid #ddd',
                        cursor: 'pointer',
                        fontWeight: notification.read ? 'normal' : 'bold'
                    }}
                >
                    <img
                        src={`image/avatar1.png`}
                        alt={`${notification.profile}'s profile picture`}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                    />
                    <div
                        style={{
                            fontWeight: notification.read ? 'normal' : 'bold',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleNotificationClick(notification.id)}
                    >
                        <strong>{notification.profile}</strong>: {notification.message}
                    </div>
                    <GrClose onClick={() => handleNotificationClose(notification.id)} />
                </div>
            ))}
        </div>
    );
};

export default NotificationPage;
