function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min;
    return valor;
}

console.log(getInteiroAleatorioEntre(-10,5));