import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './LoginReducer';
import { registerReducer } from './RegisterReducer';
import { loginMiddleware } from './LoginReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, loginMiddleware));

export default store;
