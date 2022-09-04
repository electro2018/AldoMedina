//array que compara si alumno corresponde a la lista

function promedio () {
    intop=0;   
    const nombre = ["Luis" ,"Francisco" ,"Julio","Javier","Gerald"] 
    var entrada2 = prompt("ingrese nombre con mayuscula")
     for (let i=0;i<nombre.length;i++)
     if (nombre[i]==entrada2)
     {
     alert("si corresponde");
     }
    var entrada1 = prompt("ingrese cantidad de notas a contabilizar")
    for (let a=0;a<entrada1;a++)
        {
    var into = prompt( "ingrese nota" )
    var intop=  parseInt(intop) +  parseInt(into)
    }
    alert( "promedio es " + intop/entrada1)
    }
    promedio();