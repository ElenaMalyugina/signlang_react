import HttpHelper from "../../helpers/httpHelper";
import { getServerErrorText } from "../../helpers/getServerErrorText";
import { Urls } from "../../constants/urls";
import { REG_START, regSuccess, regError } from "../actions/registrationAction";

export const registrationMiddleware = (store: any) => (next: any) => (action: any)=>{
    if(action.type === REG_START.toString()){
        HttpHelper.httpPost(Urls.registration, action.payload)
            .then((resp:any)=>{
                resp = resp.json();
                store.dispatch(regSuccess(resp));
                console.log(resp);
            })
            .catch(err=>{
                const errorText = getServerErrorText(err.code);
                store.dispatch(regError(errorText));             
            })
    }

    return next(action);
}