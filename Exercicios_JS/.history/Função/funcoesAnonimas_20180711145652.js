const soma = function(x,y){
    return x+y;
}

console.log(soma(1,2));

const imprimirResultado = function(a,b,operacao=soma){
    console.log(a + b + operacao);
}

imprimirResultado(1,2,4);