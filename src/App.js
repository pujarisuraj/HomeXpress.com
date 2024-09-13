// import logo from './logo.svg';
import React from 'react';
import './App.css';
import DesktopAds from './Component/JS/DesktopAds';
import Navbar from './Component/JS/Navbar';
import MobAds from './Component/JS/MobAds';
import MianServices from './Component/JS/Services/MianServices';
import Ac from './Component/JS/Services/Ac';
import Cleaning from './Component/JS/Services/Cleaning';
import Electrician from './Component/JS/Services/Electrician';
import Carpenter from './Component/JS/Services/Carpenter';
import Painting from './Component/JS/Services/Painting';
// import Page2AcAds from './Component/JS/Page2AcAds';
// import Services1 from './Component/JS/Services1';
function App() {
  return (
    <>
      <Navbar />
      <DesktopAds/>
      <MobAds/>
      <MianServices/>
      <Ac/>
      <Electrician/>
      <Cleaning/>
      <Carpenter/>
      <Painting/>
      
    

      {/* <Page2AcAds/> */}
      {/* <Services1/> */}

    </>

  );
}

export default App;
