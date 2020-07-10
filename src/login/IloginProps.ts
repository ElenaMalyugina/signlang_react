import { ILoginData } from "./IloginData";
import { SyntheticEvent, FormEvent } from "react";
import { IClientError } from "../validation/IClientErrors";

export interface ILoginProps{
    formData: ILoginData;
    serverError: string;
    isSubmitting: false;
    clientErrors: IClientError[];
    handleChange: (e:SyntheticEvent)=>void;
    handleSubmit: (e:FormEvent, validationSchema: object)=>void;
    getClientErrors:(err: IClientError[], field: string)=>React.Component; 
}