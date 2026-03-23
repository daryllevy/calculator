/// Mes sélecteurs et mes variables, constantes
const digit = document.querySelector(".digits");
const operator = document.querySelector(".operators");
const operations = document.querySelector(".for-operations");
const screen = document.querySelector(".screen");
const display = document.querySelector(".display");
const equalSign = document.querySelector(".equal");
let num1;
let num2;
let num3; // numéro qui prend le relai lorsqu'il y a déjà le résultat
let isSecondNumberStarting = false;
let sign;
let result;
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
        if (num1 === undefined) {
          num1 = screen.textContent;
          display.textContent = `${num1} ${sign} `;
        } else {
          display.textContent = `${screen.textContent} ${sign} `;
        }
        console.log("num1 = " + num1);
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

    if (sign === undefined) {
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
    } else {
      //Je vérifie si c'est le début du deuxième nombre
      if (isSecondNumberStarting === true) {
        // Si le nombre affiché est 0
        if (screen.textContent === "0") {
          if (number === ".") {
            screen.textContent += number;
          } else {
            screen.textContent = number;
          }
        } else {
          screen.textContent = number;
        }

        isSecondNumberStarting = false;
      } else {
        //je vérifie si c'est d'abord 0 qu'on à taper pour qu'il ne soit pas le premier chiffre
        if (screen.textContent === "0") {
          if (number === ".") {
            screen.textContent += number;
          } else {
            screen.textContent = number;
          }
        } else {
          screen.textContent += number;
        }
      }

      number = screen.textContent;
    }
  }
}

/// Fonction pour savoir quel signe d'opération a été choisit
function getOperationSign(event) {
  target = event.target;

  if (target.matches(".op")) {
    sign = target.textContent;
    isSecondNumberStarting = true;
  }

  console.log("sign = " + sign);
}

/// Evènement pour effectuer l'opération
equalSign.addEventListener("click", (e) => {
  let target = e.target;

  if (target.matches(".equal")) {
    console.log("égal à été cliqué");

    if (sign !== undefined) {
      num2 = screen.textContent;
      display.textContent = `${num1} ${sign} ${num2} = `;
      console.log("num2 = " + num2);

      switch (sign) {
        case "+":
          sign = add;
          break;
        case "-":
          sign = subtract;
          break;
        case "/":
          sign = divide;
          break;
        case "x":
          sign = multiply;
          break;
      }

      result = operate(num1, num2, sign);
      console.log(`${num1} ${sign} ${num2} = ${result}`);
      screen.textContent = result;
    }
  }
});

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
  let result;

  result = operation(+num1, +num2);
  console.log(`num1: ${num1} ${operation} num2: ${num2} = ${result}`);

  return result;
}
