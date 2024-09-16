// import logo from './logo.svg';
import React from 'react';
import './App.css';
import DesktopAds from './Component/JS/Home/DesktopAds';
import Navbar from './Component/JS/Home/Navbar';
import MobAds from './Component/JS/Home/MobAds';
import MianServices from './Component/JS/Services/MianServices';
import Ac from './Component/JS/Services/Ac';
import Cleaning from './Component/JS/Services/Cleaning';
import Electrician from './Component/JS/Services/Electrician';
import Carpenter from './Component/JS/Services/Carpenter';
import Painting from './Component/JS/Services/Painting';
import Applince from './Component/JS/Services/Applince';
import SofaAd from './Component/JS/Ad/SofaAd';
import PaintingAd from './Component/JS/Ad/PaintingAd';
import Approintment from './Component/JS/Ad/Approintment';
import LogisticAd from './Component/JS/Ad/LogisticAd';
import Footer from './Component/JS/Footer/Footer';
// import Page2AcAds from './Component/JS/Page2AcAds';
// import Services1 from './Component/JS/Services1';
function App() {
  return (
    <>
      <Navbar />
      <DesktopAds />
      <MobAds />
      <MianServices />
      <Ac />
      <SofaAd />
      <Electrician />
      <Approintment/>
      <Applince />
      <Cleaning />
      <LogisticAd/>
      <Carpenter />
      <PaintingAd />
      <Painting />
      <Footer/>



      {/* <Page2AcAds/> */}
      {/* <Services1/> */}

    </>

  );
}

export default App;
