import formHOC from "../commonForm/formHOC";
import React from "react";
import { Urls } from "../constants/urls";
import DefaultInput from "../commonForm/defaultInput";
import DefaultSelect from "../commonForm/defaultSelect";
import { IRegistrationProps } from "./IRegistrationProps";
import { IRegistrationState } from "./IRegistrationState";
import DefaultFile from "../commonForm/defaultFile";

class RegistrationForm extends React.Component<IRegistrationProps, IRegistrationState>{
    constructor(props: any){
        super(props)
        this.state = {
            validationSchema:{     
                firstName:{
                    required: true
                }, 
                lastName:{
                    required: true
                },    
                role:{
                    required: true
                },     
                login: {
                    required: true,            
                },
                password:{
                    required: true
                }           
            }
        };          
       
    }

    render(){
        return (
        <form onSubmit={(e)=>this.props.handleSubmit(e, this.state.validationSchema)}>
            <h3>Регистрация пользователя</h3>
            <DefaultInput 
                alias='firstName' 
                visualName="Имя" 
                clientErrors={this.props.clientErrors} 
                handleChange={this.props.handleChange}
                getClientErrors = {this.props.getClientErrors}
            />
            <DefaultInput 
                alias='lastName' 
                visualName="Фамилия" 
                clientErrors={this.props.clientErrors} 
                handleChange={this.props.handleChange}
                getClientErrors = {this.props.getClientErrors}
            />
            <DefaultFile
                alias="photo"
                visualName="Загрузите аватар"
                handleChange={this.props.handleChangeFile}                
            />
            <DefaultSelect
                alias='role' 
                visualName="Роль"   
                options={[{value: 'user', visualName: 'Пользователь'}, {value: 'admin', visualName: 'Администратор'}]}  
                clientErrors={this.props.clientErrors} 
                handleChange={this.props.handleChange}
                getClientErrors = {this.props.getClientErrors}
            />
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
            <button className="btn btn-primary" type="submit">Зарегистрироваться</button>
            <div className="error">{this.props.serverError}</div>
        </form>   );
    }
}
export default formHOC(RegistrationForm, Urls.registration);