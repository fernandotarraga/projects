
var array = [];

const calculator = () => {

    const primerNumero = parseFloat(prompt('Dame el primer número.')).toFixed(3);
    const segundoNumero = parseFloat(prompt('Dame el segundo número.')).toFixed(3);

    console.log(primerNumero)
    console.log(segundoNumero)

    if(isNaN(primerNumero) && isNaN(segundoNumero)){
        console.log('Debes introducir números.');
        return false;
    }else if(isNaN(primerNumero)){
        //Raiz cuadrada segundo numero
        array.push('La raíz cuadrada de '+segundoNumero+' es '+Math.sqrt(segundoNumero));
        console.log(array);
        return false;
    }else if(isNaN(segundoNumero)){
        array.push('La raíz cuadrada de '+primerNumero+' es '+Math.sqrt(primerNumero));
        console.log(array);
        return false;
    }

    let suma = (parseFloat(primerNumero) + parseFloat(segundoNumero)).toFixed(3);
    let resta = (parseFloat(primerNumero) - parseFloat(segundoNumero)).toFixed(3);
    let multiplicacion = (parseFloat(primerNumero) * parseFloat(segundoNumero)).toFixed(3);
    let division = (parseFloat(primerNumero) / parseFloat(segundoNumero)).toFixed(3);

    if((suma.includes('.000'))){
        suma = Math.trunc(suma);
    }
    if((resta.includes('.000'))){
        resta = Math.trunc(resta);
    }
    if((multiplicacion.includes('.000'))){
        multiplicacion = Math.trunc(multiplicacion);
    }
    if((division.includes('.000'))){
        division = Math.trunc(division);
    }

    array.push('suma de '+primerNumero +' + '+segundoNumero+' = '+suma);
    array.push('resta de '+primerNumero +' - '+segundoNumero+' = '+resta);
    array.push('multiplicacióm de '+primerNumero +' * '+segundoNumero+' = '+multiplicacion);
    array.push('división de '+primerNumero +' / '+segundoNumero+' = '+division);
    console.log(array);

    /* console.log(primerNumero +' + '+segundoNumero+' = '+suma);
    console.log(primerNumero +' - '+segundoNumero+' = '+resta);
    console.log(primerNumero +' * '+segundoNumero+' = '+multiplicacion);
    console.log(primerNumero +' / '+segundoNumero+' = '+division); */
}


    

