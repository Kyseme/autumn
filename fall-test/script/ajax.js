var request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject('Microsoft.XMLHTTP');
}

request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status===200){
        console.log(request.responseText);
    }else{
        console.log('fail');
    }
};
request.open('GET','/getuser/name');
request.send();
/**
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready
 */