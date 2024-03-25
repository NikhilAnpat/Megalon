import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="container mx-auto">
        <header className="bg-gray-100 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-gray-800 text-2xl">Records</h1>
            <nav>
              <ul className="flex">
                <li className="mr-4">
                  <Link to="/Login" className="text-gray-800 hover:text-gray-600">Login</Link>
                </li>
                <li>
                  <Link to="/SignUp" className="text-gray-800 hover:text-gray-600">SignUp</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      <div className="container mx-auto border-gray-300 border-4 p-8">
     
      </div>
    </div>
  );
};

export default Home;
