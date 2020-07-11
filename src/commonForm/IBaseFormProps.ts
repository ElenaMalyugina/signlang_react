import { IClientError } from "../validation/IClientErrors";
import { SyntheticEvent, FormEvent } from "react";

export interface IBaseFormProps{
    formData: object;
    serverError: string;
    isSubmitting: false;
    clientErrors: IClientError[];
    handleChange: (e:SyntheticEvent)=>void;
    handleChangeFile?: ()=>void;
    handleSubmit: (e:FormEvent, validationSchema: object)=>void;
    getClientErrors:(err: IClientError[], field: string)=>React.Component; 
}