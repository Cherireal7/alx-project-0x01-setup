import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AppName
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/posts" className="hover:text-blue-500">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:text-blue-500">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;