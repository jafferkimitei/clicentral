
import Head from 'next/head';
import React from 'react';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'Jane has over 20 years of experience in environmental advocacy and founded our organization to address climate change.',
    image: '/images/Person1.jpg'
  },
  {
    name: 'John Smith',
    role: 'Chief Scientist',
    bio: 'John is a leading climate scientist with numerous publications on climate change and its impacts.',
    image: '/images/Person1.jpg'
  },
  {
    name: 'Emily Johnson',
    role: 'Community Outreach Coordinator',
    bio: 'Emily is passionate about engaging communities and spreading awareness about sustainability practices.',
    image: '/images/Person1.jpg'
  }
];

const boardMembers = [
  {
    name: 'Alice Brown',
    role: 'Chairperson',
    bio: 'Alice has been a leader in environmental policy and advocacy for over 15 years.',
    image: '/images/Person1.jpg'
  },
  {
    name: 'Bob Green',
    role: 'Treasurer',
    bio: 'Bob brings his financial expertise to ensure our organization is fiscally responsible and sustainable.',
    image: '/images/Person1.jpg'
  }
];

const AboutPage = () => {
  return (
    <div>
        <Head>
        <title>About Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      <main className="flex flex-col items-center">
          {/* About Hero Section */}
      <section className="relative w-full h-screen">
      <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src="../videos/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white p-8">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-center max-w-2xl">
          We are dedicated to combating climate change through innovative solutions, education, and community engagement.
        </p>
      </div>
    </section>

      {/* Mission Section */}
      <section className="w-full py-16 bg-secondary-teal">
  <div className="w-11/12 md:w-10/12 mx-auto text-center px-4 md:px-8 lg:px-12">
    <h2 className="text-4xl font-bold mb-8 text-secondary-blue">Our Mission</h2>
    <div className="text-lg leading-relaxed text-left text-gray-800">
      <p className="mb-8">
        <strong className="text-xl text-gray-800">Mission Statement:</strong>
        <br />
        Our mission is to drive action against climate change by promoting sustainability, reducing carbon footprints, and fostering environmental stewardship.
      </p>
      <p>
        <strong className="text-xl text-gray-800">Vision Statement:</strong>
        <br />
        We envision a world where communities are resilient, ecosystems are protected, and sustainable practices are integrated into everyday life, creating a healthy planet for future generations.
      </p>
    </div>
  </div>
</section>


        {/* Our Story Section */}
        <section className="relative w-full py-16 bg-cover bg-center" style={{ backgroundImage: 'url("../images/donate.jpg")' }}>
  <div className="absolute inset-0 bg-black opacity-85"></div>
  <div className="relative w-11/12 md:w-10/12 mx-auto text-center px-4 md:px-8 lg:px-12 text-gray-100">
    <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
    <div className="text-lg leading-relaxed text-left">
      <p className="mb-4">
        <strong className="text-xl text-secondary-blue">History:</strong>
        <br />
        <span className='text-primary'>Our organization was founded in [Year] with a vision to address the pressing issue of climate change. Over the years, we have achieved several milestones, including [key milestones and achievements].</span>
      </p>
      <p className="mb-4">
        <strong className="text-xl text-secondary-blue">Founders Story:</strong>
        <br />
        <span className='text-primary'>Our founders, [Founder Names], were inspired to start this organization after [personal stories and inspirations]. Their passion for the environment and dedication to making a positive impact led to the creation of our organization.</span>
      </p>
    </div>
  </div>
</section>


       {/* Our Values Section */}
       <section className="w-full py-16 bg-secondary-teal">
  <div className="w-11/12 md:w-10/12 mx-auto text-center px-4 md:px-8 lg:px-12">
    <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Our Values</h2>
    <div className="text-lg leading-relaxed text-left text-gray-800 bg-white p-8 rounded-lg shadow-lg">
      <p className="mb-4">
        <strong className="text-xl text-secondary-blue">Core Values:</strong>
        <ul className="list-disc ml-8 mt-2">
          <li className="mb-2">Sustainability: We prioritize sustainable practices in all our initiatives.</li>
          <li className="mb-2">Integrity: We maintain the highest ethical standards in our work.</li>
          <li className="mb-2">Innovation: We embrace innovative solutions to tackle climate change.</li>
          <li className="mb-2">Community: We believe in the power of community engagement and collaboration.</li>
        </ul>
      </p>
      <p className="mb-4">
        <strong className="text-xl text-secondary-blue">Principles:</strong>
        <ul className="list-disc ml-8 mt-2">
          <li className="mb-2">Transparency: We are open and transparent in our operations and communications.</li>
          <li className="mb-2">Accountability: We hold ourselves accountable to our stakeholders and the environment.</li>
          <li className="mb-2">Respect: We respect diverse perspectives and work inclusively.</li>
        </ul>
      </p>
    </div>
  </div>
</section>

        {/* Our Team Section */}
        <section className="w-full p-8 bg-gray-800">
        <div className="w-11/12 md:w-10/12 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <div className="bg-secondary-blue p-6 rounded-lg shadow-lg">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-secondary-teal mb-2">{member.role}</p>
                  <p className="text-base">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="w-full p-8 bg-secondary-teal">
        <div className="w-11/12 md:w-10/12 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Board of Directors</h2>
          <div className="flex flex-wrap -mx-4">
            {boardMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/2 p-4">
                <div className="bg-primary p-6 rounded-lg shadow-lg">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-sm mb-2 text-gray-800">{member.role}</p>
                  <p className="text-base text-gray-900">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* What We Do Section */}
       <section className="relative w-full p-8 bg-cover bg-center" style={{ backgroundImage: 'url("../images/donate.jpg")' }}>
  <div className="absolute inset-0 bg-black opacity-85"></div>
  <div className="w-11/12 md:w-10/12 mx-auto text-center text-white relative z-10">
    <h2 className="text-4xl font-bold mb-6 text-primary">What We Do</h2>
    <div className="flex flex-wrap -mx-4 text-lg leading-relaxed">
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Programs and Initiatives</h3>
            <p className="mb-4 text-gray-800">Our organization runs various programs and initiatives aimed at mitigating climate change, including:</p>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Community education programs to raise awareness about climate change.</li>
              <li>Tree planting initiatives to restore ecosystems and absorb carbon dioxide.</li>
              <li>Advocacy efforts to influence climate policy and promote sustainable practices.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Research and Reports</h3>
            <p className="mb-4 text-gray-800">We conduct and publish research on climate change and its impacts. Our reports provide valuable insights and data to inform policy and action.</p>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Comprehensive studies on global temperature trends and projections.</li>
              <li>Impact assessments of climate policies on different sectors.</li>
              <li>Reports on the effectiveness of various climate adaptation strategies.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-primary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">Case Studies</h3>
            <p className="mb-4 text-gray-800">We have successfully implemented numerous projects that have had a significant impact on reducing carbon footprints and promoting sustainability. Some of our case studies include:</p>
            <ul className="list-disc ml-4 text-gray-600">
              <li>A project in [Location] that reduced local carbon emissions by [X] tons per year.</li>
              <li>An initiative that improved climate resilience in [Community/Region].</li>
              <li>A collaboration with [Partner Organization] to promote renewable energy adoption.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </main>
    </div>
  );
};

export default AboutPage;
