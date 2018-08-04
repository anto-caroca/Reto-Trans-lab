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
         // alert(error.code);
         // alert(error.message);
         
      });
}

window.onload = ()=>{
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          //Si no estamos logueados
          logout.style.display = "inline-block";
          console.log("User > "+JSON.stringify(user));
      }else{
          //ya estamos logueados
         
          logout.style.display = "none";
      }
  });
}