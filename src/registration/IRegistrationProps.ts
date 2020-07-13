import { IRegistrationData } from "./IRegistrationData";
import { IBaseFormProps } from "../commonForm/IBaseFormProps";

export interface IRegistrationProps extends IBaseFormProps{
    formData: IRegistrationData;
    regStart: any;
    handleChangeFile: ()=>void;    
}