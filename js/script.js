


function validate(){
var name = document.getElementById("name");
var phone = document.getElementById("phone"); 

if(!name.value){
	name.style.border = "2px solid red";
	return false;
   }

   if(!phone.value){
	phone.style.border = "2px solid red";
	return false;
   }

return true;  

}



var x = document.getElementById('myBtn')
x.addEventListener('click',() => {alert('click')});

var x = document.getElementById('myBtn1')
x.addEventListener('mouseover',() => {alert('mouseover')});

var x = document.getElementById('myBtn2')
x.addEventListener('mouseout', () => {alert('mouseout')});




