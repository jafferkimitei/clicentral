// src/components/NavBar.js
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {/* Hamburger menu icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              {/* Logo */}
              <Link legacyBehavior href="/">
                <a className="text-white text-lg font-bold">ClimateChangeSite</a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navigation links */}
                <Link legacyBehavior href="/">
                  <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link legacyBehavior href="/about">
                  <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                </Link>
                <Link legacyBehavior href="/blog">
                  <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                </Link>
                <Link legacyBehavior href="/news">
                  <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">News</a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </Link>
                {/* Add more links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
          <Link legacyBehavior href="/">
              <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a className="text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            </Link>
            <Link legacyBehavior href="/blog">
              <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
            </Link>
            <Link legacyBehavior href="/news">
              <a className="text-white block px-3 py-2 rounded-md text-base font-medium">News</a>
            </Link>
            <Link href="/contact">
              <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
