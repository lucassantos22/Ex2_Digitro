const individuo_1 = {
    nome: "Lucas",
    idade: 18,
    endereco:{
        logradouro:"Rua ABC",
        Rua: 123
    }
}

const {nome:n, idade:i, endereco:e} = individuo_1;

console.log(`Endereço: ${e}`);