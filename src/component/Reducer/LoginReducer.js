import axios from "axios";

const initialState = {
    email: '',
    password: '',
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        default:
            return state;
    }
};

export const loginMiddleware = (store) => next => async (action) => {
    if (action.type === 'LOGIN_REQUEST') {
        const { email, password } = action.payload
        console.log(email);
        try {
            const response = await axios.post('http://localhost:4000/api/login', { email, password });
            console.log(response);
            if (response.status === 200) {
                // If authentication is successful, dispatch a success action
                store.dispatch({ type: 'LOGIN_SUCCESS', payload: 'Authentication successful!' });
            } else {
                // If authentication fails, dispatch a failure action
                store.dispatch({ type: 'LOGIN_FAILURE', payload: 'Authentication failed. Please check your username and password and try again.' });
            }
        } catch (error) {
            console.error(error);
            store.dispatch({ type: 'LOGIN_FAILURE', payload: 'Authentication failed. Please try again later.' });
        }
    }

    return action;
};










