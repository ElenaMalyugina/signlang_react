import React, { SyntheticEvent } from "react";
import { IClientError } from "../validation/IClientErrors";

interface InputProps{
    alias: string;
    visualName: string;
    clientErrors: IClientError[];
    handleChange: (e:SyntheticEvent)=>void;
    getClientErrors: (errors: IClientError[], fieldName: string)=>React.Component;
}

interface InputState{}

class DefaultInput extends React.Component<InputProps, InputState>{
    render(){
        const errors = this.props.getClientErrors(this.props.clientErrors, this.props.alias);
        return (
            <div className="form-group">
                <label htmlFor={this.props.alias}>{this.props.visualName}</label>
                <input className="form-control" type={this.props.alias === "password" ? this.props.alias: "text"} id={this.props.alias} name={this.props.alias} onChange={this.props.handleChange}/>
                {errors}
            </div>
        );        
    }
}

export default DefaultInput