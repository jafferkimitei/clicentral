import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="hidden sm:flex items-center space-x-4">
            {/* Navigation links */}
            <Link href="/" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            </Link>
            <Link href="/news" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">News</a>
            </Link>
            <Link href="/events" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Events</a>
            </Link>
            <Link href="/community" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Community</a>
            </Link>
            <Link href="/faq" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Faq</a>
            </Link>
            <Link href="/maps" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Maps</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </Link>
            <Link href="/donate" legacyBehavior>
              <a className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">Donate</a>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
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
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">About</a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Blog</a>
              </Link>
              <Link href="/news" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">News</a>
              </Link>
              <Link href="/events" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Events</a>
              </Link>
              <Link href="/community" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Community</a>
              </Link>
              <Link href="/faq" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Faq</a>
              </Link>
              <Link href="/maps" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Maps</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              </Link>
              <Link href="/donate" legacyBehavior>
                <a className="text-black block px-3 py-2 rounded-md text-base font-medium">Donate</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
