// src/components/Header.js
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo or site name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-bold">ClimateChangeSite</a>
          </div>
          {/* Navbar component */}
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
