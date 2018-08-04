/*let password= document.getElementById('password');
function validatePassword(){
	let exp = /^[0-9]{6,8}$/;
	let result = exp.test(password.value);   
  if(!result){
    $('#myModal').modal()     
	}else{
    return window.location="home.html"; 
  }    
}  */

//Login
function loginWithFirebase(){
  const emailValue = email.value;
  const passwordValue = password.value;

  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
          console.log("Usuario inició sesión con éxito");
          window.location="home.html";
      })
      .catch((error)=>{
          console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
          console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
         //alert('contraseña inválida');
         $('#myModal').modal();
          let msn = document.getElementById("modalP");
         if (error.code) {
          msn.innerHTML = error.message;
       }

      });
}

/*const renderBipBalance = document.getElementById("renderBipBalance");
let storeBipBalance;
const boton= document.getElementById("btn-consultar-saldo");


boton.addEventListener("click", event=>{
let numBip = document.getElementById('number').value;


async function fetchBip(){
  const bip = await fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numBip}`)
  const dataBip = await bip.json()
  console.log(dataBip);
  let arrBip = Object.entries(dataBip)
  console.log(arrBip[2][1])
  storeBipBalance = arrBip[2][1];
  renderBipBalance.innerHTML = "su saldo es: "+storeBipBalance;

  }
fetchBip();

})*/