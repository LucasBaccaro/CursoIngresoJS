/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Num1;
	var Num2;
	var Resultado;
	Num1=parseInt(txtIdNumeroUno.value);
	Num2=parseInt(txtIdNumeroDos.value);
	Resultado=Num1+Num2;
	//txtIdNumeroUno
	//txtIdNumeroDos
	alert("La suma es "+Resultado);	
}

function restar()
{
	var Num1;
	var Num2;
	var Resultado;
	Num1=parseInt(txtIdNumeroUno.value);
	Num2=parseInt(txtIdNumeroDos.value);

	Resultado=Num1-Num2;
	alert("La resta es "+Resultado)
}

function multiplicar()
{ 
	var Num1;
	var Num2;
	var Resultado;

	Num1=parseInt(txtIdNumeroUno.value);
	Num2=parseInt(txtIdNumeroDos.value);

	Resultado=Num1 * Num2;
	alert("La multiplicacion es "+Resultado);
}

function dividir()
{
	var Num1;
	var Num2;
	var Resultado;

	Num1=parseInt(txtIdNumeroUno.value);
	Num2=parseInt(txtIdNumeroDos.value);

	Resultado=Num1 / Num2;
	alert("La division es "+Resultado)

}