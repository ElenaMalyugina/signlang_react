import FormHOC from "../commonForm/formHOC";
import React, { FormEvent } from "react";
import DefaultInput from "../commonForm/defaultInput";
import DefaultSelect from "../commonForm/defaultSelect";
import { IRegistrationProps } from "./IRegistrationProps";
import { IRegistrationState } from "./IRegistrationState";
import DefaultFile from "../commonForm/defaultFile";
import { connect } from "react-redux";
import {regStart} from "../redux/actions/registrationAction";

class RegistrationForm extends React.Component<IRegistrationProps, IRegistrationState>{
    constructor(props: IRegistrationProps){
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

    handleSubmit(e:FormEvent, validationSchema: any) {
        e.preventDefault();
        const isValid = this.props.isValid(validationSchema);
        if(!isValid) return;
        this.props.regStart(this.props.formData);
    }

    componentDidUpdate(){
        if(this.props.userId){
            debugger;
            window.location.href="/";
        }
    }

    render(){
        return (
        <form onSubmit={(e)=>this.handleSubmit(e, this.state.validationSchema)}>
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
                clientErrors={this.props.clientErrors}   
                getClientErrors = {this.props.getClientErrors}           
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

const mapStateToProps=(state: any)=>{
    debugger;
    return{
        serverError: state.reg.error,
        isLoading: state.reg.isLoading,
        userId: state.reg.userId
    }
};
const mapDispatchToProps = {
    regStart
};

export default FormHOC(connect(mapStateToProps, mapDispatchToProps)(RegistrationForm));