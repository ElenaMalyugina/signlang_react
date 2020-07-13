import { ILoginData } from "./IloginData";
import { IBaseFormProps } from "../commonForm/IBaseFormProps";

export interface ILoginProps extends IBaseFormProps{
    formData: ILoginData;   
    loginStart: any; 
}