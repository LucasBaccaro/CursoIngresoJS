/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=txtIdNumeroUno.value;		
	numero2=txtIdNumeroDos.value;

	numeroentero1=parseInt(numero1); 
	numeroentero2=parseInt(numero2); 
	
	resultado=numeroentero1+numeroentero2;

	alert("El resultado es: "+resultado) ;


}


