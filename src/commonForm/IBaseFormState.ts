import { IClientError } from "../validation/IClientErrors";

export interface IBaseFormState{
    formData: {[x:string]:string};
    isSubmitting: boolean;
    serverError: string;
    clientErrors: IClientError[];
}