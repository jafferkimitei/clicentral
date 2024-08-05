import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import eventsData from '../../data/events'; // Assuming you have events data stored in a separate file

const EventDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = eventsData.find(event => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{event.title} | Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>

      <main className="container mx-auto py-12">
        {/* Header Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-blue">{event.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{event.date} - {event.location}</p>
        </section>

        {/* Event Image */}
        <section className="mb-8">
          <Image
            src={event.image}
            alt={event.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </section>

        {/* Event Description */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800">{event.description}</p>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition duration-200">
              Register for this event
            </button>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Location</h2>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`}
              width="100%"
              height="400"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h2>
            <p className="text-gray-600">Additional details about the event...</p>
          </div>
        </section>

        {/* Related Events */}
        <section>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {eventsData
                .filter(e => e.id !== event.id) // Exclude the current event
                .slice(0, 3) // Show only three related events
                .map(relatedEvent => (
                  <div key={relatedEvent.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-800">{relatedEvent.title}</h3>
                    <p className="text-gray-600">{relatedEvent.date} - {relatedEvent.location}</p>
                    <Image
                      src={relatedEvent.image}
                      alt={relatedEvent.title}
                      className="w-full h-48 object-cover rounded-lg mt-4 mb-2"
                    />
                    <a
                      href={`/events/${relatedEvent.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Details
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventDetailPage;
