let contador = 1;
while(contador <=10){
    console.log(`Contador: ${contador}`);
    contador++;
}

for(let i=1;i<=10;i++){
    console.log(`i: ${i}`);
}

const notas = [6.7,7.4,8.1,7.7];

for(let i=0; i<notas.length;i++){
    console.log(`Notas: ${notas[i]}.`);
}

const filtro = notas.filter(el=>{
    return el>7;
})

console.log(filtro);