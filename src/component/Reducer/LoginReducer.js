

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
        const { email, password } = store.getState().login;
        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
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





