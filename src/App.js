// import logo from './logo.svg';
import React from 'react';
import './App.css';
import DesktopAds from './Component/JS/DesktopAds';
import Navbar from './Component/JS/Navbar';
import MobAds from './Component/JS/MobAds';
function App() {
  return (
    <>
      <Navbar />
      <DesktopAds/>
      <MobAds/>
    </>

  );
}

export default App;
