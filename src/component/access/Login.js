import React, { useState, useEffect, useReducer } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../Reducer/auth.API';
import { loginReducer } from '../Reducer/LoginReducer';
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin, setLoggedIn, loggedIn }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, dispatch] = useReducer(loginReducer, { isLoggedIn: false });
    // const state = useSelector(state => state.auth);
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await (login(email, password));
            if (response.error) {
                setError(response.error);
            } else {
                console.log(response);
                setLoggedIn(true);
                handleLogin({ name: response.user.name });
                navigate('/HomePage');
            }
        } catch (error) {
            console.log(error);
            setError('Something went wrong. Please try again later.');
        }
    };

    // useEffect(() => {
    //     // If the user is logged in, redirect to the home page
    //     if (state.isLoggedIn) {
    //         history.push({
    //             pathname: "/Homepage",
    //         });
    //     }
    // }, [state.isLoggedIn, history]);

    return (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-white">
                    Login
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {error && <p className="text-red-500">{error}</p>}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                Login
                            </button>
                        </div>

                    </form>
                    <div className="mt-6">
                        <p className="text-sm font-medium text-gray-700">
                            Don't have an account?{' '}
                            <Link to="/Register" className="text-indigo-600 hover:text-indigo-500">
                                Sign up here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
