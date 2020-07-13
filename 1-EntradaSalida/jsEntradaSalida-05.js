/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var EdadIngresada;
	var NombreIngresado;
	NombreIngresado=txtIdNombre.value ;
	EdadIngresada=txtIdEdad.value ;
	
	alert("Usted se llama "+NombreIngresado);
	alert("Usted tiene "+EdadIngresada+ " años ");
 
	alert (" Usted se llama "+NombreIngresado+ " y tiene "+EdadIngresada+" años ");

}