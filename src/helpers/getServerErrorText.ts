import { ServerErrors } from "../constants/serverErrors";

export function getServerErrorText(errCode: string): string{            
    const key: string = errCode;
    const errorText = ServerErrors[key];
    if(!errorText){
        return ServerErrors.defaultText;
    }                     
    return errorText;
}