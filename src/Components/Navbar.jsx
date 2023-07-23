import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-green-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/"><span className="text-white text-4xl  font-extrabold">COLLEGE ACCESS</span></Link>
          </div>
          {/* Responsive Menu */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleDropdown}
            >
            {isDropdownOpen? <svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="h-6 w-6"
>
  <path d="M6 18L18 6M6 6l12 12" />
</svg> :  <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 18a1 1 0 010-2h18a1 1 0 110 2H3zm0-6a1 1 0 010-2h18a1 1 0 110 2H3zm0-6a1 1 0 110-2h18a1 1 0 110 2H3z"
                />
              </svg>}
            </button>
          </div>
          {/* Normal Menu */}
          <div className="hidden md:flex space-x-16">
           <link to="/"> <p className="text-white hover:text-green-600">Home</p></link>
            <a href="/about" className="text-white hover:text-green-600">Colleges</a>
            <a href="/services" className="text-white hover:text-green-600">Admission</a>
            <a href="/contact" className="text-white hover:text-green-600">My College</a>
            <a href="/contact" className="text-white hover:text-green-600">Login</a>
            <div className=" space-x-16">
              
              <a href="/contact" className="text-red-600 hover:text-green-600">Profile Name</a>
              <a href="/contact" className="text-white hover:text-green-600">Log Out</a>
              </div>
          </div>
        </div>
      </div>
      {/* Dropdown for small devices */}
      {isDropdownOpen && (
        <div className="md:hidden bg-green-500">
          <a href="/" className="block text-white p-2 hover:bg-green-600">Home</a>
          <a href="/about" className="block text-white p-2 hover:bg-green-600">Colleges</a>
          <a href="/services" className="block text-white p-2 hover:bg-green-600">Admission</a>
          <a href="/contact" className="block text-white p-2 hover:bg-green-600">My College</a>
          <a href="/contact" className="block text-white p-2 hover:bg-green-600">Login</a>
          <div className=" ">
              
              <a href="/contact" className="text-red-600 block p-2 hover:bg-green-600">Profile Name</a>
              <a href="/contact" className="text-white block p-2 hover:bg-green-600">Log Out</a>
              </div>
        </div>
      )}
    </nav>
    );
};

export default Navbar;