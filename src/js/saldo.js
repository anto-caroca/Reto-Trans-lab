
// funcion de asincrona fetch para  consultar a la api
const renderBipBalance = document.getElementById("renderBipBalance");
let storeBipBalance;
const boton= document.getElementById("boton");

boton.addEventListener("click", event=>{
let numBip = document.getElementById('numBip').value;

async function fetchBip1(){
  const bip = await fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numBip}`)
  const dataBip = await bip.json();
  console.log(dataBip);
  let arrBip = Object.entries(dataBip)
  console.log(arrBip[2][1])
  storeBipBalance = arrBip[2][1];
  renderBipBalance.innerHTML = "su saldo es: "+storeBipBalance;

  }
fetchBip1();

 })
 // fetch con select
 let storeBipBalance2;
 boton.addEventListener("click", event=>{
  let selectBip = document.getElementById('selectBip').value;
  
  async function fetchBip2(){
    const bip = await fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${selectBip}`)
    const dataBip = await bip.json()
    console.log(dataBip);
    let arrBip = Object.entries(dataBip)
    console.log(arrBip[2][1])
    storeBipBalance2 = arrBip[2][1];
    renderBipBalance.innerHTML = "su saldo es: "+storeBipBalance2;
  
    }
  fetchBip2();
  
   })

 const firestore = firebase.firestore();
 const settings = {/* your settings... */ 
   timestampsInSnapshots: true};
 firestore.settings(settings);

/*  const timestamp = snapshot.get('created_at');
 const date = timestamp.toDate();*/

 // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardarTarjeta(){

 let numBip = document.getElementById("numBip").value;

 db.collection("users").add({
   bip: numBip
 })
 .then(function(docRef) {
   //console.log("Document written with ID: ", docRef.id);
   document.getElementById("numBip").value="";
 })
 .catch(function(error) {
   console.error("Error adding document: ", error);
   
 });

}

//leer info tarjetas
 selectBip = document.getElementById("selectBip"); 
db.collection("users").onSnapshot((querySnapshot) => { //se reemplaza get x onSnapshot para obtener actualizaciones en tiempo real. Tambien se saca .then
 selectBip.innerHTML="";
 querySnapshot.forEach((doc) => {
     console.log(`${doc.id} => ${doc.data().bip}`);
     selectBip.innerHTML += `
     <select>
         <option>${doc.data().bip}</option>
     </select>
     `
 });
});
