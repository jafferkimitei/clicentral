import Link from 'next/link';

const NavLink = ({ href, active, children }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <span className={`cursor-pointer text-black px-3 py-2 rounded-md text-sm font-medium ${active ? 'text-secondary-blue' : ' hover:text-secondary-blue'}`}>
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
