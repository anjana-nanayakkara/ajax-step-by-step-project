let getData=document.getElementById("getData");
getData.addEventListener('click',()=>{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.com/products',true);

    xhr.onreadystatechange=function(){
        console.log("ready state is"+xhr.readyState);
        
    }

    xhr.onload=function(){
        if(this.status===200){
            let objectData=JSON.parse(this.responseText); 
            console.log(objectData);
            let table_data=document.getElementById("table_data");
            data=`<thead class="table-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>`;

          for(value in objectData){
            data+=`<tr>
            <td>${objectData[value].title}</td>
            <td>${objectData[value].price}</td>
            <td><img src='${objectData[value].title}'</td>
            
            </tr>`;

          }


            table_data.innerHTML=data;

        }
        else{
          console.log("api link not accecible")
        }
    }
    xhr.send();
})