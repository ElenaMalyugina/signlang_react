export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginStart = (formData: any)=>({
    type: LOGIN_START,
    payload: {
        login: formData.login,
        password: formData.password
    }
})

export const loginSuccess = (userData: any)=>({
    type: LOGIN_SUCCESS,
    payload: userData
})

export const loginError = (error: any)=>({
    type: LOGIN_ERROR,
    payload: error
})