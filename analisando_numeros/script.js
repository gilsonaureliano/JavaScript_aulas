var numtx = window.document.getElementById('numtx')
var boxv = document.getElementById('boxv')
var quant = window.document.getElementById('fim')

var valores = []
var soma = 0



function inLista(n , l){

    if (l.indexOf(n) == -1) {
        numtx.value = ''
        return false
              
    }else{
        
        return true

    }

}

function adcionar(){
    
    var num = Number(numtx.value)
    if (num == 0 || num< 0 || num > 100  || inLista(num,   valores)){
        window.alert('Número inválido ou repetido. Digite um número entre 1 e 100')
        numtx.value = ''
        numtx.focus()
        
    }else{
        var box = document.createElement('option')   
        box.text = `Valor ${num} adcionado`
        valores.push(num)
        soma += num
        boxv.appendChild(box)     
        numtx.value = ''
        numtx.focus()
        quant.innerHTML= ''
        
    }
    
    
}


function finalizar(){
    if(valores.length == 0){
        window.alert('Digite um número entre 1 e 100')

    }else{
        valores.sort()
        media = soma/valores.length
        
        quant.innerHTML= `Ao todo, temos ${valores.length} números cadastrados <br>
        O maior valor informado foi ${valores[valores.length -1]} <br>
        O menor valor informado foi ${valores[0]} <br>
        Somando todos os valores temos ${soma} <br>
        A média dos valores é ${media.toFixed(2).replace('.',',')}.`


    }
    
}

