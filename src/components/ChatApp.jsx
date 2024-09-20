import React, { useState } from 'react';
import '../layouts/styles.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'Alexis', text: 'Hola Santi', timestamp: '' },
    { sender: 'Santi', text: 'alto proyecto papa', timestamp: 'enviado' },
    { sender: 'Alexis', text: 'gracias', timestamp: 'enviado' },
    { sender: 'Santi', text: 'despues depositame', timestamp: 'enviado' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { sender: 'you', text: newMessage, timestamp: 'just now' }]);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'you' ? 'you' : ''}`}>
            <div className="message-info">
              <span className="sender">{message.sender}</span>
              <span className="timestamp">{message.timestamp}</span>
            </div>
            {message.img ? (
              <img src={message.img} alt="sent image" className="message-image" />
            ) : (
              <p className="message-text">{message.text}</p>
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type something..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;