let a = 123;

console.log(this.a);
console.log(global.a);

global.b = 456;
console.log(global.b);

this.c = 789;
console.log(this.c);

this.d = 'teste';
console.log(d);

console.log(module.exports);
console.log(this.c === module.exports.c);