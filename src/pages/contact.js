import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSpinner } from 'react-icons/fa';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', captchaAnswer: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mathQuestion, setMathQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    generateMathQuestion();
  }, []);

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathQuestion(`${num1} + ${num2} = ?`);
    setCorrectAnswer(num1 + num2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate captcha
    if (parseInt(form.captchaAnswer) !== correctAnswer) {
      alert('Incorrect captcha answer. Please try again.');
      setIsSubmitting(false);
      generateMathQuestion(); // Generate a new question
      return;
    }

    // Handle form submission logic here (e.g., send data to API)

    setIsSubmitting(false);
    alert('Form submitted successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
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
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
          <h2 className="text-2xl font-bold text-secondary-blue mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="relative mb-4">
              <label htmlFor="captcha" className="block text-gray-700 font-bold mb-2">Captcha: {mathQuestion}</label>
              <input
                type="text"
                id="captcha"
                name="captchaAnswer"
                value={form.captchaAnswer}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? <FaSpinner className="animate-spin mx-auto" /> : 'Submit'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
