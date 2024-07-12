
import Head from 'next/head';
import Image from 'next/image';
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
                      <a href="/maps" className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">Maps visualizer</a>
                      <a href="/donate" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600">Donate Now</a>
                    </div>

                  </div>
                </section>


        {/* About Climate Change */}
        <section className="w-full p-8 bg-primary text-primary">
            <div className="w-11/12 md:w-10/12 mx-auto py-16">
              <h2 className="text-4xl font-bold mb-6 text-center text-secondary-blue">About Climate Change</h2>
              <p className="mb-8 text-lg leading-relaxed text-center text-gray-600">
                Climate change refers to long-term changes in the Earth's climate patterns, primarily due to human activities such as burning fossil fuels, deforestation, and industrial processes. These activities increase the concentration of greenhouse gases in the atmosphere, leading to global warming and a host of other environmental impacts.
              </p>
              <div className=" flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full md:w-1/3 p-6 bg-secondary-blue rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Impact</h3>
                  <p className="text-center">Rising sea levels, extreme weather events, loss of biodiversity, and impacts on human health are just some of the significant effects of climate change.</p>
                </div>
                <div className="w-full md:w-1/3 p-6 bg-secondary-blue rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Statistics</h3>
                  <p className="text-center">Global temperatures have risen by 1.2°C since pre-industrial times. The last decade has been the warmest on record, with 2020 being one of the hottest years ever.</p>
                </div>
                <div className="w-full md:w-1/3 p-6 bg-secondary-blue rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Learn More</h3>
                  <a href="/about" className="block text-white hover:underline text-center">Read more</a>
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
          <a href="/blog/article-slug-1" className="text-primary hover:underline">Read more</a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className=" bg-primary bg-opacity-75 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Article Title 2</h3>
          <p className="mb-4 text-gray-800">Summary of the article...</p>
          <a href="/blog/article-slug-2" className="text-primary hover:underline">Read more</a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="bg-primary bg-opacity-75  backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Article Title 3</h3>
          <p className="mb-4 text-gray-800">Summary of the article...</p>
          <a href="/blog/article-slug-3" className="text-primary hover:underline">Read more</a>
        </div>
      </div>
      {/* Add more articles similarly */}
    </div>
    <div className="text-center mt-8">
  <a 
    href="/blog" 
    className="text-primary text-lg px-4 py-2 border-2 border-white rounded transition duration-300 ease-in-out hover:bg-white hover:text-black hover:rounded-lg"
  >
    View All
  </a>
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
        <section className="relative w-full p-8 bg-cover bg-center" style={{ backgroundImage: 'url("../images/news1.jpg")' }}>
  <div className="absolute inset-0 bg-black opacity-85"></div>
  <div className="relative w-11/12 md:w-10/12 py-16 mx-auto text-gray-100">
    <h2 className="text-4xl font-bold mb-8 text-center text-primary">Interactive Features</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-primary bg-opacity-75 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Carbon Footprint Calculator</h3>
          <p className="mb-4 text-gray-800">Interactive tool for visitors to calculate their carbon footprint...</p>
          <a href="/calculators/carbon-footprint" className="text-primary hover:underline">Try it out</a>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-primary bg-opacity-75 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Climate Change Map</h3>
          <p className="mb-4 text-gray-800">Visual map showing the impact of climate change globally...</p>
          <a href="/maps" className="text-primary hover:underline">Explore the map</a>
        </div>
      </div>
    </div>
  </div>
</section>



        {/* Get Involved */}
        <section className="w-full p-8 bg-secondary-teal"> 
  <div className="w-11/12 md:w-10/12 py-16 mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center text-secondary-blue">Get Involved</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Volunteer Opportunities</h3>
          <p className="mb-4 text-gray-800">Information on how visitors can volunteer...</p>
          <a href="/volunteer" className="text-blue-500 hover:underline">Learn more</a>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Events</h3>
          <p className="mb-4 text-gray-800">Upcoming events related to climate change...</p>
          <a href="/events" className="text-blue-500 hover:underline">View events</a>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Community Actions</h3>
          <p className="mb-4 text-gray-800">Ways to participate in community actions...</p>
          <a href="/community" className="text-blue-500 hover:underline">Get involved</a>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Donation Section */}
      
<section className="relative w-full p-8 bg-cover bg-center" style={{ backgroundImage: 'url("../images/donate.jpg")' }}>
  <div className="absolute inset-0 bg-black opacity-85"></div>
  <div className="relative w-11/12 md:w-10/12 py-16 mx-auto text-gray-100">
    <h2 className="text-4xl font-bold mb-8 text-center text-primary">Support Us</h2>
    <div className="flex flex-wrap -mx-4 items-center">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-primary bg-opacity-75 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Why Donate?</h3>
          <p className="mb-4 text-gray-800">Explanation of how donations are used to support climate change initiatives and projects...</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <a href="/donate" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 text-xl font-bold">Donate Now</a>
      </div>
    </div>
  </div>
</section>




        {/* Testimonials */}
        <section className="w-full p-8 bg-secondary-teal text-primary">
      <div className="w-11/12 md:w-10/12 py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-secondary-blue">Testimonials</h2>
        <div className="flex flex-wrap -mx-4 text-black">
          <div className="w-full md:w-1/3 p-4 flex">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full">
              <Image src="/images/Person1.jpg" alt="Person A" width={96} height={96} className="rounded-full mb-4"/>
              <blockquote className="text-center flex-grow">
                <p className="text-lg italic mb-4">"This organization has made a tremendous impact on our community..."</p>
                <footer className="mt-4 text-right">- Person A</footer>
              </blockquote>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 flex">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full">
              <Image src="/images/Person2.jpg" alt="Person B" width={96} height={96} className="rounded-full mb-4"/>
              <blockquote className="text-center flex-grow">
                <p className="text-lg italic mb-4">"I learned so much about climate change through their resources..."</p>
                <footer className="mt-4 text-right">- Person B</footer>
              </blockquote>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 flex">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full">
              <Image src="/images/Person3.jpg" alt="Person C" width={96} height={96} className="rounded-full mb-4"/>
              <blockquote className="text-center flex-grow">
                <p className="text-lg italic mb-4">"Their events are always informative and inspiring..."</p>
                <footer className="mt-4 text-right">- Person C</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>


        {/* Newsletter Signup */}
        <section className="w-full p-8 bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Stay Updated</h2>
        <p className="mb-6 text-lg text-secondary-yellow">Subscribe to our newsletter to get the latest updates on climate change.</p>
        <form className="flex justify-center items-center max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-black"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600"
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
