import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Subscribed with email:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div>
      <Head>
        <title>Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="../videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 relative z-10">
            <h1 className="text-white text-5xl font-bold mb-4">Together We Can Combat Climate Change</h1>
            <p className="text-white text-xl mb-8">Join us in the fight for a sustainable future</p>
            <div>
              <Link href="/maps">
                <a className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">Maps visualizer</a>
              </Link>
              <Link href="/donate">
                <a className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600">Donate Now</a>
              </Link>
            </div>
          </div>
        </section>

        {/* About Climate Change */}
        <section className="w-full p-8 bg-primary text-primary">
          <div className="w-11/12 md:w-10/12 mx-auto py-16">
            <h2 className="text-4xl font-bold mb-6 text-center text-secondary-blue">About Climate Change</h2>
            <p className="mb-8 text-lg leading-relaxed text-center text-gray-600">
              Climate change refers to long-term changes in the Earth&apos;s climate patterns, primarily due to human activities such as burning fossil fuels, deforestation, and industrial processes. These activities increase the concentration of greenhouse gases in the atmosphere, leading to global warming and a host of other environmental impacts.
            </p>
            <div className=" flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
              <div className="w-full md:w-1/3 p-6 bg-secondary-blue rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-center">Impact</h3>
                <p className="text-center">Rising sea levels, extreme weather events, loss of biodiversity, and impacts on human health are just some of the significant effects of climate change.</p>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-secondary-blue rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-center">Statistics</h3>
                <p className="text-center">Global temperatures have risen by 1.2&deg;C since pre-industrial times. The last decade has been the warmest on record, with 2020 being one of the hottest years ever.</p>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-secondary-blue rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-center">Learn More</h3>
                <Link href="/about">
                  <a className="block text-white hover:underline text-center">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News & Articles */}
        <section className="relative w-full p-8 bg-cover bg-center" style={{ backgroundImage: 'url("../images/news1.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-85"></div>
          <div className="relative w-11/12 md:w-10/12 mx-auto py-16 text-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Latest News & Articles</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-primary bg-opacity-75  backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Article Title 1</h3>
                  <p className="mb-4 text-gray-800">Summary of the article...</p>
                  <Link href="/blog/article-slug-1">
                    <a className="text-primary hover:underline">Read more</a>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className=" bg-primary bg-opacity-75 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Article Title 2</h3>
                  <p className="mb-4 text-gray-800">Summary of the article...</p>
                  <Link href="/blog/article-slug-2">
                    <a className="text-primary hover:underline">Read more</a>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-primary bg-opacity-75  backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Article Title 3</h3>
                  <p className="mb-4 text-gray-800">Summary of the article...</p>
                  <Link href="/blog/article-slug-3">
                    <a className="text-primary hover:underline">Read more</a>
                  </Link>
                </div>
              </div>
              {/* Add more articles similarly */}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog">
                <a className="text-primary text-lg px-4 py-2 border-2 border-white rounded transition duration-300 ease-in-out hover:bg-white hover:text-black hover:rounded-lg">View All</a>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact & Solutions */}
        <section className="w-full p-8 bg-primary text-primary">
          <div className="w-11/12 md:w-10/12 py-16 mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-secondary-blue">Impact & Solutions</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-secondary-blue p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4">Problems</h3>
                  <p className="mb-4">Description of the problems caused by climate change...</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-secondary-blue p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4">Solutions</h3>
                  <p className="mb-4">Outline potential solutions and actions being taken...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Features */}
        <section className="relative w-full p-8 bg-cover bg-center" style={{ backgroundImage: 'url("../images/news2.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <div className="relative w-11/12 md:w-10/12 py-16 mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">Interactive Features</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Feature 1</h3>
                  <p className="mb-4 text-gray-200">Brief description of the interactive feature...</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Feature 2</h3>
                  <p className="mb-4 text-gray-200">Brief description of the interactive feature...</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Feature 3</h3>
                  <p className="mb-4 text-gray-200">Brief description of the interactive feature...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 bg-secondary-blue text-white">
          <div className="w-11/12 md:w-10/12 mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-lg mb-8">
              Your involvement can help drive meaningful change. Subscribe to stay updated and take action.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 rounded-md text-black mb-4 md:mb-0 md:mr-4"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
