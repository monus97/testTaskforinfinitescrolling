import React from 'react';
import './App.css';
import InfiniteScrollCards from './components/InfiniteScrollCard';
import ChatBot from './components/ChatBot';


function App() {
  return (
    <div className="App">
      <h1>Infinite Scroll Cards</h1>
      <ChatBot/>
      <InfiniteScrollCards />
    </div>
  );
}

export default App;