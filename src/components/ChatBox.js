// ChatBox.js

import React, { useState } from 'react';
import './ChatBox.css'; // You can create a CSS file for styling

const ChatBox = ({ onClose, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="header">
        <span>Chat with Admin</span>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.fromAdmin ? 'admin' : 'user'}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
