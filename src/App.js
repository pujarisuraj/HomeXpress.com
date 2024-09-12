// import logo from './logo.svg';
import React from 'react';
import './App.css';
import DesktopAds from './Component/JS/DesktopAds';
import Navbar from './Component/JS/Navbar';
import MobAds from './Component/JS/MobAds';
import MianServices from './Component/JS/MianServices';
import Page2AcAds from './Component/JS/Page2AcAds';
function App() {
  return (
    <>
      <Navbar />
      <DesktopAds/>
      <MobAds/>
      <MianServices/>
      <Page2AcAds/>

    </>

  );
}

export default App;
