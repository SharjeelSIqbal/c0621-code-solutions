function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);
var example = new ExampleConstructor();
console.log(example);
console.log(example instanceof ExampleConstructor);
