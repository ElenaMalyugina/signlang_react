import {REG_START, REG_SUCCESS, REG_ERROR} from '../actions/registrationAction';

const initialState={
    login: '',
    password: '',
    isLoading: false
}

export default (state: any= initialState, action: any)=>{
    switch(action.type){
        case REG_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case REG_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                userData: action.payload
            };
        case REG_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}