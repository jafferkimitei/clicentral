import { useState } from 'react';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="bg-white text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
