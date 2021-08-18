function contar(numero){

    console.log(numero)

    let pxnumero = numero - 1

    if (pxnumero > 0){

        contar(pxnumero)
    }
}

contar(3)