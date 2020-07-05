class HttpHelper{
    httpGet(url: string): Promise<any>{
        return fetch(url)
            .then(response => response.json())
            .then(result => result)
    }

    httpPost(url: string, body: any): Promise<any>{
        return fetch(url, 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(body)
                    }
                )
            .then(response =>{ 
               if(response.status === 200){
                return response.json();
               }
               else{
                   return {
                       error: 'code' + response.status
                    }
               }               
            })
            .then(
                result => result              
            )
          
    }
}

export default HttpHelper;