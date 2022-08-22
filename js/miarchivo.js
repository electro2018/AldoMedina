//ingresar numero y regresa el doble , escribir "salir" donde se termina el ciclo y muestra  cantidad de ingresados
for (let a=0; a<10 ;a++)
{
var entrada =prompt ("ingrese valor")
var salida = entrada*2

if (entrada == "salir") {
 alert("se ingresaron "+ a +  "   numeros")
a=11;
}
else 
alert("valor es "+ "   " +salida)}