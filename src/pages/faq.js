import { useState } from 'react';

const FAQPage = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is climate change?',
      answer: 'Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions on Earth. It is largely driven by human activities such as burning fossil fuels, deforestation, and industrial processes, which release greenhouse gases into the atmosphere. These gases trap heat, leading to global warming and various impacts on ecosystems, weather patterns, sea levels, and human societies.',
    },
    {
      id: 2,
      question: 'How does climate change affect weather patterns?',
      answer: 'Climate change alters weather patterns by influencing atmospheric circulation, temperature gradients, and moisture content. This can lead to more frequent and intense heatwaves, storms, droughts, and heavy rainfall events in certain regions. Shifts in weather patterns can disrupt agriculture, water supplies, infrastructure, and ecosystems, posing risks to human health and socio-economic stability.',
    },
    {
      id: 3,
      question: 'What can individuals do to reduce their carbon footprint?',
      answer: 'Individuals can reduce their carbon footprint by adopting sustainable practices in daily life, such as:',
      furtherAnswer: [
        'Reducing energy consumption at home and using energy-efficient appliances.',
        'Switching to renewable energy sources like solar or wind power.',
        'Minimizing car use by walking, biking, carpooling, or using public transportation.',
        'Supporting local and sustainable food sources, reducing meat consumption, and reducing food waste.',
        'Advocating for climate-conscious policies and practices in communities and workplaces.',
      ],
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className='bg-secondary-teal'>
      {/* Hero section with breadcrumb and background image */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("../images/donate.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <p className="mt-4 text-lg">Frequently Asked Questions about Climate Change</p>
        </div>
      </section>

      <main className="container mx-auto w-11/12 md:w-10/12 py-10 mt-8">
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md mb-4">
              <button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none border-b border-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl text-gray-800 text-center font-bold">{faq.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${activeFAQ === index ? 'transform rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeFAQ === index && (
                <div className="p-4 text-center text-gray-800">
                  <p className="mt-2">{faq.answer}</p>
                  {faq.furtherAnswer && (
                    <ul className="mt-4 text-left">
                      {faq.furtherAnswer.map((item, idx) => (
                        <li key={idx} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
