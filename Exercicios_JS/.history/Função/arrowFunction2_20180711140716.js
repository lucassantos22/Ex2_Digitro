function Person(()=>{
    
})
    this.idade = 18;

    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    },1000);

// new Person;

////////////////////////////////

function Person2(){
    this.idade = 18;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this),1000);
}

// new Person2;