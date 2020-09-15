import { LOGIN_START, loginSuccess, loginError } from "../actions/loginActions";
import HttpHelper from "../../helpers/httpHelper";
import { Urls } from "../../constants/urls";

export const loginMiddleware = (store: any) => (next: any) => (action: any)=>{
    if(action.type === LOGIN_START.toString()){
        HttpHelper.httpPost(Urls.login, action.payload)
            .then((resp:any)=>{                             
                if(resp.error){
                   store.dispatch(loginError(resp.error));                   
                }
                else if(resp._body){
                    store.dispatch(loginSuccess(resp._body));
                }
            })
    }


    return next(action);
}