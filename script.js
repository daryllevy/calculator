/// Mes sélecteurs
const digit = document.querySelector(".digits");
const screen = document.querySelector(".screen");
let isNumberAdded = false;
let num1;
let num2;

/// Fonction pour update les nombres lorsqu'on clique sur un bouton de chiffre
function getNumber() {
  digit.addEventListener("click", (e) => {
    let target = e.target;
    let number;

    if (target.matches("button")) {
      number = target.textContent;
      console.log(`hors condition ${number}`);

      if (screen.textContent === "0") {
        screen.textContent = number;
      } else {
        screen.textContent += number;
      }
      number = screen.textContent;
      console.log("final number " + number);
    }

    return number;
  });
}

function getOperationSign() {
  
}

getNumber();

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
