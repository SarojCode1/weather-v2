import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Your login information is not valid. Please login again.
            </h1>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Go to login page
            </Link>
        </div>
    );
};

export default NotFound;
