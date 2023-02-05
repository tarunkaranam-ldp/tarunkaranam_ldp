console.log(3/2);
console.log("Hello World");
console.log("hello"[1]=='e');
/*control structures*/
const x = 3;

if (x < 0) {
  console.log("The number is negative.");
} else if (x === 0) {
  console.log("The number is zero.");
} else {
  console.log("The number is positive.");
}
const i = 2;

switch(true) { // in this example it's a constant value
case (i < 10):
  console.log("one digit");
  break;
case (i >= 10 && i < 100):
 console.log("two digits");
  break;
default:
  // …
  break;
}
for (let i = 0; i < 10; i++) {
    console.log(i+" ");
  }
  let counter = 100;
do {
  counter++;
  console.log(counter);  // ... or some logging
} while (counter < 10)
let c = 1;
while (c < 10)
{
  c++;
  console.log(c);  // ... or some logging
} 
function greet(){
    console.log("hello world");
}
greet();
function myFunction(p1, p2) {
    return p1 * p2;
  }
  console.log(myFunction(4,3));
  let alien={

  }
  console.log(typeof alien)
  let input ='firstName'
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person.firstName);
  console.log(person['age']);
  console.log(person[input]);

  let hello = "";

hello = () => "Hello World!";
console.log(hello+" ");
let myFun = (a, b) => a * b;
console.log(myFun(2,3));