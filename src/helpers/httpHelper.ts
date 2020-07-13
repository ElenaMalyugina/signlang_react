class HttpHelper{
    public static httpGet(url: string): Promise<any>{
        return fetch(url)
            .then(response => response.json())
            .then(result => result)
    }

    public static httpPost(url: string, body: any): Promise<any>{
        return fetch(url, 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(body)
                    }
                )
                
            /*.then(response =>{ 
                responseCode = response.status;
                try{
                    return response.json();
                }
                catch(err){}                
            })
            .then(
                result => result              
            )
            .catch(err=>{
                return 'code' + responseCode                
            })*/
          
    }
}

export default HttpHelper;