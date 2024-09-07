import React, { useState } from 'react';
import '../CSS/Navbar.css';
import search from '../Assets/SVG/search.svg';
import menu from '../Assets/SVG/menu.svg';
import closemenu from '../Assets/SVG/close-menu.svg';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="main">
        <header>
        </header>
        <nav>

          <div id="mob-nav">
            {/* side menu start  */}
            <div id='side-menu'>
              <div className="menu-container">
                <div className="menu-toggle" onClick={toggleMenu}>
                  <img src={menu} alt="" />
                </div>

                <motion.div className={`side-menu ${isOpen ? 'open' : 'closed'}`} initial={{ x: '-100%' }} animate={{ x: isOpen ? 0 : '-100%' }} transition={{ duration: 0.3 }}>

                  <div className='menu-list'>
                    <div id='close-menu'>
                      <h3>Menu</h3>
                      <img onClick={toggleMenu} src={closemenu} alt="" />
                    </div>

                    {/* side menu list  */}
                    <ul>
                      <li><a href="#"><i class="ri-home-5-fill menu-svg"></i> Home</a></li>
                      {/* <li><a href="#"><i class="ri-home-smile-fill menu-svg"></i> </a></li> */}
                    </ul>
                    <ul>
                      <li><a href="#"><i class="ri-user-fill menu-svg"></i> Seller Login</a></li>
                      <li><a href="#"><i class="ri-home-smile-fill menu-svg"></i> Sell Services</a></li>
                      {/* <li><a href="#"><i class="ri-layout-grid-2-fill menu-svg"></i> All Categories</a></li> */}
                    </ul>

                    <ul>
                      <li><a href="#"><i class="ri-discount-percent-fill menu-svg"></i> Offer Zone</a></li>
                      <li><a href="#"><i class="ri-wallet-3-fill menu-svg"></i> Wallet</a></li>
                    </ul>

                    <ul>
                      <li><a href="#"><i class="ri-takeaway-fill menu-svg"></i> My Orders </a></li>
                      <li><a href="#"><i class="ri-shopping-cart-2-fill menu-svg"></i> My Cart </a></li>
                      <li><a href="#"><i class="ri-account-circle-fill menu-svg"></i> My Account</a></li>
                      <li><a href="#"><i class="ri-map-pin-2-fill menu-svg"></i> Address</a></li>
                      <li><a href="#"><i class="ri-coupon-2-fill menu-svg"></i> Coupons</a></li>
                      <li><a href="#"><i class="ri-notification-3-fill menu-svg"></i> My Notifications</a></li>
                      <li><a href="#"><i class="ri-notification-3-fill menu-svg"></i> My Notifications</a></li>
                    </ul>

                    <ul>
                      <li><a href="#"><i class="ri-customer-service-2-fill menu-svg"></i> Help Center</a></li>
                    </ul>

                  </div>
                </motion.div>
              </div>
            </div>

            {/* side menu end  */}

            <div id='mob-login'>
              <a href="#"><i class="ri-account-circle-line"></i>Login</a>
              <a href="#"><i className="ri-shopping-cart-2-line"></i></a>
            </div>

          </div>

          {/* Desktop Navbar  */}
          <div id="nav-bar">
            <div id="nav-part1">
              <input type="text" placeholder="Search..." />
              <img src={search} alt="Search" />
            </div>

            <div id="nav-part2">
              {/* <a href="#">Home</a> */}
              <a href="#"><i className="ri-shopping-cart-2-line" />Cart</a>
              <a href="#" className="a-menu">Login</a>
              <a href="#" className="a-menu">Seller</a>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
}
