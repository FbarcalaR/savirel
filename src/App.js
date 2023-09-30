import React from 'react';
import './App.css';
import Home from './pages/home/home.jsx';
import MenuBar from './layout/menu-bar/menu-bar';

function App() {
  return (
    <div className='h-screen'>
      <Home />
      <MenuBar />
    </div>
  );
}

export default App;
