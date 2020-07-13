import React, { SyntheticEvent, FormEvent } from "react";
import { IBaseFormState } from "./IBaseFormState";
import { IValidationSchema } from "../validation/IValidationSchema";
import { validationForm } from "../validation/validation";
import { ErrorInputMessage } from "./errorInputMessage";
import { IClientError } from "../validation/IClientErrors";
import { IBaseFormProps } from "./IBaseFormProps";

function formHOC(WrappedComponent : any){
    return class extends React.Component<IBaseFormProps, IBaseFormState>{
               
        constructor(props: IBaseFormProps){
            super(props);
            this.state = {
                formData:{},
                clientErrors: []
            }               
        }

        public handleChangeInput = (e: SyntheticEvent)=>{
            e.preventDefault();
            const el = e.target as HTMLInputElement;
            const name: string = el.name;
            const value: string = el.value;
        
            this.setState((state: {formData: { [x: string]: string; }; })=> {
                state.formData[name] = value;                    
            });
            this.setState({clientErrors: []});            
        }

        public handleChangeFile=(e: any)=>{            
            const name = e.target.files[0].name;

            this.setState((state)=>{
                state.formData.photo = name;
            })
        }

        public validationForm = (validationSchema: IValidationSchema) => {
            let isValid = this.clientValidation(this.state.formData, validationSchema);
            if(!isValid){
                return false;
            }
            return true;
        }        

        private clientValidation(formData: {[x:string]:string}, validationSchema: IValidationSchema): boolean{
            let validationResult = validationForm(formData, validationSchema);
            console.log(validationResult);
            this.setState({clientErrors: validationResult});
            return !Object.keys(validationResult).length;
        }

        public getClientErrors(errors: IClientError[], field: string){
            return errors
                    .filter(el=>el.field===field)
                    .map((el, i)=><ErrorInputMessage key={el.errorText+i} errorText={el.errorText}/>);
        }   
        
        public render(){
            return <WrappedComponent 
                    handleChange={this.handleChangeInput} 
                    handleChangeFile={this.handleChangeFile}
                    isValid={this.validationForm}
                    formData={this.state.formData} 
                    clientErrors={this.state.clientErrors}
                    getClientErrors={this.getClientErrors}     
                    />
        }
    } 
}

export default formHOC;
