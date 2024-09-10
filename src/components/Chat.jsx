import React, { useState } from 'react';
import './Chat.css'; // Asegúrate de que tu archivo CSS esté enlazado

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'Alexis', text: 'Hola Santi', timestamp: '' },
    { sender: 'Santi', text: 'alto proyecto papa', timestamp: 'enviado', img: 'https://img.freepik.com/vector-gratis/lindo-gato-ilustracion-dibujos-animados-mano-signo-amor-concepto-naturaleza-animal-aislado-estilo-dibujos-animados-plana_138676-3419.jpg?w=826&t=st=1725977277~exp=1725977877~hmac=c0cd30e6b2e4e260cf95c303cd83cf774eaa77e9d8d3530d82bae9c41c654100' },
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
