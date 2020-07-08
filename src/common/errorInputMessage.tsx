import React from "react";

export function ErrorInputMessage(props:{errorText:string}){
    return <small className="form-text error">{props.errorText}</small>
}