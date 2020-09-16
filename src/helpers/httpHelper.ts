import { getServerErrorText } from "./getServerErrorText";

class HttpHelper{
    public static async httpGet(url: string): Promise<any>{
        const resp = await fetch(url)
            .then(response => response.json())
            .then(result => result)

        return resp;    
    }

    public static async httpPost(url: string, body: any): Promise<any>{
        let respCode: number = 0;
        const resp = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'              
            },
            body: JSON.stringify(body)
        })    
        .then(resp=>{
            respCode = resp.status;
            return resp.json();          
        })
        .then(resp=>{
            if(respCode>=400){
                return {
                    status: respCode,
                    _body: null,
                    error: getServerErrorText('code' + respCode) 
                }        
            }
            return {
                status: respCode,
                _body: resp,
                error: null
            }
        })
        .catch(e=>{
            //respCode = e.status;
            return {
                status: respCode,
                _body: null,
                error: getServerErrorText('code' + respCode) 
            }
        });

        return resp;

 
    }
}

export default HttpHelper;