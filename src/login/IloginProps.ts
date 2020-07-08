import { ILoginData } from "./IloginData";
import { SyntheticEvent, FormEvent } from "react";
import { IClientErrors } from "../validation/IClientErrors";



export interface ILoginProps{
    formData: ILoginData,
    serverError: string,
    clientErrors: IClientErrors,
    isSubmitting: false,
    handleChange: (e:SyntheticEvent)=>void,
    handleSubmit: (e:FormEvent, validationSchema: object)=>void,   
}