import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Sidebar = ({ newsArticles }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticles = newsArticles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
     <div className="bg-primary rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-4 text-secondary-blue">Search</h2>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-4 text-secondary-blue">Categories</h2>
        <ul className="space-y-2">
          <li>
            <Link legacyBehavior href="/news/category/events">
              <a className="text-gray-500 hover:underline">Events</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/news/category/research">
              <a className="text-gray-500 hover:underline">Research</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/news/category/volunteer">
              <a className="text-gray-500 hover:underline">Volunteer Opportunities</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/news/category/community">
              <a className="text-gray-500 hover:underline">Community</a>
            </Link>
          </li>
          
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-secondary-blue">Latest News</h2>
        <ul className="space-y-4">
          {filteredArticles.slice(0, 5).map((article) => (
            <li key={article.id} className="flex">
              <Image src={article.image} alt={article.title} className="w-20 h-20 object-cover rounded-lg mr-4" />
              <div>
                <h3 className="text-lg font-bold">
                  <Link legacyBehavior href={`/news/${article.id}`}>
                    <a className="hover:underline text-gray-800">{article.title}</a>
                  </Link>
                </h3>
                <div className="text-gray-500 text-sm">{article.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
