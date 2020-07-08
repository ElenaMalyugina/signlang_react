import React, { SyntheticEvent, FormEvent } from "react";
import { ServerErrors } from "../constants/serverErrors";
import HttpHelper from "./httpHelper";
import { IBaseFormState } from "./IBaseFormState";
import { IValidationSchema } from "../validation/IValidationSchema";
import { validationForm } from "../validation/validation";

function formHOC(WrappedComponent: typeof React.Component, submittedFormUrl: string){
    return class extends React.Component<{}, IBaseFormState>{
        private httpHelper:HttpHelper = new HttpHelper();

        constructor(props: {}){
            super(props);
            this.state = {
                formData:{},
                isSubmitting: false, 
                serverError: '',
                clientErrors: {}
            }
        }

        public handleChange = (e: SyntheticEvent)=>{
            e.preventDefault();
            const el = e.target as HTMLInputElement;
            const name: string = el.name;
            const value: string = el.value;
        
            this.setState((state: {formData: { [x: string]: string; }; })=> {
                state.formData[name] = value;                    
            });
            this.setState({clientErrors: {}});
        }

        public handleSubmit = (event: FormEvent<HTMLFormElement>, validationSchema: IValidationSchema) => {
            event.preventDefault();
            console.log(this.state.formData);            
            this.setState({isSubmitting: true});
            let isValid = this.clientValidation(this.state.formData, validationSchema);
            if(!isValid){
                this.setState({isSubmitting: false});
                return false;
            }
            this.httpHelper.httpPost(submittedFormUrl, this.state.formData)
                .then((resp:any)=>{
                    console.log(resp);
                    this.setState({isSubmitting: false});
                    
                    if(resp.error){
                        const errorText = this.getServerErrorText(resp.error);
                        this.setState({
                            serverError: errorText
                        });
                        
                    }
                }) 
        }

        private clientValidation(formData: {[x:string]:string}, validationSchema: IValidationSchema): boolean{
            let validationResult = validationForm(formData, validationSchema);
            console.log(validationResult);
            this.setState({clientErrors: validationResult});
            return !Object.keys(validationResult).length;
        }

        private getServerErrorText=(errCode: string): string=>{            
            const key: string = errCode;
            const errorText = ServerErrors[key];
            if(!errorText){
                return ServerErrors.defaultText;
            }                     
            return errorText;
        }
        
        public render(){
            return <WrappedComponent 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        formData={this.state.formData} 
                        isSubmitting={this.state.isSubmitting}
                        clientErrors={this.state.clientErrors}
                        serverError={this.state.serverError}
                        validation={this.clientValidation}
                        {...this.props}/>
        }
    }
}

export default formHOC;
