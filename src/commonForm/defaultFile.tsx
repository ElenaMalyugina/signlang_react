import React from "react";

class DefaultFile extends React.Component<any, any>{
    render(){
        return (
            <div className="form-group">
                <label htmlFor="file">Фото</label>
                <input 
                    className="form-control" 
                    type="file" 
                    id="photo" 
                    name="photo" 
                    onChange={this.props.handleChange}/>               
            </div>
        )
    }
}

export default DefaultFile;