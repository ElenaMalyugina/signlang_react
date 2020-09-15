import HttpHelper from "../../helpers/httpHelper";
import { Urls } from "../../constants/urls";
import { REG_START, regSuccess, regError } from "../actions/registrationAction";

export const registrationMiddleware = (store: any) => (next: any) => (action: any)=>{
    if(action.type === REG_START.toString()){
        HttpHelper.httpPost(Urls.registration, action.payload.data)
        .then((resp:any)=>{                             
            if(resp.error){
               store.dispatch(regError(resp.error));                   
            }
            else if(resp._body){               
                store.dispatch(regSuccess(resp._body.id));
            }
        })
    }

    return next(action);
}