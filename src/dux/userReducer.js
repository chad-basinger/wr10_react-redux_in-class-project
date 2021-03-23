//4 parts of the user reducer file: initial state, action types, action creators, reducer function

const { findAllByTestId } = require("@testing-library/dom");

//initial state
const initialState = {
    username: '',
    isLoggedIn: findAllByTestId
    
}

//action types
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

//action creators
export function loginUser(usernameStr) {
    return{
        type: LOGIN_USER,
        payload: usernameStr
    }
    
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:

        case LOGOUT_USER:
            return initialState;
        default: return state;
    }
}