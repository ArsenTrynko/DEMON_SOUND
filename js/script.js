



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

