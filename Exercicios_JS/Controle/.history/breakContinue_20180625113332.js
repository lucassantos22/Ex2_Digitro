const nums = new Array (1,2,3,4,5,6,7,8,9,10);

for(let i in nums){
    if(i!=5){
        console.log(`Índice ${i}: ${nums[i]}`)
    }else{
        break; //Quebrou no índice 5
    }
}

for(let f in nums){
    if(f==5){
        continue;
    }else{
        console.log(`Índice ${f}: ${nums[f]}`)
    }
}

externo: for(a in nums){
    for(b in nums){
        if(nums[a]!=2 && nums[b]!=10){
            console.log(`A: ${nums[a]}, B: ${nums[b]}.`);
        }else{
            break externo;
        }
    }
}