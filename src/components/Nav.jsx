'use client';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import hamburger from '../assets/icons/hamburger.svg';
import close from '../assets/icons/close.svg';
import { Ranch } from '../assets/images';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const pathname = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="py-4 px-6 w-full fixed top-0 z-50 bg-white shadow-md">
      <nav className="flex justify-between items-center max-container">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2">
          <img src={Ranch} alt="Market Ranch Logo" className="w-[35px] h-[29px]" />
          <span className="text-lg font-bold text-yellow-400">Market Ranch</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex justify-center items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-active-yellow'
                    : 'text-slate-gray hover:text-yellow-400'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <img src={isMenuOpen ? close : hamburger} alt="Menu Icon" width={25} height={25} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-50 transition-transform ${
          isMenuOpen ? 'animate-slideIn' : 'animate-slideOut'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-lg font-bold text-yellow-400">Market Ranch</span>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <img src={close} alt="Close Icon" width={20} height={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 p-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-active-yellow'
                      : 'text-slate-gray hover:text-yellow-400'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default Nav;
