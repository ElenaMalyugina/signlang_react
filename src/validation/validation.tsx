import { IValidationSchema } from "./IValidationSchema";
import { IClientError } from "./IClientErrors";
import { clientErrors } from "../constants/clientErrors";
import React from "react";

function getClientError(errorType: string): string{
    return clientErrors[errorType];
}

function requiredValidator(el:string, validationSchema:IValidationSchema, formData:{[x:string]: string}): IClientError | void{
    if(validationSchema[el].required === true){
        if(!formData[el]||!formData[el].length){           
            return {field: el, errorType: 'required', errorText: getClientError('required')};
        }
    }
}

/////////////////////////////////Основное/////////////////////////////////////
function ValidationHOC(WrappedComponent: typeof React.Component){
    return class extends React.Component{
        validationForm(formData: {[x:string]: string}, validationSchema: IValidationSchema): IClientError[]{
            const validationFields = Object.keys(validationSchema);
            return validationFields.reduce((acc: IClientError[], el: string)=>{
                const result: (IClientError | void)[]= [
                    requiredValidator(el, validationSchema, formData)            
                ];
                if(result){
                    const clearResult: IClientError[] = result.filter(el=>el) as IClientError[];
                    acc = [...acc, ...clearResult]
                }
                return acc;
            }, []);
        }
        
        render(){
            return <WrappedComponent validationForm={this.validationForm} {...this.props}/>
        }
    }
}

export default ValidationHOC;



