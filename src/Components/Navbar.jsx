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
           <Link to="/"> <a href="" className="text-white hover:text-green-600">Home</a></Link>
           <Link to="/colleges"> <a href="" className="text-white hover:text-green-600">Colleges</a></Link>
           <Link to="/admission"> <a href="" className="text-white hover:text-green-600">Admission</a></Link>
           <Link to="/mycolleges"> <a href="" className="text-white hover:text-green-600">My College</a></Link>
           <Link to="/login"> <a href="" className="text-white hover:text-green-600">Login</a></Link>
          
            <div className=" space-x-16">
              
             <Link to=""><a href="" className="text-red-600 hover:text-green-600">Profile Name</a></Link> 
             <button><a href="" className="text-white hover:text-green-600">Log Out</a></button> 
              
              </div>
          </div>
        </div>
      </div>
      {/* Dropdown for small devices */}
      {isDropdownOpen && (
        <div className="md:hidden bg-green-500">
          <Link to="/"><a href="" className="block text-white p-2 hover:bg-green-600">Home</a></Link>
          <Link to="/colleges"><a href="" className="block text-white p-2 hover:bg-green-600">Colleges</a></Link>
          <Link to="/admission"><a href="" className="block text-white p-2 hover:bg-green-600">Admission</a></Link>
          <Link to="/mycolleges"><a href="" className="block text-white p-2 hover:bg-green-600">My College</a></Link>
          <Link to="/login"><a href="" className="block text-white p-2 hover:bg-green-600">Login</a></Link>
          
          <div className=" ">
              
              <Link to="/"><a href="" className="text-red-600 block p-2 hover:bg-green-600">Profile Name</a></Link>
              <button><a href="" className="text-white  block p-2 hover:bg-green-600">Log Out</a></button>
              
              </div>
        </div>
      )}
    </nav>
    );
};

export default Navbar;