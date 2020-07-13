import { LOGIN_START, loginSuccess, loginError } from "../actions/loginActions";
import HttpHelper from "../../helpers/httpHelper";
import { Urls } from "../../constants/urls";
import { getServerErrorText } from "../../helpers/getServerErrorText";

export const loginMiddleware = (store: any) => (next: any) => (action: any)=>{
    if(action.type === LOGIN_START.toString()){
        HttpHelper.httpPost(Urls.login, action.payload)
            .then((resp:any)=>{
                const respCode = resp.status;
                if(respCode>=400){
                    const errorText = getServerErrorText('code' + respCode);
                    store.dispatch(loginError(errorText));     
                }
                else{
                    resp = resp.json();
                    store.dispatch(loginSuccess(resp));
                }
            })
            .catch(err=>{
                console.log(err);
                const errorText = getServerErrorText('code' + err);
                store.dispatch(loginError(errorText));             
            })
    }


    return next(action);
}