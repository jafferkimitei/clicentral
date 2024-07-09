// src/pages/contact.js
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/Forms/ContactForm';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import Spinner from '../components/UI/Spinner';

const ContactPage = () => {
  const handleButtonClick = () => {
    // Handle button click action
    console.log('Button clicked');
  };

  return (
    <div>
      <NavBar />
      <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Contact Us</h1>
        <div className="mt-4">
          <p className="text-lg">Get in touch with us for inquiries and feedback.</p>
          <ContactForm />
        </div>

        {/* Example of using Card component */}
        <Card
          title="Featured Article"
          description="Learn more about climate change impacts."
          className="mt-8"
        />

        {/* Example of using Button component */}
        <Button onClick={handleButtonClick} className="mt-4">
          Click Me
        </Button>

        {/* Example of using Modal component */}
        <Modal isOpen={true} onClose={() => console.log('Modal closed')}>
          <p className="text-lg">Modal content goes here.</p>
        </Modal>

        {/* Example of using Spinner component */}
        <Spinner className="mt-8" />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
