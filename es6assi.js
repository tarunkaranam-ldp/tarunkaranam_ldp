const printName = name => `Hi ${name}`;
console.log(printName('tharun'))


const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill('tharun','595'))



const person = {
    nam: "Noam Chomsky",
    age: 92
  };
  
  const { nam, age } = person;
  console.log(nam);