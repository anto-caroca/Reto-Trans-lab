

const renderBipBalance = document.getElementById("renderBipBalance"); 
let storeBipBalance;
const boton= document.getElementById("boton");
let ticket = document.getElementById("selectTime").value;

 // funcion de asincrona fetch para  consultar a la api
 
 let storeBipBalance2;
 boton.addEventListener("click", event=>{
  let selectBip = document.getElementById('selectBip').value;
  
  async function fetchBip2(){
    const bip = await fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${selectBip}`)
    const dataBip = await bip.json()
    console.log(dataBip);
    let arrBip = Object.entries(dataBip)
    console.log(arrBip[2][1])
    storeBipBalance2 = arrBip[2][1];

    //se le saca el signo $ al saldo de la bip
    let bipBalanceWithOut$ = Array.from(storeBipBalance2).slice(1) // ["5", ".", "4", "9", "0"]

    // indice del punto del saldo de la bip
    let index = bipBalanceWithOut$.indexOf('.');
    if (index > -1) {
     bipBalanceWithOut$.splice(index, 1);
    }
  //  console.log("sin punto: "+ bipBalanceWithOut$); // sin punto: 5,4,9,0
  //  console.log(bipBalanceWithOut$); // ["5", "4", "9", "0"]
    console.log(bipBalanceWithOut$.reduce( (accumulator, currentValue) => accumulator + currentValue)); // 5490
    let bipSinPunto = bipBalanceWithOut$.reduce( (accumulator, currentValue) => accumulator + currentValue);

    console.log(bipSinPunto - ticket); // muestra el calculo de tarifa en la consola
    let saldoFinal = bipSinPunto - ticket;


    document.getElementById("finalBalance").innerHTML = "saldo final: $" + (saldoFinal);
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
