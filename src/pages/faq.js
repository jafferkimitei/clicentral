// src/pages/faq.js
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQPage = () => {
  // Replace with actual FAQ data or dummy content
  const faqs = [
    { id: 1, question: 'What is climate change?', answer: '...' },
    { id: 2, question: 'How does climate change affect weather patterns?', answer: '...' },
    { id: 3, question: 'What can individuals do to reduce their carbon footprint?', answer: '...' },
  ];

  return (
    <div>
        <NavBar />
        <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">FAQ</h1>
        <div className="mt-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{faq.question}</h2>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
