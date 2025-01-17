/*
    Recursividad: la recursividad es una función que se llama a sí misma. 
    Piensa en ello como una alternativa al bucle.
*/


function funcRecursiva() {
    console.log("Esto es una Funcion recursiva");
    // funcRecursiva();
}

// Inicio comentado para evitar recursividad(repericion) infinita.
// funcRecursiva();


function otraFuncionRecursiva(){
    console.log("Esto es otra funcion recursiva");
    funcRecursiva();
}

otraFuncionRecursiva();



//      ****** Practica ******

// Crear la una funcion recursiva que imprima los numeros de 5 en 5 hasta llegar a 1000 partiendo de 5.
// (Usar condicionales(If o Switch) y Evitar usar bucles(for... while))


let numero = 0;

function contar(){
    // Realizo el incremento de la variable de 5 en 5 con el operador de asignacion y suma
    numero += 5;
    
    // // Evaluar si el numero luego de ser incrementado es menor o igual a mil
    // if(numero <= 1000){
    //     // Mostrar el numero
    //     console.log(numero);
    //     // Recursividad: implica volver a llamar la funcion
    //     contar();
    // }
    // // Si el numero es mayor a 1000
    // else{
    //     // Mostrar mensaje que indica que la recursividad se detuvo
    //     console.log(`La recursividad se ha detenido por que el numero ${numero} es mayor a 1000`)
    // }


    switch(numero < 1001){
        
        case true:
            // Mostrar el numero
            console.log(numero);
            // Recursividad: implica volver a llamar la funcion
            contar();
            break;
        
        default:
            // Mostrar mensaje que indica que la recursividad se detuvo
            console.log(`La recursividad se ha detenido por que el numero ${numero} es mayor a 1000`)
    }

};


contar();


/*
    ¿En que situaciones usar las funciones recursivas?
    Las funciones recursivas se usan en situaciones en las que un problema puede ser dividido en 
    subproblemas más pequeños y similares al problema original.

    Por ejemplo: tienes una tarjeta de metro y 10$ de saldo,
    cada pasaje cuesta 1$ y es descontado por una funcion de deduccion, tras 10 viajes tu tarjeta se queda 
    sin saldo, en este momento el sistema que realiza el descuento de saldo te ofrecera la opcion de 
    realizar una recarga, en este momento la funcion de decuccion llama una funcion diferente
    llamada recargar para el proceso de agregar saldo.
    tras realizar la recarga, esta funcion(recargar) llamara la funcion de decuccion para cobrar tu 
    proximo pasaje.

    En general, las funciones recursivas son útiles para problemas que tienen una estructura 
    de llamadas en cascada, mientras que los bucles y estructuras de datos son más adecuados 
    para problemas lineales.
*/