const data1=document.getElementById("data1");
const data2=document.getElementById("data2");
const serverresponse=document.getElementById("response");
const get=document.getElementById("get");
const sp_response=document.getElementById("sp-res");

function send(opcode){
    console.log(opcode)
    let request = new XMLHttpRequest();
    var url = "https://us-central1-cs4843-q8.cloudfunctions.net/gcf-q8?operation="+opcode+"&data1="+data1.value+"&data2="+data2.value
    get.innerText="GET: " + url;
    request.open("GET",url,true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(null);
    request.onreadystatechange=function(){
        switch(this.readyState){
            case 0:
                serverresponse.innerText="Not initialized connection";
                break;
            case 1:
                serverresponse.innerText="Server connection established";
                break;
            case 2:
                serverresponse.innerText="Server recieved the request";
                break;
            case 3:
                serverresponse.innerText="Server is processing the request";
                break;
            case 4:
                if(request.status!=200){
                    serverresponse.innerText="Server gave the error "+request.status+": "+this.responseText;
                }else{
                    serverresponse.innerText=this.responseText;
                }
                break;
        }
    }
}
function pushpub(){
    sp_response.innerText="Order submited";
    
    // let request = new XMLHttpRequest();
    // request.open("GET","https://us-central1-voltaic-inn-345501.cloudfunctions.net/quiz8-ovv180?publish=true",true);
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // request.send(null);
    // request.onreadystatechange=function(){
    //     switch(this.readyState){
    //         case 0:
    //             serverresponse.innerText="Not initialized connection";
    //             break;
    //         case 1:
    //             serverresponse.innerText="Server connection established";
    //             break;
    //         case 2:
    //             serverresponse.innerText="Server recieved the request";
    //             break;
    //         case 3:
    //             serverresponse.innerText="Server is processing the request";
    //             break;
    //         case 4:
    //             if(request.status!=200){
    //                 serverresponse.innerText="Server gave the error "+request.status+": "+this.responseText;
    //             }else{
    //                 serverresponse.innerText=this.responseText;
    //             }
    //             break;
    //     }
    // }
}
function add(){
    send("add");
}
function sub(){
    send("sub");
}
function mul(){
    send("mul");
}
function div(){
    send("div");
}