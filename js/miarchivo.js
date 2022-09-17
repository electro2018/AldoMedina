class Alumno{
    constructor(nombre,edad){
    this.nombre = nombre ;
    this.edad = edad;   
     }
    }
const promedio1 = new Alumno("Luis",31);
const promedio2 = new Alumno("Francisco",33); 
const promedio3 = new Alumno("Julio",35);
const promedio4 = new Alumno("Javier",41);
const promedio5 = new Alumno("Gerald",36);

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
