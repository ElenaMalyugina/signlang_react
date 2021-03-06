import React, { SyntheticEvent, FormEvent } from "react";
import { ServerErrors } from "../constants/serverErrors";
import HttpHelper from "../helpers/httpHelper";
import { IBaseFormState } from "./IBaseFormState";
import { IValidationSchema } from "../validation/IValidationSchema";
import { validationForm } from "../validation/validation";
import { ErrorInputMessage } from "./errorInputMessage";
import { IClientError } from "../validation/IClientErrors";

function formHOC(WrappedComponent: typeof React.Component, submittedFormUrl: string){
    return class extends React.Component<{}, IBaseFormState>{
        private httpHelper:HttpHelper = new HttpHelper();
        
        constructor(props: {fileRef: any}){
            super(props);
            this.state = {
                formData:{},
                isSubmitting: false, 
                serverError: '',
                clientErrors: []
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
            this.setState({clientErrors: [], serverError:''});
        }

        public handleChangeFile=(e: any)=>{
            const name = e.target.files[0].name;

            this.setState((state)=>{
                state.formData.photo = name;
            })
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

        public getClientErrors(errors: IClientError[], field: string){
            return errors
                    .filter(el=>el.field===field)
                    .map((el, i)=><ErrorInputMessage key={el.errorText+i} errorText={el.errorText}/>);
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
                    handleChangeFile={this.handleChangeFile}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData} 
                    isSubmitting={this.state.isSubmitting}
                    serverError={this.state.serverError}
                    clientErrors={this.state.clientErrors}
                    getClientErrors={this.getClientErrors}
                    {...this.props}/>
        }
    } 
}

export default formHOC;
