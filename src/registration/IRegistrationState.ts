export interface IRegistrationState{
    validationSchema:{
        firstName:{
            required: boolean;
        };
        lastName:{
            required: boolean;
        };
        role:{
            required: boolean;
        };  
        login: {
            required: boolean;          
        };
        password:{
            required: boolean;
        };      
    }
}