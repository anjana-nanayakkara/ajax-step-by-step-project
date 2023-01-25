var getData=document.getElementById("getData");
// console.log(getData);

getData.addEventListener('click',()=>{
    let xhr=new XMLHttpRequest(); 
    xhr.open('GET','ajaxdata.txt',true);
    // console.log("i am get request");
    
    xhr.onprogress=function(){
        console.log("i am prograssing");
    }

    xhr.onreadystatechange=function(){
        console.log("ready state is"+xhr.readyState);
    }
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log("page not found");
        }
        
    }
    xhr.send();

    
})