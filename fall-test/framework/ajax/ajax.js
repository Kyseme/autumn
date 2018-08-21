function ajax(options){
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();

    options.dataType = options.dataType || 'json';
    options.async = options.async || true;
    var params = getParams(options.data);
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4){
             var status = xhr.status;
             if (status >= 200 && status < 300 ){
                 options.success && options.success(xhr.responseText,xhr.responseXML);
             }else{
                 options.fail && options.fail(status);
             } 
        } 
    };
    if(options.type == 'GET'){
        xhr.open("GET",options.url + '?' + params ,options.async);
        xhr.send(null)
    }else if(options.type == 'POST'){
        xhr.open('POST',options.url,options.async);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(params);
    }
    function getParams(data) {
        var arr = [];
        for (var param in data){
            arr.push(encodeURIComponent(param) + '=' +encodeURIComponent(data[param]));
        }
        console.log(arr); 
       arr.push(('randomNumber=' + Math.random()).replace('.')); 
       console.log(arr);
        return arr.join('&');
    }

}