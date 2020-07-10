import React from "react";
import { Urls } from "../constants/urls";
import { ILoginState } from "./ILoginState";
import FormHOC from '../commonForm/formHOC';
import { ILoginProps } from "./IloginProps";
import DefaultInput from "../commonForm/defaultInput";
import { Link } from "react-router-dom";

class LoginForm extends React.Component<ILoginProps, ILoginState>{
    constructor(props: ILoginProps){
        super(props);

        //в стейте, тк потенциально возможны изменения по ходу заполнения формы 
        //если не будет - вынесу в константу-конфиг
        this.state = {
            validationSchema: {
                login: {
                    required: true,            
                },
                password:{
                    required: true
                }        
            }
        }  
    }

    render(){
        
        return (
            <>
            <form className="t-loginForm" onSubmit={(e)=>this.props.handleSubmit(e, this.state.validationSchema)}>
                <h3>Вход в систему</h3>
                <DefaultInput
                    alias='login' 
                    visualName="Логин" 
                    clientErrors={this.props.clientErrors} 
                    handleChange={this.props.handleChange}
                    getClientErrors = {this.props.getClientErrors}
                />
                <DefaultInput
                    alias='password' 
                    visualName="Пароль" 
                    clientErrors={this.props.clientErrors} 
                    handleChange={this.props.handleChange}
                    getClientErrors = {this.props.getClientErrors}
                />
                
                <button className="btn" type="submit" disabled={this.props.isSubmitting}>Войти</button>
                <div className="error">{this.props.serverError}</div>
            </form>
            <Link to="/registration">Регистрация нового пользователя</Link>
            </>
        )
    }
}

export default FormHOC(LoginForm, Urls.login);