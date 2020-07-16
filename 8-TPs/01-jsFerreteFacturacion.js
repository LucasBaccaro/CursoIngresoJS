/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioUno;  
    var PrecioDos;
    var PrecioTres;
    var Resultado;

    PrecioUno=txtIdPrecioUno.value;
    PrecioDos=txtIdPrecioDos.value;
    PrecioTres=txtIdPrecioTres.value;

    EnteroUno=parseInt(PrecioUno);
    EnteroDos=parseInt(PrecioDos);
    EnteroTres=parseInt(PrecioTres);

    Resultado=EnteroUno+EnteroDos+EnteroTres;
    alert("El resultado es: "+Resultado);

}
function Promedio () 
{
    var PrecioUno;  
    var PrecioDos;
    var PrecioTres;
    var ResultadoUno;
    var ResultadoFinal;

    PrecioUno=txtIdPrecioUno.value;
    PrecioDos=txtIdPrecioDos.value;
    PrecioTres=txtIdPrecioTres.value;

    EnteroUno=parseInt(PrecioUno);
    EnteroDos=parseInt(PrecioDos);
    EnteroTres=parseInt(PrecioTres);

    ResultadoUno=EnteroUno+EnteroDos+EnteroTres;
    ResultadoFinal=ResultadoUno/3; 
    alert("El promedio es: "+ResultadoFinal);
    
}
function PrecioFinal () 
{
    var PrecioUno;  
    var PrecioDos;
    var PrecioTres;
    var ResultadoUno;
    var ResultadoIVA;
    var ResultadoFinal;

    PrecioUno=txtIdPrecioUno.value;
    PrecioDos=txtIdPrecioDos.value;
    PrecioTres=txtIdPrecioTres.value;

    EnteroUno=parseInt(PrecioUno);
    EnteroDos=parseInt(PrecioDos);
    EnteroTres=parseInt(PrecioTres);
    EnteroIVA=parseInt(ResultadoIVA);

    ResultadoUno=EnteroUno+EnteroDos+EnteroTres;
    ResultadoIVA=ResultadoUno*0.21;
    ResultadoFinal=ResultadoUno+ResultadoIVA;
    

    alert("El resultado con IVA es: "+ResultadoFinal);	
}