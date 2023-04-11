import React, { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = ({ onLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({ name, email });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-md shadow-lg w-96"
            >
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Welcome
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Please log in to continue
                </p>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        <Link
                            to="/HomePage" >
                            Login
                        </Link>
                    </button>
                    <Link
                        to="/Welcome"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    >
                        Not a member yet? Register here.
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Welcome;
