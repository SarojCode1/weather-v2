import React from "react";
import { Link } from "react-router-dom";


const HomePage = ({ name }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="p-8 rounded-md shadow-lg w-96 bg-white">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Welcome {name}!
        </h1>
        <div className="flex items-center justify-between">
          <Link to="/weather">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Check Weather
            </button>
          </Link>
          <Link to="/todo">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              To Do List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
