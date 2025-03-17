// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo(){
    let ingresoAmigos=document.getElementById("amigo");
    let nombre=ingresoAmigos.value.trim();
    if (nombre===""){
        alert('ingresa un nombre valido');
        return;
    }
    if(amigos.includes(nombre)){
        alert('el nombre ya esta en la lista');
        return;
    }
    amigos.push(nombre);
    ingresoAmigos.value="";
    actualizarLista();
}

function actualizarLista(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML ="";
    for (let i=0; i<amigos.length;i++){
        let li =document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
    }

}
function sortearAmigo(){
    if (amigos.length===0){
        alert("No se tienen amigos en la lista");
        return;
    }
    else if(amigos.length<2){
        alert("se necesitan al menos 2 amigos")
        return;

    }
    let numeroaletorio=Math.floor(Math.random()*amigos.length);
    let amigosSorteado=amigos[numeroaletorio];
    let resultadoElemnto=document.getElementById("resultado");
    resultadoElemnto.innerHTML=`<li>${'el amigo secreto es '+ amigosSorteado}</li>`;
}