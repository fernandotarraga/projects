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
                respuesta = prompt('¿Quieres introducir otro número?(y/n)');
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
