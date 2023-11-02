
// import { get } from 'axios';

// const axiosRequest=require('axios')
// axiosRequest
// .get('https://www.boredapi.com/api/activity')
// .then(response=>{
//     console.log(`you could ${response.data.activity}`);
 
// })
// .catch(error=>{
//     console.error(`Error!${error}`)
// })

var apiUrl='https://www.boredapi.com/api/activity';

const Element=document.getElementById("content");
const Button=document.getElementById("btn");

Button.addEventListener('click',function(){
    loadApi(Element)
})


function loadApi(holder){
fetch(apiUrl)
.then(response=>{
    var x=response.json();
    console.log(x)
    return x;
})
.then(data=>{
    console.log(`You should do ${data.activity}`);
    var content=data.activity
    holder.textContent=`"${content}"`;

})
.catch(err=>{
    console.log("There was an error", err);
})

}
