// src/pages/events.js
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventsPage = () => {
  // Replace with actual data fetching or dummy content
  const events = [
    { id: 1, title: 'Climate Action Conference', date: 'August 15, 2024', location: 'Online' },
    { id: 2, title: 'Global Sustainability Forum', date: 'September 22, 2024', location: 'New York, USA' },
    { id: 3, title: 'Renewable Energy Expo 2024', date: 'October 10, 2024', location: 'Berlin, Germany' },
  ];

  return (
    <div>
        <NavBar />
        <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Events</h1>
        <div className="mt-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Location: {event.location}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
