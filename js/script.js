
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

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

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

var x = document.getElementById('myBtn')
x.addEventListener('click',() => {alert('click')});

var x = document.getElementById('myBtn1')
x.addEventListener('mouseover',() => {alert('mouseover')});

var x = document.getElementById('myBtn2')
x.addEventListener('mouseout', () => {alert('mouseout')});




/* ////////////////////////////////////////переключатель тем//////////////////////////////////////////////////////////// */

   var checkbox = document.querySelector('input[name=theme]');

   checkbox.addEventListener('change', function() {
     if(this.checked) {
           trans()
                document.documentElement.setAttribute('data-theme', 'dark')
       } else {
          trans()
                document.documentElement.setAttribute('data-theme', 'light')
        }
     })

     let trans = () => {
         document.documentElement.classList.add('transition');
          window.setTimeout(() => {
              document.documentElement.classList.remove('transition')
          }, 1000)
      }

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */