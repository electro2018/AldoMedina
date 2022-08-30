//ingresar numero y regresa el doble , escribir "salir" donde se termina el ciclo y muestra  cantidad de ingresados
function promedio (){
    intop=0;      
    var entrada1 = prompt("ingrese cantidad de notas a contabilizar")
    for (let a=0;a<entrada1;a++)
    
    {
    var into = prompt( "ingrese nota" )
    var intop=  parseInt(intop) +  parseInt(into)
    }
     
    alert( "promedio es " +  intop/entrada1)
    
        }
    promedio();