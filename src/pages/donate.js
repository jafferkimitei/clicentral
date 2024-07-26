import { useState } from 'react';
import Head from 'next/head';

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleRecurringChange = () => setIsRecurring(!isRecurring);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to API)
    alert('Thank you for your donation!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Donate | Clicentral</title>
        <meta name="description" content="Support our cause by making a donation." />
      </Head>

      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("/images/donate-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Support Our Cause</h1>
          <p className="mt-4 text-lg">Your generosity helps us make a difference in climate change action.</p>
        </div>
      </section>

      <main className="container mx-auto w-11/12 md:w-8/12 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-secondary-blue mb-6">Make a Donation</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Donation Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={handleRecurringChange}
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-700">Make this a monthly donation</span>
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Donate Now
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500">
            <p>Your donation is secure and helps us take significant action against climate change. Thank you for your support!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonatePage;


// to add 

// You can enhance this further with:

//     Payment Gateway Integration: Use services like Stripe or PayPal for processing payments.
//     Testimonials: Add testimonials from other donors or impact stories to encourage donations.
//     Progress Bar: Show the progress towards a fundraising goal.
//     Security Badges: Include badges or icons to show the site is secure (e.g., SSL secure, trusted payment processors).