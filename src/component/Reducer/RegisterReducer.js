import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth.API';

const initialState = {
    name: '',
    email: '',
    password: ''
};

const registerSlice = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        reset(state) {
            state.name = '';
            state.email = '';
            state.password = '';

        },
    },
});

export const {
    setName,
    setEmail,
    setPassword
} = registerSlice.actions;



export const registerUser = (name, email, password) => async (dispatch) => {

    try {
        const response = await register(name, email, password);
        dispatch(setName(name));
        dispatch(setEmail(email));
        dispatch(setPassword(password));
        return response
    } catch (error) {
        dispatch(error.message);
    }
};
export const registerReducer = registerSlice.reducer;
