window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //Si estamos logueados
            logout.style.display = "inline-block";
            //console.log("User > "+JSON.stringify(user));
            console.log(user.email);
            document.getElementById("emailP").innerHTML = user.email;
            
        }else{
            // no estamos logueados
            logout.style.display = "none";
        }
    });
  }
  const firestore = firebase.firestore();
  const settings = {// your settings...  
    timestampsInSnapshots: true};
  firestore.settings(settings);

/*  const timestamp = snapshot.get('created_at');
  const date = timestamp.toDate();*/

  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardarTarjeta(){

  let numeroTarjeta = document.getElementById("numeroTarjeta").value;

  db.collection("users").add({
    consulta: "número Bip!",
    bip: numeroTarjeta

  })
  .then(function(docRef) {
   // console.log("Document written with ID: ", docRef.id);
    document.getElementById("numeroTarjeta").value="";
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
     $('#myModal').modal();
            let msn = document.getElementById("modalP");
           if (error.code) {
            msn.innerHTML = error.message;
           }
  });
}

//leer info tarjetas
let storage = document.getElementById("otrasTarjetas"); 
db.collection("users").onSnapshot((querySnapshot) => { 
  storage.innerHTML="";
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().bip}`);
      storage.innerHTML += `
          <p>${doc.data().bip} 
            <button type="button" class="close" onclick="eliminar('${doc.id}')" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
      `
  });
});

//borrar info tarjetas
function eliminar(id){
  db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
    $('#myModal').modal();
    let msn = document.getElementById("modalP");
   if (error.code) {
    msn.innerHTML = error.message;
   }
  });
}
