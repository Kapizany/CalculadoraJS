function calcular(tipo, valor){

    if (tipo === 'acao'){

        if (valor === 'C') {
            setResultado('')
        } else if (valor === '/' || valor === '*' || valor === '-' || valor === '+'){
            setResultado( getResultado() + valor)
        } else if (valor === '='){
            setResultado( eval(getResultado()))
        }

    } else if (tipo === 'valor') {
        setResultado( getResultado() + valor)
    }

}

function getResultado (){
    return document.getElementById('resultado').value
}

function setResultado (valor) {
    document.getElementById('resultado').value = valor
}