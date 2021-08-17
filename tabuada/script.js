function tabuada(){

    var num = window.document.getElementById('txtn')
    var boxt = window.document.getElementById('box')

    if (num.value.length == 0 ){
        window.alert('Por favor, digite um número!')
    }else{
        var numt = Number(num.value)
        boxt.innerHTML = ''
        for( var c = 0 ; c <= 10 ; c++ ){
            var tab = document.createElement('option')
            tab.innerText = `${numt} x ${c} = ${numt*c}`
            tab.value = `tab${c}` // usado para referenciar no PHP
            boxt.appendChild(tab)
        }


    }
       
    
    
    

}