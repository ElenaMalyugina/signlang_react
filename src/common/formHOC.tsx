import React, { SyntheticEvent, FormEvent } from "react";
import { Errors } from "../constants/errors";
import HttpHelper from "./httpHelper";
import { IBaseFormState } from "./IBaseFormState";

function formHOC(WrappedComponent: typeof React.Component, submittedFormUrl: string){
    return class extends React.Component<{}, IBaseFormState>{
        private httpHelper:HttpHelper = new HttpHelper();

        constructor(props: {}){
            super(props);
            this.state = {
                formData:{},
                isSubmitting: false, 
                serverError: ''
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
        }

        public handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(this.state.formData);
            this.setState({isSubmitting: true});
            this.httpHelper.httpPost(submittedFormUrl, this.state.formData)
                .then((resp:any)=>{
                    console.log(resp);
                    this.setState({isSubmitting: false});
                    
                    if(resp.error){
                        const errorText = this.getErrorText(resp.error);
                        this.setState({
                            serverError: errorText
                        });
                        
                    }
                }) 
        }

        private getErrorText=(errCode: string): string=>{            
            const key: string = errCode;
            const errorText = Errors[key];
            if(!errorText){
                return Errors.defaultText;
            }                     
            return errorText;
        }
        
        public render(){
            return <WrappedComponent 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        formData={this.state.formData} 
                        isSubmitting={this.state.isSubmitting}
                        serverError={this.state.serverError}
                        {...this.props}/>
        }
    }
}

export default formHOC;
