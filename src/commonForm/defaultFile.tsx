import React from "react";
import { InputProps } from "./defaultInput";

interface IFileInputProps extends InputProps{

}

class DefaultFile extends React.Component<IFileInputProps, {}>{
    render(){
        return (
            <div className="form-group">
                <label htmlFor={this.props.alias}>{this.props.visualName}</label>
                <input 
                    className="form-control" 
                    type="file" 
                    id={this.props.alias} 
                    name={this.props.alias}
                    onChange={this.props.handleChange}/>               
            </div>
        )
    }
}

export default DefaultFile;