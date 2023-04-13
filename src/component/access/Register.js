import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);


    };

    return (
        <>
            <div className="min-h-screen bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:w-full sm:max-w-md sm:mx-auto">
                    <h2 className="text-3xl font-extrabold text-white text-center">Register</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label htmlFor="name" className="text-white text-lg font-bold mb-2">
                        Name
                    </label>
                    <input
                        className="border-2 border-gray-300 rounded-md py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-4"
                            onClick={handleSubmit}>
                            <Link to="/HomePage" className="">
                                Register
                            </Link>
                        </button>
                    </div>
                    <p className="mt-4 text-white">
                        Already have an account?{" "}
                        <Link to="/Login" className="underline">
                            Log in here.
                        </Link>
                    </p>
                </div>
            </div>


        </>
    );
};

export default Register;
