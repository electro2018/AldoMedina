let productos = [
    
    {nombre:"Luis"     , edad:31},
    {nombre:"Francisco" ,edad:33},
    {nombre:"Julio"    , edad:35},
    {nombre:"Javier"  ,  edad:41},
    {nombre:"Gerald"  ,  edad:36},
    
    ]
let contenedor = document.getElementById("contenedor");
let input = prompt("Ingresa nombre alumno que se mostraran datos [Luis,Francisco,Julio,Javier Gerald]");
if (input === productos[0].nombre )   
 
    for (let i=0 ; i<5 ; i++){
        if (input === productos[i].nombre ) {
    let div = document.createElement("div");
div.innerHTML =`
<h2>Nombre ${productos[i].nombre}</h2>
<p>Edad ${productos[i].edad}</p>
`
contenedor.append(div);
} }
   
function promedio() {
 let intop=0;   
    const nombre = ["Luis" ,"Francisco" ,"Julio","Javier","Gerald"] 
    let entrada2 = prompt("ingrese nombre alumno [ Luis,Francisco,Julio,Javier,Gerald]")
     for (let i=0;i<nombre.length;i++)
     if (nombre[i]==entrada2)
     {     alert("si corresponde");     }

    let entrada1 = prompt("ingrese cantidad de notas a contabilizar")
    for (let a=0;a<entrada1;a++)        {
    const into = prompt( "ingrese nota" )
    intop=  parseInt(intop) +  parseInt(into)    }
    alert( "promedio es " + intop/entrada1)
    }

     promedio();