
import Head from 'next/head';
import React from 'react';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'Jane has over 20 years of experience in environmental advocacy and founded our organization to address climate change.',
    image: '/images/jane-doe.jpg'
  },
  {
    name: 'John Smith',
    role: 'Chief Scientist',
    bio: 'John is a leading climate scientist with numerous publications on climate change and its impacts.',
    image: '/images/john-smith.jpg'
  },
  {
    name: 'Emily Johnson',
    role: 'Community Outreach Coordinator',
    bio: 'Emily is passionate about engaging communities and spreading awareness about sustainability practices.',
    image: '/images/emily-johnson.jpg'
  }
];

const boardMembers = [
  {
    name: 'Alice Brown',
    role: 'Chairperson',
    bio: 'Alice has been a leader in environmental policy and advocacy for over 15 years.',
    image: '/images/alice-brown.jpg'
  },
  {
    name: 'Bob Green',
    role: 'Treasurer',
    bio: 'Bob brings his financial expertise to ensure our organization is fiscally responsible and sustainable.',
    image: '/images/bob-green.jpg'
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
        <source src="../videos/hero.mp4" type="video/mp4" />
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
    <section className="w-full p-8 bg-secondary-teal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Our Mission</h2>
          <div className="text-lg leading-relaxed text-gray-800">
            <p className="mb-4">
              <strong>Mission Statement:</strong> Our mission is to drive action against climate change by promoting sustainability, reducing carbon footprints, and fostering environmental stewardship.
            </p>
            <p className="mb-4">
              <strong>Vision Statement:</strong> We envision a world where communities are resilient, ecosystems are protected, and sustainable practices are integrated into everyday life, creating a healthy planet for future generations.
            </p>
          </div>
        </div>
      </section>

        {/* Our Story Section */}
        <section className="w-full p-8 bg-primary ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Our Story</h2>
          <div className="text-lg leading-relaxed text-left text-gray-800">
            <p className="mb-4">
              <strong>History:</strong> Our organization was founded in [Year] with a vision to address the pressing issue of climate change. Over the years, we have achieved several milestones, including [key milestones and achievements].
            </p>
            <p className="mb-4">
              <strong>Founders’ Story:</strong> Our founders, [Founder Names], were inspired to start this organization after [personal stories and inspirations]. Their passion for the environment and dedication to making a positive impact led to the creation of our organization.
            </p>
          </div>
        </div>
      </section>

       {/* Our Values Section */}
       <section className="w-full p-8 bg-secondary-teal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Our Values</h2>
          <div className="text-lg leading-relaxed text-left text-gray-800">
            <p className="mb-4">
              <strong>Core Values:</strong> Our work is guided by the following core values:
              <ul className="list-disc ml-8">
                <li>Sustainability: We prioritize sustainable practices in all our initiatives.</li>
                <li>Integrity: We maintain the highest ethical standards in our work.</li>
                <li>Innovation: We embrace innovative solutions to tackle climate change.</li>
                <li>Community: We believe in the power of community engagement and collaboration.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong>Principles:</strong> We adhere to the following principles:
              <ul className="list-disc ml-8">
                <li>Transparency: We are open and transparent in our operations and communications.</li>
                <li>Accountability: We hold ourselves accountable to our stakeholders and the environment.</li>
                <li>Respect: We respect diverse perspectives and work inclusively.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

        {/* Our Team Section */}
        <section className="w-full p-8 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <div className="bg-secondary-sky p-6 rounded-lg shadow-lg">
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">Board of Directors</h2>
          <div className="flex flex-wrap -mx-4">
            {boardMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/2 p-4">
                <div className="bg-secondary-sky p-6 rounded-lg shadow-lg">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-base">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* What We Do Section */}
       <section className="w-full p-8 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-blue">What We Do</h2>
          <div className="text-lg leading-relaxed text-left text-gray-800">
            <p className="mb-4">
              <strong>Programs and Initiatives:</strong> Our organization runs various programs and initiatives aimed at mitigating climate change, including:
              <ul className="list-disc ml-8">
                <li>Community education programs to raise awareness about climate change.</li>
                <li>Tree planting initiatives to restore ecosystems and absorb carbon dioxide.</li>
                <li>Advocacy efforts to influence climate policy and promote sustainable practices.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong>Research and Reports:</strong> We conduct and publish research on climate change and its impacts. Our reports provide valuable insights and data to inform policy and action.
            </p>
            <p className="mb-4">
              <strong>Case Studies:</strong> We have successfully implemented numerous projects that have had a significant impact on reducing carbon footprints and promoting sustainability. Some of our case studies include:
              <ul className="list-disc ml-8">
                <li>A project in [Location] that reduced local carbon emissions by [X] tons per year.</li>
                <li>An initiative that improved climate resilience in [Community/Region].</li>
                <li>A collaboration with [Partner Organization] to promote renewable energy adoption.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
};

export default AboutPage;
