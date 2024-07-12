import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary-blue p-4 text-center text-primary bottom-0 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Clicentral. All rights reserved.</p>
        <Link href="/faq" legacyBehavior>
          <a className="text-white hover:text-primary mt-2 md:mt-0">FAQ</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
