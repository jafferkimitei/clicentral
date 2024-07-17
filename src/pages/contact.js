import { useState } from 'react';
import Head from 'next/head';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Handle form submission logic here (e.g., send data to API)

    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-100">
       <Head>
        <title>Contact | Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      {/* Hero section with background image */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("../images/contact-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">We would love to hear from you!</p>
        </div>
      </section>

      {/* Contact form section */}
      <main className="container mx-auto w-11/12 md:w-10/12 py-10 mt-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </main>

      {/* Contact info section */}
      <section className="container mx-auto w-11/12 md:w-10/12 py-10 mt-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
          <p className="mb-4 text-gray-800">Feel free to reach out to us using the following contact details:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-500">havierkim@gmail.com</a>
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500">+25471063817</a>
            </li>
            <li className="mb-2">
              <strong>Address:</strong> Kasarani, Nairobi, Kenya
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
