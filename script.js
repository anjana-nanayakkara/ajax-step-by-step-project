// !get request in ajax


// var getData=document.getElementById("getData");
// // console.log(getData);

// getData.addEventListener('click',()=>{
//     let xhr=new XMLHttpRequest(); 
//     xhr.open('GET','ajaxdata.txt',true);
//     // console.log("i am get request");
    
//     xhr.onprogress=function(){
//         console.log("i am prograssing");
//     }

//     xhr.onreadystatechange=function(){
//         console.log("ready state is"+xhr.readyState);
//     }
//     xhr.onload=function(){
//         if(this.status===200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log("not found");
//         }
        
//     }
//     xhr.send();
//     console.log("i am last line");
    
// })


// !post request in ajax

// var getData=document.getElementById("getData");
// // console.log(getData);

// getData.addEventListener('click',()=>{
//     let xhr=new XMLHttpRequest(); 
//     xhr.open('POST','https://fakestoreapi.com/products',true);
//     // console.log("i am get request");
    
//     xhr.onprogress=function(){
//         console.log("i am prograssing");
//     }

//     xhr.onreadystatechange=function(){
//         console.log("ready state is"+xhr.readyState);
//     }
//     xhr.onload=function(){
//         if(this.status===200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log("not found");
//         }
        
//     }
//     data={"title":"Ajax tutorial"};
//     xhr.send(data);
//     console.log("i am last line");
    
// })