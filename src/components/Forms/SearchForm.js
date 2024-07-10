import { useState } from 'react';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Replace with actual search logic
    if (query.trim()) {
      console.log('Performing search with query:', query);
      // Here you can implement further logic:
      // - Navigate to a search results page
      // - Fetch data from an API
      // - Filter data based on the query
    } else {
      console.log('Empty search query, please enter something.');
    }
    setQuery(''); // Clear the input after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        placeholder="Search..."
        aria-label="Search"
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
