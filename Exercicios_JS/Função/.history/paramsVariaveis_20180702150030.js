function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1,2,3));
console.log(soma(1,2,"Teste"));
console.log(soma("Oi","Testando","Praticando"));

function soma2(){
    for(i in arguments)
}

soma2(10,40);