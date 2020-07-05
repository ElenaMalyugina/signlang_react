import { ILoginData } from "./IloginData";

export interface ILoginState{
    formData: ILoginData,
    isSubmitting: boolean,
    serverError: string
}