const notas = new Array(6.7,7.4,10,8.1,7.7);

for(let i in notas){
    f = Number(i) + 1;
    console.log(`Nota ${i}: ${notas[i]}`);
}