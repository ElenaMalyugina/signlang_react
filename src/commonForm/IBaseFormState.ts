import { IClientError } from "../validation/IClientErrors";

export interface IBaseFormState{
    formData: {[x:string]:string};
    clientErrors: IClientError[];
}