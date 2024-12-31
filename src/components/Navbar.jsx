import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Movie App</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/add" className="hover:text-blue-300">
            Add Movie
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
