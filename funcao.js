function parouimpar(n){
    if (n % 2 === 0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}

var num = parouimpar(12)
console.log(num)