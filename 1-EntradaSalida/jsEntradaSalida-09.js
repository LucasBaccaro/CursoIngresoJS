/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Debemos lograr tomar el importe por ID.value ,
//transformarlo a entero "parseInt()", luego
//mostrar el importe con un aumento del 10 %. en el cuadro de texto "txtIdResultado
function mostrarAumento()
{
	//txtIdSueldo
	//txtIdResultado

var Sueldo;
var Aumento;
var Resultado;

Sueldo=txtIdSueldo.value;
Aumento=txtIdSueldo.value * 0.10;

SueldoEntero=parseInt(Sueldo);
AumentoEntero=parseInt(Aumento);

Resultado=SueldoEntero+AumentoEntero;

txtIdResultado.value=Resultado;






	




	
	
	


}
