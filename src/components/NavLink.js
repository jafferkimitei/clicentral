import Link from 'next/link';

const NavLink = ({ href, active, children }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <span className={`cursor-pointer text-black px-3 py-2 rounded-md text-sm font-medium ${active ? 'bg-secondary-blue text-primary' : 'hover:bg-secondary-blue hover:text-primary'}`}>
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
