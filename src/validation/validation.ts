import { IValidationSchema } from "./IValidationSchema";
import { IClientErrors } from "./IClientErrors";
import { clientErrors } from "../constants/clientErrors";

export function validationForm(formData: {[x:string]: string}, validationSchema: IValidationSchema): IClientErrors{
    const validationFields = Object.keys(validationSchema);
    return validationFields.reduce((acc: any, el: string)=>{
        if(validationSchema[el].required === true){
            if(!formData[el]||!formData[el].length){           
                acc[el] = clientErrors.required;
            }
        }
        return acc;
    }, {});
}



