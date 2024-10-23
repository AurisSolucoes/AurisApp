  
  var emailUser = document.getElementById("user-email");      
  var emailText = document.getElementById("tag");
  var loginBox = document.getElementById("login-formulario"); 
  
  emailUser.addEventListener("focus", ()=> {
   if(emailUser.value == ""){
    emailText.style.top = "3px"
    emailText.style.fontSize = ".5em"
    emailText.style.borderRadius = "10px"
    
   }
   
  })
  emailUser.addEventListener("blur", () => {
     if(emailUser.value == ""){
    emailText.style.top = "35%"
    emailText.style.background = "none"
    emailText.style.fontSize = ".8em";
     }
})