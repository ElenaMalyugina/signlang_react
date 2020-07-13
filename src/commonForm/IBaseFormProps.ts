import { IClientError } from "../validation/IClientErrors";
import { SyntheticEvent, FormEvent } from "react";

export interface IBaseFormProps{
    formData: object;
    serverError: string;
    isLoading: boolean;
    clientErrors: IClientError[];
    handleChange: (e:SyntheticEvent)=>void;
    handleChangeFile?: ()=>void;
    handleSubmit: (e:FormEvent, validationSchema: object, action: any)=>void;
    isValid: (validationSchema: object)=>boolean;
    getClientErrors:(err: IClientError[], field: string)=>React.Component; 
}