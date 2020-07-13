import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/loginActions'

const initialState={
    login: '',
    password: '',
    isLoading: false
}

export default (state: any= initialState, action: any)=>{
    switch(action.type){
        case LOGIN_START: 
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                userData: action.payload
            };
        case LOGIN_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}