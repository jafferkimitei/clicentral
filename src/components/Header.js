import NavBar from './NavBar';
import SearchForm from './Forms/SearchForm';

const Header = () => {
  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-bold">Clicentral</a>
          </div>
          {/* Center section: Search bar */}
          <div className="flex items-center justify-center flex-grow">
            <div className="w-full max-w-md">
              <SearchForm />
            </div>
          </div>
          {/* Right section: Utility links */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
            <a href="/signup" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Signup</a>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
