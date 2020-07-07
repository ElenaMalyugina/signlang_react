import React from "react";
import { Urls } from "../constants/urls";
import { ILoginState } from "./ILoginState";
import FormHOC from '../common/formHOC';
import { ILoginProps } from "./IloginProps";

class LoginForm extends React.Component<ILoginProps, ILoginState>{
    constructor(props: ILoginProps){
        super(props);
        this.state={}
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h3>Вход в систему</h3>
                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <input className="form-control" id="login" name="login" onChange={this.props.handleChange} required/>
                    <small className="form-text error">Это обязательное поле</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input className="form-control" type="password" id="password" name="password" onChange={this.props.handleChange} required/>
                    <small className="form-text error">Это обязательное поле</small>
                </div>
                <button className="btn" type="submit" disabled={this.props.isSubmitting}>Войти</button>
                <div>{this.props.serverError}</div>
            </form>
        )
    }
}

export default FormHOC(LoginForm, Urls.login);