const binario = document.getElementById("binarios")
const h1 = document.getElementById("resultado")
const permitidos = [0, 1]

binario.addEventListener("input", function (){
    const digitos = binario.value.split("")
    for (const digito of digitos){
        if (digito !== "0" && digito !== "1"){
            alert ("Escribe solo Ceros(0) y Unos(1)")
        }
    }
        
})
    
const buttonConvertir = document.getElementById("convertir").addEventListener("click", function(){
    h1.innerHTML = ""
    const binarioValue = binario.value
    const binarioValueArray = binarioValue.split("").reverse()
    const number = binarioValueArray.map(Number)
    const resultado = number.reduce((acc, numero, index) => {
        return acc + numero * 2 ** index
    }, 0)
    h1.innerHTML = resultado
})






