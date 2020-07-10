import React, { SyntheticEvent } from "react";
import { IClientError } from "../validation/IClientErrors";

interface SelectOption{
    visualName: string;
    value:string;
}

interface SelectProps{
    alias: string;
    visualName: string;
    clientErrors: IClientError[];
    options: SelectOption[];
    handleChange: (e:SyntheticEvent)=>void;
    getClientErrors: (errors: IClientError[], fieldName: string)=>React.Component;
}

interface InputState{}

class DefaultSelect extends React.Component<SelectProps, InputState>{
    render(){
        const errors = this.props.getClientErrors(this.props.clientErrors, this.props.alias);
        const options = this.props.options.map((el:SelectOption)=><option key={el.value} value={el.value}>{el.visualName}</option>)
        return (
            <div className="form-group">
                <label htmlFor={this.props.alias}>{this.props.visualName}</label>
                <select className="form-control" id={this.props.alias} name={this.props.alias} onChange={this.props.handleChange}>
                    <option value=''></option>
                    {options}
                </select>    
                {errors}
            </div>
        );        
    }
}

export default DefaultSelect