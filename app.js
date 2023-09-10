/*console.log(document);
var h1=document.getElementsByTagName('h1')[0];
console.log(h1);
h1.innerText = "Sain uu";
h1.style.color="red";
var h1=document.getElementsByTagName('h1')[1];
h1.style.color="blue";
h1.style.backgroundColor="aqua";*/
var inputAge = document.getElementsByTagName('input')[0];
console.log(inputAge);
var result = document.getElementsByTagName('p')[0];
console.log(result);
var currentYear=2023,brithYear;
function convert(){
    if(inputAge.value>100){
    result.innerText="Хүн ийм наслах боломжгүй"
    }else if(inputAge.value<0){
    result.innerText="Хүн ийм наслах боломжгүй"
    }else if(inputAge.value==""){
      alert("hooson baij bolohgui");
    }else{
    brithYear = currentYear - inputAge.value;
    result.innerText="Torson on :" + brithYear;
    }
    result.style.color="red";
}