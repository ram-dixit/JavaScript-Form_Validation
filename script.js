let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;
function validateForm(){
   if(username.value == ""){
       document.getElementById("userError").innerHTML = "User name is empty!";
       flag = 0;
   }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User name required minimum 3 char!";
        flag = 0;
   }else{
    document.getElementById("userError").innerHTML = "";
    flag = 1;
   }

   if(password.value == ""){
    document.getElementById("passError").innerHTML = "Password field is empty!";
    flag = 0
   }
   else if(password.value.length < 6){
        document.getElementById("passError").innerHTML = "Password must be 6 char!";
        flag = 0;
    }else{
    document.getElementById("passError").innerHTML = "";
    flag = 1;
}
  if(flag){
     return true;
  }else{
     return false;
  }
}