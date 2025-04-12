import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import logo from "../../Assets/logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageClick = (page, route) => {
    setActivePage(page);
    setIsOpen(false); // Close the modal
    navigate(route); // Navigate to the route
  };

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src={logo} alt="company logo" className='logo' />
        </div>
        <ul className="nav-links">
          {[
            { page: 'Home', route: '/' },
            { page: 'About Us', route: '/About' },
            { page: 'Services', route: '/Services' },
            { page: 'Projects', route: '/Projects' },
            { page: 'Testimonials', route: '/Testimonials' },
            { page: 'Contact Us', route: '/Contact' }
          ].map((item, index) => (
            <li
              key={index}
              className={`nav-item ${activePage === item.page ? 'active' : ''}`}
              onClick={() => handlePageClick(item.page, item.route)}
            >
              {item.page}
            </li>
          ))}
        </ul>
        <button className="cta-button">Free Quote</button>
        <div className="hamburger" onClick={toggleMenu}>
        <LuMenu />
        </div>
      </nav>

      {isOpen && (
        <div className="nav-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleMenu}><IoClose /></button>
            <ul className="modal-links">
              {[
                { page: 'Home', route: '/' },
                { page: 'About Us', route: '/About' },
                { page: 'Services', route: '/Services' },
                { page: 'Projects', route: '/Projects' },
                { page: 'Testimonials', route: '/Testimonials' },
                { page: 'Contact', route: '/Contact' }
              ].map((item, index) => (
                <li
                  key={index}
                  className={`modal-item ${activePage === item.page ? 'active' : ''}`}
                  onClick={() => handlePageClick(item.page, item.route)}
                >
                  {item.page}
                </li>
              ))}
            </ul>
            <button className="cta-button modal-button">Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;