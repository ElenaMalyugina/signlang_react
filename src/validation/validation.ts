import { IValidationSchema } from "./IValidationSchema";
import { IClientError } from "./IClientErrors";
import { clientErrors } from "../constants/clientErrors";

export function validationForm(formData: {[x:string]: string}, validationSchema: IValidationSchema): IClientError[]{
    const validationFields = Object.keys(validationSchema);
    return validationFields.reduce((acc: any, el: string)=>{
        if(validationSchema[el].required === true){
            if(!formData[el]||!formData[el].length){           
                acc = [...acc, {field: el, errorType: 'required', errorText: getClientError('required')}];
            }
        }
        return acc;
    }, []);
}

function getClientError(errorType: string): string{
    return clientErrors[errorType];
}



