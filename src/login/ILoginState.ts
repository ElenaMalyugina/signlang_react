export interface ILoginState{
    validationSchema: {
        login: {
            required: boolean,            
        },
        password:{
            required: boolean
        } 
    };
    
}