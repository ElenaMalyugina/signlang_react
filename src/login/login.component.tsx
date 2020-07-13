import React, { FormEvent } from "react";
import { ILoginState } from "./ILoginState";
import FormHOC from '../commonForm/formHOC';
import { ILoginProps } from "./IloginProps";
import DefaultInput from "../commonForm/defaultInput";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {loginStart} from "../redux/actions/loginActions";

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

    handleSubmit(e:FormEvent, validationSchema: any) {
        e.preventDefault();
        const isValid = this.props.isValid(validationSchema);
        if(!isValid) return;
        this.props.loginStart(this.props.formData);
    }

    render(){
        
        return (
            <>
            <form className="t-loginForm" onSubmit={(e)=>this.handleSubmit(e, this.state.validationSchema)}>
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
                
                <button className="btn btn-primary" type="submit" disabled={this.props.isLoading}>Войти</button>
                <div className="error">{this.props.serverError}</div>
            </form>
            <Link to="/registration">Регистрация нового пользователя</Link>
            </>
        )
    }
  
}

const mapStateToProps = (state: any)=>{
    return{    
        userData: state.login, 
        serverError: state.login.error,
        isLoading: state.login.isLoading
    }};

const mapDispatchToProps = {
    loginStart
}


export default FormHOC(connect(mapStateToProps, mapDispatchToProps)(LoginForm));