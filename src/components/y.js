import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';

const Messages= () => {
    const [notifications, setNotifications] = useState([
        { id: 0, profile: "John Doe", message: "Liked your post", read: false },
        { id: 1, profile: "Jane Smith", message: "Commented on your photo", read: false },
        { id: 2, profile: "Alex Johnson", message: "Sent you a friend request", read: false }
    ]);

    const handleNotificationClick = (id) => {
        const updatedNotifications = notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
        );
        setNotifications(updatedNotifications);
    };

    const handleNotificationClose = (id) => {
        const updatedNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(updatedNotifications);
    };
 
    return (
        <div>
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        margin: '10px',
                        border: '1px solid #ddd',
                        cursor: 'pointer',
                        fontWeight: notification.read ? 'normal' : 'bold'
                    }}
                    onClick={() => handleNotificationClick(index)}
                > 
               
                 <img
                src={`image/avatar1.png`}
                alt={`${notification.profile}'s profile picture`}
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
            <div style={{ marginLeft: '10px' }}>
                    <strong>{notification.profile}</strong>: {notification.message}
                </div>
                <GrClose onClick={()=> handleNotificationClose(notification.id)}/>

                </div>
            ))}
        </div>
    );
};

export default Messages;