let password= document.getElementById('password');
// module.exports = validatePassword;
window.validatePassword = function validatePassword(){
    
	let exp = /^[0-9]{6,8}$/;
	let result = exp.test(password.value);  
  if(!result){
    $('#myModal').modal()
    return false;   
	}else{
    return true; 
  }


}

//Registro
function registerWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;
    validatePassword()
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario creado con éxito");
            window.location="home.html";
        })
        .catch((error)=>{
            $('#myModal').modal();
          let msn = document.getElementById("modalP");
         if (error.code) {
          msn.innerHTML = error.message;
       }
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
           
        });
}



