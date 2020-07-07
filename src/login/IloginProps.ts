import { ILoginData } from "./IloginData";
import { SyntheticEvent, FormEvent } from "react";

export interface ILoginProps{
    formData: ILoginData,
    serverError: string,
    isSubmitting: false,
    handleChange: (e:SyntheticEvent)=>void,
    handleSubmit: (e:FormEvent)=>void
}