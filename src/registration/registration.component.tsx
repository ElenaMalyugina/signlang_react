import formHOC from "../commonForm/formHOC";
import React from "react";
import { Urls } from "../constants/urls";
import DefaultInput from "../commonForm/defaultInput";
import DefaultSelect from "../commonForm/defaultSelect";

class RegistrationForm extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        this.state ={
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
        }
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
            

        {/*<div class="form-group">
            <label for="lastName">Фамилия</label>
            <input class="form-control" [(ngModel)]="userData.lastName" id="lastName" name="lastName" required #lastName="ngModel">
            <small *ngIf="lastName.invalid && (lastName.dirty || lastName.touched) && lastName.errors.required" class="form-text error">Это обязательное поле</small>
        </div>
        <div class="form-group">
            <label for="file">Фото</label>
            <input class="form-control" type="file" (change)="addPicture($event)" id="photo" name="photo">      
            <small *ngIf="fileTypeError" class="form-text error">Нужно загрузить картинку. Проверьте тип файла</small>  
        </div>
        <div class="form-group">
            <label for="role">Роль</label>
            <select class="form-control" [(ngModel)]="userData.role" id="role" name="role" #role="ngModel">
                <option value="user" >Пользователь</option>
                <option value="admin">Администратор</option>
            </select>
            <small *ngIf="role.invalid && (role.dirty || role.touched) && role.errors.required" class="form-text error">Это обязательное поле</small>
        </div>
        <div class="form-group">
            <label for="login">Логин</label>
            <input class="form-control" [(ngModel)]="userData.login" id="login" name="login" required #login="ngModel">
            <small *ngIf="login.invalid && (login.dirty || login.touched) && login.errors.required" class="form-text error">Это обязательное поле</small>
        </div>
        <div class="form-group">
            <label for="password">Пароль</label>
            <input class="form-control" type="password" [(ngModel)]="userData.password" id="password" name="password" required #password="ngModel">
            <small *ngIf="password.invalid && (password.dirty || password.touched) && password.errors.required" class="form-text error">Это обязательное поле</small>
        </div>*/}
            <button className="btn" type="submit">Зарегистрироваться</button>
            <div className="error">{this.props.serverError}</div>
        </form>   );
    }
}

export default formHOC(RegistrationForm, Urls.registration);