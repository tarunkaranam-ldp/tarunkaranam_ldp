function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function operate(a, b, operation) {
    return operation(a, b);
  }
  
  console.log(operate(2, 3, add)); // Output: 5
  console.log(operate(2, 3, multiply)); // Output: 6
  