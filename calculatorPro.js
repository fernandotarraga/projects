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

    calculatorPro();
}

const calculatorPro = () => {

    let array = [];
    let arrayRespuestas = [];

    let respuesta = prompt('¿Quieres introducir un número?');

    if(respuesta === 'y'){

        const primerNumero = parseFloat(prompt('Introduce un número'));
        if(isNaN(primerNumero)){
            console.log('Debes introducir números.');
        }else{
            array.push(primerNumero);
            do{
                respuesta = prompt('¿Quieres introducir otro número?');
                if(respuesta !== 'y'){
                    break;
                }
                let number = parseFloat(prompt('Introduce un número'));
                if(isNaN(number)){
                    console.log('Debes introducir números.');
                    return false;
                    //EJECUTAR FUNCIONES CON LO QUE TENGA
                }else{
                    array.push(number);
                }
            }while(respuesta === 'y');

                arrayRespuestas.push('La suma de los números es '+suma(array));
                arrayRespuestas.push('La resta de los números es '+resta(array));
                arrayRespuestas.push('La multiplicación de los números es '+multiplicacion(array));
                arrayRespuestas.push('La division de los números es '+division(array));
                console.log(arrayRespuestas)

        }
        
    }else if(respuesta === 'n'){
        console.log('No se introdujo nada');
        return false;
    }else if(isNaN(respuesta)){
        console.log('Debes introducir números');
    }
    
}

const suma = (array) => {
    let suma = 0;
    for(let i = 0; i<array.length; i++){
        suma = suma + array[i];
    }
    return suma;
}
const resta = (array) => {
    let resta = 0;
    for(let i = 0; i<array.length; i++){
        resta = resta - array[i];
    }
    return resta;
}
const multiplicacion = (array) => {
    let multiplicacion = array[0];
    for(let i = 1; i<array.length; i++){
        multiplicacion = multiplicacion * array[i];
    }
    return multiplicacion;
}
const division = (array) => {
    let division = array[0];
    for(let i = 1; i<array.length; i++){
        division = division / array[i];
    }
    return division;
}
