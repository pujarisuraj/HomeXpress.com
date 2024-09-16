import React, { useState } from 'react';
import '../../CSS/Home/Navbar.css';
import search from '../../Assets/SVG/search.svg';
import menu from '../../Assets/SVG/menu.svg';
import closemenu from '../../Assets/SVG/close-menu.svg';
import { motion } from 'framer-motion';
import user from '../../Assets/SVG/sign-in-user.svg'
import shoping from '../../Assets/SVG/shoping.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="main">

        <nav>

          <div id="mob-nav">

            <div id='mobile-navbar'>

              <div className="menu-toggle" onClick={toggleMenu}>
                <img src={menu} alt="" />
              </div>
              <div id='mob-login'>
                <a href="/">Sign in <img src={user} id='user' alt="" /></a>
                <a href="/"><img src={shoping} alt="" /></a>
              </div>

            </div>


            {/* side menu start  */}

            <div className="menu-container">

              <motion.div className={`side-menu ${isOpen ? 'open' : 'closed'}`} initial={{ x: '-100%' }} animate={{ x: isOpen ? 0 : '-100%' }} transition={{ duration: 0.3 }}>
                <div className='menu-list'>

                  <div id='close-menu'>
                    <h3>Menu</h3>
                    <img onClick={toggleMenu} src={closemenu} alt="" />
                  </div>

                  {/* side menu list  */}
                  <ul>
                    <li><a href="/"><i className="ri-home-5-fill menu-svg"></i> Home</a></li>
                    {/* <li><a href="/"><i className="ri-home-smile-fill menu-svg"></i> </a></li> */}
                  </ul>
                  <ul>
                    <li><a href="/"><i className="ri-user-fill menu-svg"></i> Seller Login</a></li>
                    <li><a href="/"><i className="ri-home-smile-fill menu-svg"></i> Sell Services</a></li>
                    {/* <li><a href="/"><i className="ri-layout-grid-2-fill menu-svg"></i> All Categories</a></li> */}
                  </ul>

                  <ul>
                    <li><a href="/"><i className="ri-discount-percent-fill menu-svg"></i> Offer Zone</a></li>
                    <li><a href="/"><i className="ri-wallet-3-fill menu-svg"></i> Wallet</a></li>
                  </ul>

                  <ul>
                    <li><a href="/"><i className="ri-takeaway-fill menu-svg"></i> My Orders </a></li>
                    <li><a href="/"><i className="ri-shopping-cart-2-fill menu-svg"></i> My Cart </a></li>
                    <li><a href="/"><i className="ri-account-circle-fill menu-svg"></i> My Account</a></li>
                    <li><a href="/"><i className="ri-map-pin-2-fill menu-svg"></i> Address</a></li>
                    <li><a href="/"><i className="ri-coupon-2-fill menu-svg"></i> Coupons</a></li>
                  </ul>

                  <ul>
                    <li><a href="/"><i className="ri-customer-service-2-fill menu-svg"></i> Help Center</a></li>
                  </ul>

                </div>
              </motion.div>
            </div>
            {/* side menu end  */}

          </div>



          {/* Desktop Navbar  */}

          <div id="desktop-nav">

            <div id="nav-part1">
              <input type="text" placeholder="Search..." />
              <img src={search} alt="Search" />
            </div>

            <div id="nav-part2">
              {/* <a href="/">Home</a> */}
              <a href="/"><i className="ri-shopping-cart-2-line" />Cart</a>
              <a href="/" className="a-menu">Login</a>
              <a href="/" className="a-menu">Seller</a>
            </div>

            {/* Desktop Navbar  end  */}

          </div>

        </nav>
      </div>
    </>
  );
}
