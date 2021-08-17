function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var ret = window.document.getElementById('ret') 
    /*var inicio = 1
    var fim = 10
    var passo = 1 */
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    ret.innerHTML = 'Contando: <br>'
    if (i == 0 || f == 0 || p == 0 || i == f ){
        window.alert('[ERRO] Favor informar os dados corretamente!')
        ret.innerHTML = 'Impossivel contar'
    }else{
        if (f > i && p > 0){
            // contagem crescente
            for (var valor = i; valor <= f; valor += p){
        
                ret.innerHTML += ` ${ valor} \u{1F60A} `
            }
        } else {
            if (p < 0) {
                window.alert('[ERRO] Passo invalido')
                ret.innerHTML = 'Impossivel contar'
            }else{
                //contagem decrescente
                for(var valor = i; valor >= f; valor -= p){
                    ret.innerHTML += ` ${ valor}  \u{1F60A}`

            }
            
            }

        }

        

        

    }
    ret.innerHTML += ` \u{1F3C1} `
    
    
         
       
    
    
   

}


