/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe; 
	var Descuento;
	var Resultado; 

	Importe=txtIdImporte.value;
	ImporteEntero=parseInt(Importe)

	Descuento=Importe*25/100;
	Resultado=Importe-Descuento;
	
	txtIdResultado.value=Resultado;
	
	

}
