
window.onload = ()=>{
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          //Si no estamos logueados
          logout.style.display = "inline-block";
          // console.log("User > "+JSON.stringify(user));
          console.log(user.email);
      }else{
          //ya estamos logueados
         
          logout.style.display = "none";
      }
  });
}