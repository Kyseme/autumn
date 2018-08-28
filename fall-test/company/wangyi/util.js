function urlPromise(url,options){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(options.method,url,false);
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status==200){
                resolve(this.responseText);
            }else{
                reject();
            }
        };
        xhr.setRequestHeader(options.header,options.value);
        if(options.method.upperCase == 'GET'){
            xhr.send(null);
        }else{
            xhr.send(options.data);
        }
    });
}