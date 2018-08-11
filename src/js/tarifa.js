

const renderBipBalance = document.getElementById("renderBipBalance"); 
let storeBipBalance;
const boton= document.getElementById("boton");
let ticket = document.getElementById("selectTime").value;

 // funcion de asincrona fetch para  consultar a la api
 
 let storeBipBalance2;
 boton.addEventListener("click", event=>{
  let selectBip = document.getElementById('selectBip').value;
  
  async function fetchBip2(){
    const bip = await fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${selectBip}`)
    const dataBip = await bip.json()
    console.log(dataBip);
    let arrBip = Object.entries(dataBip)
    console.log(arrBip[2][1])
    storeBipBalance2 = arrBip[2][1];

    //se le saca el signo $ al saldo de la bip
    let bipBalanceWithOut$ = Array.from(storeBipBalance2).slice(1).reduce( (accumulator, currentValue) => accumulator + currentValue);
    console.log((Array.from(storeBipBalance2)).indexOf('.'));// indice del punto del saldo de la bip. podría servir para algo...
    console.log(bipBalanceWithOut$ - ticket); // muestra el calculo de tarifa en la consola
    document.getElementById("finalBalance").innerHTML = "saldo final: $" + (bipBalanceWithOut$ - ticket);
    renderBipBalance.innerHTML = "su saldo es: "+storeBipBalance2;
    
    }
  fetchBip2();
  
   })
// si fala este código aparece un mensaje en la consola que la app se puede romper
 const firestore = firebase.firestore();
 const settings = {/* your settings... */ 
   timestampsInSnapshots: true};
 firestore.settings(settings);

/*  const timestamp = snapshot.get('created_at');
 const date = timestamp.toDate();*/

 // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

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

function ticketSelection(){
  ticket = document.getElementById("selectTime").value;
  document.getElementById("ticketPrice").innerHTML = "costo pasaje: $" + ticket;
}
