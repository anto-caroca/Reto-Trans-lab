//funcionalidad del side Menú
function toggleMenu() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (sideMenu.className.indexOf("menu_closed") >= 0) { // primero revisamos si la clase d-none esta
    openMenu();  // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeMenu(); //si no esta la clase, le indicamos que cierre el menu
  }
}

function openMenu() {
  sideMenu.classList.remove('menu_closed'); // quitando clase display-none
  sideMenu.classList.add('menu_open');
}

function closeMenu() {
  sideMenu.classList.add('menu_closed'); // añadimos la clase display-none
  sideMenu.classList.remove('menu_open');
}

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

  window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //Si estamos logueados
            logout.style.display = "inline-block";
            // console.log("User > "+JSON.stringify(user));
            console.log(user.email);
            document.getElementById("emailP").innerHTML = user.email;
            
        }else{
            // no estamos logueados
            logout.style.display = "none";
        }
    });
  }
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ 
    timestampsInSnapshots: true};
  firestore.settings(settings);

/*  const timestamp = snapshot.get('created_at');
  const date = timestamp.toDate();*/

  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardarTarjeta(){

  let numeroTarjeta = document.getElementById("numeroTarjeta").value;

  db.collection("users").add({
    bip: numeroTarjeta
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
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
db.collection("users").onSnapshot((querySnapshot) => { //se reemplaza get x onSnapshot para obtener actualizaciones en tiempo real. Tambien se saca .then
  storage.innerHTML="";
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().bip}`);
      storage.innerHTML += `
          <p>${doc.data().bip} <button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></p>
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
