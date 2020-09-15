export const REG_START = "REG_START";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_ERROR = "REG_ERROR";

export const regStart = (formData: any)=>({
    type: REG_START,
    payload: {
        data: formData        
    }
})

export const regSuccess = (userId: any)=>({
    type: REG_SUCCESS,
    payload: userId
})

export const regError = (error: any)=>({
    type: REG_ERROR,
    payload: error
})