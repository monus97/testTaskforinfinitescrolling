import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
  
    fetchBotResponse('Hello');
  }, []);

  const fetchBotResponse = async (query) => {
    try {
      const response = await axios.post('YOUR_BOTPRESS_API_ENDPOINT', {
        type: 'text',
        text: query,
      });
      
      const botMessage = {
        text: response.data.text,
        sender: 'bot',
      };

      setMessages([...messages, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = {
      text: input,
      sender: 'user',
    };
    setMessages([...messages, userMessage]);
    fetchBotResponse(input);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
