import React, { SyntheticEvent, FormEvent } from "react";
import HttpHelper from "../common/httpHelper";
import { Urls } from "../constants/urls";
import { ILoginState } from "./ILoginState";
import { Errors } from "../constants/errors";

class LoginForm extends React.Component<{}, ILoginState>{
    httpHelper:HttpHelper = new HttpHelper();

    handleChange = (e: SyntheticEvent): void =>{
        e.preventDefault();
        const el = e.target as HTMLInputElement;
        const name: string = el.name;
        const value: string = el.value;
       
        this.setState((state: {formData: { [x: string]: string; }; })=> {
            state.formData[name] = value;    
        });
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({isSubmitting: true});
        this.httpHelper.httpPost(Urls.login, this.state.formData)
            .then(resp=>{
                console.log(resp);
                this.setState({isSubmitting: false});
                
                if(resp.error){
                    const key: string = resp.error;
                    const ErrorText = Errors[key];
                    this.setState({
                        serverError: ErrorText
                    });
                    
                }
            }) 
    }
    

    constructor(props:{}){
        super(props);
        this.state={
            formData: {
                login: '',
                password: ''
            },
            isSubmitting: false,
            serverError: ''
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Вход в систему</h3>
                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <input className="form-control" id="login" name="login" onChange={this.handleChange} required/>
                    <small className="form-text error">Это обязательное поле</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input className="form-control" type="password" id="password" name="password" onChange={this.handleChange} required/>
                    <small className="form-text error">Это обязательное поле</small>
                </div>
                <button className="btn" type="submit" disabled={this.state.isSubmitting}>Войти</button>
                <div>{this.state.serverError}</div>
            </form>
        )
    }
}

export default LoginForm;