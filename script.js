/// Fonction d'addition
function add(num1, num2) {
  return num1 + num2;
}

//// Fonction de soustraction
function subtract(num1, num2) {
  return num1 - num2;
}

/// Fonction de multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

/// Fonction divide
function divide(num1, num2) {
  return num1 / num2;
}

/// Fonction pour effectuer les opérations
function operate(num1, num2, operation) {
  let result = operation(num1, num2);
  return result;
}

console.log(operate(2, 5, add));
