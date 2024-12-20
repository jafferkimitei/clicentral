import { useState } from 'react';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="bg-white w-full shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink href="/">
              <Image 
                src="/images/logo2.png" 
                alt="Logo" 
                width={80} 
                height={80} 
                className="h-20 w-auto" 
              />
            </NavLink>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            {/* Navigation links */}
            <NavLink href="/" active={router.pathname === '/'}>Home</NavLink>
            <NavLink href="/about" active={router.pathname === '/about'}>About</NavLink>
            <NavLink href="/news" active={router.pathname === '/news'}>News</NavLink>
            <NavLink href="/events" active={router.pathname === '/events'}>Events</NavLink>
            <NavLink href="/contact" active={router.pathname === '/contact'}>Contact</NavLink>
          </div>
          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
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
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-4 text-center text-lg">
              <li><NavLink href="/" active={router.pathname === '/'}>Home</NavLink></li>
              <li><NavLink href="/about" active={router.pathname === '/about'}>About</NavLink></li>
              <li><NavLink href="/news" active={router.pathname === '/news'}>News</NavLink></li>
              <li><NavLink href="/events" active={router.pathname === '/events'}>Events</NavLink></li>
              <li><NavLink href="/contact" active={router.pathname === '/contact'}>Contact</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
