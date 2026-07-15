
/*Calculadora basica*/

//Variables pricipales
let pantalla = document.getElementById("pantalla");
let primerNumero=null;
let operador=null;
let segundoNumero=false;

//Funcion para ingresa los numeros en pantalla
function numero(valor){

    if(pantalla.value=="0" || segundoNumero){
        pantalla.value=valor;
        segundoNumero=false;
    }
    else{
        pantalla.value+=valor;
    }
}

//Funcion para manejar los decimales y no repetir el punto
function decimal(){

    if(segundoNumero){
        pantalla.value="0.";
        segundoNumero=false;
        return;
    }

    if(!pantalla.value.includes(".")){
        pantalla.value+=".";
    }
}

//Funcion para ingresa las operaciones
function operacion(op){

    primerNumero=parseFloat(pantalla.value);
    operador=op;
    segundoNumero=true;
}

//Funcion para sacar el resultado
function resultado(){

    if(operador==null) return;

    let segundoNumero=parseFloat(pantalla.value);
    let res=0;

    switch(operador){

        case "+":
            res=primerNumero+segundoNumero;
        break;

        case "-":
            res=primerNumero-segundoNumero;
        break;

        case "*":
            res=primerNumero*segundoNumero;
        break;

        case "/":

            //Para manejar si se divide por cero
            if(segundoNumero==0){
                pantalla.value="Error";
                primerNumero=null;
                operador=null;
                segundoNumero=false;
                return;
            }

            res=primerNumero/segundoNumero;

        break;
    }

    pantalla.value=res;
    primerNumero=res;
    operador=null;
    segundoNumero=false;
}

//Funcion para limpia la pantalla y variables
function limpiar(){

    pantalla.value="0";
    primerNumero=null;
    operador=null;
    segundoNumero=false;
}

//Funcion para borra numeros de uno en uno de derecha a izquierda
function borrar(){

    if(segundoNumero) return;

    if(pantalla.value.length==1){
        pantalla.value="0";
    }
    else{
        pantalla.value=pantalla.value.slice(0,-1);
    }
}