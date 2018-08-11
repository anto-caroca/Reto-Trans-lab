function logoutWithFirebase(){
    firebase.auth().signOut()
        .then(()=>{
            console.log("Usuario finalizó su sesión");
            window.location="index.html";
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
            // modal con mensaje de error
            $('#myModal').modal();
            let msn = document.getElementById("modalP");
           if (error.code) {
            msn.innerHTML = error.message;
           }
        });
  }
  