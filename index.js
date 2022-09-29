let productos = [];
let contenedor = document.getElementById("contenedor");
//let contenedor2 = document.getElementById("contenedor2");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
contenedor.innerHTML = "";
//contenedor2.innerHTML = "";

function promedio() {
 let a=inputs[0].value;
 let b=inputs[1].value;
 s=(parseInt(a)+parseInt(b))/2 ;
 return s ;
}

let inputs = e.target.children;
productos.push(inputs[0].value);

 productos.forEach(producto =>{
 let div = document.createElement("div");
 div.innerHTML = promedio();
 

 //almacenando en localStorage;
 localStorage.setItem("objeto ",JSON.stringify({nombre: "camilo",nota: s}));
  contenedor.append(div);

  })
    inputs[0].value = "";
    inputs[1].value = "";
 //acceder al localStorage    
 let nombre = localStorage.getItem("nombre");   



})



