/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//"FahrenheitCentigrados()" de farenheit a centigrados
    
    //"CentigradosFahrenheit()" de centigrados a farenheit
    

    //
    //formula C=F-32 / 1.8
    //formula F=1.8*C+32




function FahrenheitCentigrados () 
{
    var farenheit;
    var resultado;
    var resultadoFinal;

    farenheit=txtIdTemperatura.value;
    farenEntero=parseInt(txtIdTemperatura.value);

    resultado=farenEntero-32;
    resultadoFinal=resultado/ 1.8;

    alert ("Estos " +farenEntero+ "F son igual a " +resultadoFinal+ "C ");
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var resultado;
    var resultadoFinal;

    centigrados=txtIdTemperatura.value;
    centigradoEntero=parseInt(centigrados);

    resultado=centigradoEntero*1.8;
    resultadoFinal=resultado+32;
    
    alert(" Estos "+centigradoEntero+ "C son igual a "+resultadoFinal+"F ")

}
