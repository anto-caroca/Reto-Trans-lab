//Registro
function registerWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario creado con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
            // aca va el modal aviso de error
            $('#myModal').modal().innerHTML = $('#myModal').modal(error.code) // funcionará????
          $('#myModal').modal().innerHTML = $('#myModal').modal(error.message) // ???
        });
}

let password= document.getElementById('password');

function validatePassword(){

	let exp = /^[0-9]{4,8}$/;
	let result = exp.test(password.value);
      
  if(!result){
    $('#myModal').modal()
        
	}else{
    return true; 
  }
      
}  