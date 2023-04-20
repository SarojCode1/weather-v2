

import axios from 'axios';

export const register = async (name, email, password) => {
    try {
        const response = await axios.post('http://localhost:4000/api/register', {
            name,
            email,
            password,
        });

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
export const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:4000/api/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};


