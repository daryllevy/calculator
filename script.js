/// Mes sélecteurs
const digit = document.querySelector(".digits");
const operator = document.querySelector(".operators");
const operations = document.querySelector(".for-operations");
const screen = document.querySelector(".screen");
let isNumberAdded = false;
let num1;
let num2;
let sign;
let target;

/// Evènement pour attribuer les nombres et l'opérateur
operations.addEventListener("click", (e) => {
  target = e.target;
  if (target.matches("button")) {
    if (target.matches(".digit")) {
      getNumber(e);
    } else {
      if (target.matches(".op")) {
        getOperationSign(e);
      } else {
        if (sign === undefined) {
          num1 = screen.textContent;
          screen.textContent = "0";
          console.log("num1 = " + num1);
        } else {
          num2 = screen.textContent;
          screen.textContent = "0";
          console.log("num2 = " + num2);
        }
      }
    }
  }
});

/// Fonction pour update les nombres lorsqu'on clique sur un bouton de chiffre
function getNumber(event) {
  target = event.target;

  if (target.textContent === "=") {
    number = "";
  } else {
    number = target.textContent;

    // Si le nombre affiché est 0
    if (screen.textContent === "0") {
      if (number === ".") {
        screen.textContent += number;
      } else {
        screen.textContent = number;
      }
    } else {
      screen.textContent += number;
    }
    number = screen.textContent;
    console.log(`number : ${number}`);
  }
}

/// Fonction pour savoir quel signe d'opération a été choisit
function getOperationSign(event) {
  target = event.target;

  if (target.matches(".op")) {
    sign = target.textContent;
  }
  console.log("sign = " + sign);
}

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
