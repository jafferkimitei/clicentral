import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import eventsData from '../../data/events'; // Make sure this path is correct for your events data

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  // Extract unique months and years for the filters
  const months = [...new Set(eventsData.map(event => new Date(event.date).toLocaleString('default', { month: 'long' })))];
  const years = [...new Set(eventsData.map(event => new Date(event.date).getFullYear()))];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filter events based on search term, month, and year
  const filteredEvents = eventsData.filter(event => {
    const eventMonth = new Date(event.date).toLocaleString('default', { month: 'long' });
    const eventYear = new Date(event.date).getFullYear();

    return (
      (searchTerm === '' || event.title.toLowerCase().includes(searchTerm)) &&
      (selectedMonth === 'All' || selectedMonth === eventMonth) &&
      (selectedYear === 'All' || selectedYear === eventYear)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div className="bg-gray-100 min-h-screen">
       <Head>
        <title>Events | Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/community-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="mt-4 text-lg">Explore our upcoming events and get involved in climate action</p>
        </div>
      </section>

      {/* Main content */}
      <main className="w-11/12 md:w-10/12 mx-auto py-16">
        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            {/* Filters */}
            <div className="flex gap-4 mb-4 md:mb-0">
              <div className="relative">
                <select
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="p-2 border border-gray-300 text-gray-800 rounded-lg"
                >
                  <option value="All">All Months</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="p-2 border border-gray-300 text-gray-800 rounded-lg"
                >
                  <option value="All">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Search Input */}
            <div className="flex items-center justify-start mb-4 md:mb-0">
              <div className="relative w-full md:w-1/2 lg:w-full">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full p-2 pl-10 border border-gray-300 text-gray-800 rounded-lg"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <i className="fas fa-search absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="grid grid-cols-1 gap-8">
          {currentEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2 hover:text-underline">
                    <Link legacyBehavior href={`/events/${event.id}`}>
                      <a>{event.title}</a>
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
                  <p className="text-gray-600 mb-2"><strong>Location:</strong> {event.location}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>
              </div>
              <div className="md:w-1/3 relative group">
                <Link legacyBehavior href={`/events/${event.id}`}>
                  <a className="block relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-8">
          <button
            className={`py-2 px-4 rounded-lg ${currentPage === 1 ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className={`py-2 px-4 rounded-lg ${currentPage === totalPages ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
